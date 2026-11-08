// Flag Game – überarbeitete Spiellogik mit unveränderter Original-Oberfläche.
const DEFAULT_SETTING = {
    hintKey: { key: '+', code: 'Equal', keyCode: 187 },
    skipKey: { key: '#', code: 'Slash', keyCode: 191 },
    checkKey: { key: 'Enter', code: 'Enter', keyCode: 13 },
    clearInput: false,
    confirmSkip: false,
    isGerman: false,
    isAutoSkip: true
};
const DEFAULT_SELECTOR = {
    flagType: 'country',
    flagUn: ['yesun'],
    flagContinent: ['all', 'Europa', 'Afrika', 'Asien', 'Nordamerika', 'Südamerika', 'Ozeanien'],
    flagStyle: 'show'
};
const localStorageVersion = 'fg_1_';
const ALL_CONTINENTS = DEFAULT_SELECTOR.flagContinent.slice(1);

function readStored(key) {
    try { return JSON.parse(localStorage.getItem(localStorageVersion + key)); }
    catch (_) { return null; }
}
function saveStored() {
    try {
        localStorage.setItem(localStorageVersion + 'settingFlagGame', JSON.stringify(setting));
        localStorage.setItem(localStorageVersion + 'selectorOrder', JSON.stringify(selectorOrder));
    } catch (_) { /* Auch ohne verfügbaren Browser-Speicher nutzbar. */ }
}

const storedSetting = readStored('settingFlagGame');
let setting = { ...DEFAULT_SETTING, ...(storedSetting && typeof storedSetting === 'object' ? storedSetting : {}) };
for (const key of ['hintKey', 'skipKey', 'checkKey']) {
    setting[key] = { ...DEFAULT_SETTING[key], ...(setting[key] || {}) };
}
const storedSelector = readStored('selectorOrder');
let selectorOrder = { ...DEFAULT_SELECTOR, ...(storedSelector && typeof storedSelector === 'object' ? storedSelector : {}) };
if (!['country', 'capital'].includes(selectorOrder.flagType)) selectorOrder.flagType = 'country';
// Alte Filterauswahl der vorherigen Version in zwei unabhängige Schalter umwandeln.
// So bleiben bereits gespeicherte Einstellungen nach dem Update nutzbar.
if (!Array.isArray(selectorOrder.flagUn)) selectorOrder.flagUn = ['yesun'];
if (!Array.isArray(selectorOrder.flagContinent)) selectorOrder.flagContinent = [...DEFAULT_SELECTOR.flagContinent];
const previouslySelectedUN = selectorOrder.flagUn;
if (previouslySelectedUN.includes('allun') ||
    (previouslySelectedUN.includes('yesun') && previouslySelectedUN.includes('noun'))) {
    selectorOrder.flagUn = ['yesun', 'noun'];
} else if (previouslySelectedUN.includes('noun')) {
    selectorOrder.flagUn = ['noun'];
} else {
    // Bisheriges 'core196' sowie leere/ungültige Werte -> UN.
    selectorOrder.flagUn = ['yesun'];
}
selectorOrder.flagContinent = selectorOrder.flagContinent.filter(x => x === 'all' || ALL_CONTINENTS.includes(x));
if (selectorOrder.flagContinent.includes('all')) selectorOrder.flagContinent = [...DEFAULT_SELECTOR.flagContinent];

let countryList = [];
let index = 0;
let hintCount = 0;
let baseListLength = 0;
let wrongCountries = [];
let isWrongGuess = false;
let isWaitingForSkip = false;
let isGameRunning = false;
let isBackUp = false;
let isSinglePlayer = true;
let hasStarted = false;
let firstRound = true;
let firstTryCorrect = 0;
let totalResolved = 0;
let totalWrongEntries = 0;
let roundNumber = 1;
let playerTurn = 0;
let playerScores = [0, 0];
let processing = false;
let transitionTimer = null;
// Entspricht der vorhandenen 1,3-s-Animation in style.css.
const FLAG_SLIDE_DURATION = 1300;
let lastFlagSlideStarted = -FLAG_SLIDE_DURATION;

const startPage = document.querySelector('#start');
const modePage = document.querySelector('#mode');
const gamePage = document.querySelector('#game');
const finishPage = document.querySelector('#finishedRound');
const backUpPage = document.querySelector('#backUpRound');
const scoreField = document.querySelector('#score');
const completeCounter = document.querySelector('#game h2');
const inputField = document.querySelector('#input');
const contentField = document.querySelector('#content');
const colorContrast = getComputedStyle(document.documentElement).getPropertyValue('--color-contrast');


// Funktioniert mit ä/ae, ß/ss, Akzenten, Bindestrichen, Apostrophen,
// unterschiedlichen Leerzeichen sowie St./Saint.
function normalizeAnswer(value) {
    if (typeof value !== 'string') return '';
    return value.toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/æ/g, 'ae').replace(/œ/g, 'oe')
        .replace(/ø/g, 'o').replace(/ł/g, 'l').replace(/ı/g, 'i')
        .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\bsaint\b/g, 'st').replace(/\bsankt\b/g, 'st')
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]/g, '');
}
function getCurrentAnswer() {
    const country = countryList[index];
    if (!country) return [];
    // Varianten werden nur noch in Files/countries.js gepflegt.
    // Dadurch lassen sich neue richtige Antworten direkt dort hinzufuegen.
    return selectorOrder.flagType === 'country' ? country.name : country.capital;
}
function answerVariants(value) {
    if (typeof value !== 'string') return new Set();
    const umlautForm = value.toLowerCase()
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue');
    return new Set([normalizeAnswer(value), normalizeAnswer(umlautForm)]);
}
function isCorrectAnswer(value) {
    const guesses = answerVariants(value);
    if (![...guesses].some(Boolean)) return false;
    return getCurrentAnswer().some(answer =>
        [...answerVariants(answer)].some(variant => guesses.has(variant)));
}

function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
function setCountryList(isNewRound = false) {
    clearTimeout(transitionTimer);
    transitionTimer = null;
    if (isNewRound) {
        countryList = shuffle(wrongCountries);
        wrongCountries = [];
        roundNumber++;
        firstRound = false;
    } else {
        const all = selectorOrder.flagContinent.includes('all');
        const includeUN = selectorOrder.flagUn.includes('yesun');
        const includeNonUN = selectorOrder.flagUn.includes('noun');
        countryList = shuffle(countries.filter(c =>
            (all || selectorOrder.flagContinent.includes(c.continent)) &&
            ((includeUN && c.un === true) || (includeNonUN && c.un === false)) &&
            (selectorOrder.flagType !== 'capital' || (c.capital[0] && !['N/A', '-'].includes(c.capital[0])))
        ));
        baseListLength = countryList.length;
        firstRound = true;
        firstTryCorrect = 0;
        totalResolved = 0;
        totalWrongEntries = 0;
        roundNumber = 1;
        playerScores = [0, 0];
        playerTurn = 0;
        wrongCountries = [];
        hasStarted = false;
        isBackUp = false;
    }
    index = 0;
    hintCount = 0;
    isWrongGuess = false;
    isWaitingForSkip = false;
    processing = false;
    updateScore();
}
function selectContinents() {
    document.querySelectorAll('.selector.continent p, .selector.un p').forEach(e => e.classList.remove('selected'));
    selectorOrder.flagUn.forEach(value => document.querySelector(`.selector.un .${value}`)?.classList.add('selected'));
    selectorOrder.flagContinent.forEach(value => document.querySelector(`.selector.continent .${value}`)?.classList.add('selected'));
}
function multipleSelector(elem) {
    const item = elem.classList[0];
    let selected = selectorOrder.flagContinent.filter(x => x !== 'all');
    if (item === 'all') {
        selected = selected.length === ALL_CONTINENTS.length ? [] : [...ALL_CONTINENTS];
    } else if (selected.includes(item)) {
        selected = selected.filter(x => x !== item);
    } else {
        selected.push(item);
    }
    selectorOrder.flagContinent = selected.length === ALL_CONTINENTS.length ? ['all', ...ALL_CONTINENTS] : selected;
}
function selector(elem, type) {
    const value = elem.classList[0];
    if (type === 'continent') multipleSelector(elem);
    if (type === 'un') {
        if (selectorOrder.flagUn.includes(value)) {
            // Immer mindestens eine der beiden Gruppen aktiviert lassen.
            if (selectorOrder.flagUn.length > 1) {
                selectorOrder.flagUn = selectorOrder.flagUn.filter(group => group !== value);
            }
        } else {
            selectorOrder.flagUn.push(value);
        }
    }
    if (type === 'type') selectorOrder.flagType = value;
    saveStored();
    setCountryList(false);
    generateHTML(false);
}
function selectContinentsError() { flagSelectError('.selector.continent'); }
function selectUnError() { flagSelectError('.selector.un'); }
function flagSelectError(query) {
    const element = document.querySelector(query);
    if (!element) return;
    element.style.animation = 'shake .7s';
    setTimeout(() => { element.style.animation = ''; }, 700);
}

function loadSide(type) {
    if (type === 'mode' && gamePage.style.display === 'block' && hasStarted) {
        isBackUp = true;
        // Eine abgeschlossene Antwort auch beim Zurückgehen sauber übernehmen.
        if (processing && transitionTimer !== null) {
            clearTimeout(transitionTimer);
            transitionTimer = null;
            index++;
            processing = false;
        }
    }
    [startPage, modePage, gamePage, finishPage, backUpPage].forEach(elem => elem.style.display = 'none');
    isGameRunning = false;
    switch (type) {
        case 'start': modePage.style.display = 'flex'; break;
        case 'mode': modePage.style.display = 'flex'; break;
        case 'game':
            if (selectorOrder.flagContinent.length === 0 || selectorOrder.flagUn.length === 0 || countryList.length === 0) {
                modePage.style.display = 'flex';
                flagSelectError(selectorOrder.flagContinent.length === 0 ? '.selector.continent' : '.selector.un');
                return;
            }
            if (isBackUp && hasStarted) {
                backUpPage.style.display = 'block';
            } else {
                gamePage.style.display = 'block';
                startGame();
            }
            break;
        case 'finished':
            hasStarted = false;
            isBackUp = false;
            finishPage.style.display = 'flex';
            finishedRound();
            break;
        case 'backUp': backUpPage.style.display = 'block'; break;
    }
}
function toggleMode(number) { isSinglePlayer = number === 0; }
function newGame() {
    setCountryList(false);
    loadSide('game');
}
function resumeGame() {
    isBackUp = false;
    backUpPage.style.display = 'none';
    gamePage.style.display = 'block';
    isGameRunning = true;
    getCountry();
}
function startGame() {
    clearTimeout(transitionTimer);
    isGameRunning = true;
    hasStarted = true;
    isBackUp = false;
    processing = false;
    isWaitingForSkip = false;
    lastFlagSlideStarted = -FLAG_SLIDE_DURATION;
    document.querySelector('.hideButton').style.display = selectorOrder.flagType === 'capital' ? 'block' : 'none';
    contentField.classList.toggle('big', selectorOrder.flagType === 'capital' && selectorOrder.flagStyle === 'show');
    const boxes = contentField.querySelectorAll('div[data-position]');
    // Kein leeres <img>: Sonst zeigt der Browser links einen defekten Bildplatzhalter.
    boxes[0].replaceChildren();
    boxes[1].replaceChildren();
    boxes[0].setAttribute('data-position', 'show');
    boxes[1].setAttribute('data-position', 'hidden');
    getCountry();
}
function hidBox() { return contentField.querySelector('div[data-position="hidden"]'); }
function showBox() { return contentField.querySelector('div[data-position="show"]'); }
function swap() {
    const hidden = hidBox();
    const shown = showBox();
    if (!hidden || !shown) return;
    // Die alte Flagge bleibt im DOM, während sie mit der bestehenden
    // CSS-Animation nach links hinausgleitet. Die neue kommt von rechts.
    // Erst bei der übernächsten Frage wird der unsichtbare Container geleert.
    hidden.setAttribute('data-position', 'show');
    shown.setAttribute('data-position', 'hidden');
    lastFlagSlideStarted = performance.now();
}
function fitCountryHeading(heading) {
    if (!heading) return;
    heading.style.fontSize = '';
    const width = Math.max(180, contentField.clientWidth - 26);
    const text = heading.textContent;
    const isLarge = contentField.classList.contains('big');
    const maxFont = isLarge ? 48 : 21;
    const minFont = 12;
    const canvas = fitCountryHeading.canvas || (fitCountryHeading.canvas = document.createElement('canvas'));
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let size = maxFont;
    while (size > minFont) {
        ctx.font = `${size}px sans-serif`;
        if (ctx.measureText(text).width <= width) break;
        size -= 1;
    }
    heading.style.fontSize = `${size}px`;
}
function updateScore() {
    const total = countryList.length || 0;
    completeCounter.textContent = total ? `${Math.min(index + 1, total)}/${total}` : '0/0';
    if (isSinglePlayer) {
        scoreField.textContent = `${(currentLanguage || language.english).game[0]} ${firstTryCorrect} / ${firstRound ? index + (processing ? 1 : 0) : baseListLength}`;
    } else {
        const label = setting.isGerman ? 'Spieler' : 'Player';
        scoreField.textContent = `${label} 1: ${playerScores[0]}  |  ${label} 2: ${playerScores[1]}`;
    }
}
function getCountry() {
    if (!isGameRunning) return;
    if (index >= countryList.length) {
        if (isSinglePlayer && wrongCountries.length > 0) {
            setCountryList(true);
        } else {
            loadSide('finished');
            return;
        }
    }
    const country = countryList[index];
    if (!country) { loadSide('finished'); return; }
    isWrongGuess = false;
    isWaitingForSkip = false;
    processing = false;
    hintCount = 0;
    inputField.disabled = false;
    inputField.value = '';
    inputField.placeholder = '';
    inputField.title = '';
    inputField.style.color = colorContrast;
    inputField.style.animation = 'none';

    const next = hidBox();
    next.replaceChildren();
    const img = document.createElement('img');
    // Ein fehlendes Bild darf weder ein kaputtes Symbol noch einen
    // Ländernamen als Alternativtext auf der linken Seite anzeigen.
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');
    img.style.visibility = 'hidden';
    img.addEventListener('load', () => {
        img.style.visibility = 'visible';
    });
    const code = country.code.toLowerCase();
    const imageSources = [
        `https://flagcdn.com/h120/${code}.png`,
        `https://flagsapi.com/${code.toUpperCase()}/flat/64.png`
    ];
    let sourceIndex = 0;
    img.addEventListener('error', () => {
        if (!img.isConnected) return;
        sourceIndex++;
        if (sourceIndex < imageSources.length) {
            img.src = imageSources[sourceIndex];
        } else {
            // Bei zwei fehlgeschlagenen Quellen überhaupt kein Bild anzeigen.
            img.remove();
        }
    });
    next.appendChild(img);
    img.src = imageSources[0];
    if (selectorOrder.flagType === 'capital') {
        const h3 = document.createElement('h3');
        h3.textContent = country.name[setting.isGerman ? 0 : 1];
        next.appendChild(h3);
        fitCountryHeading(h3);
    }
    swap();
    updateScore();
    inputField.focus();
}
function markWrong() { isWrongGuess = true; }
function finishQuestion(isCorrect) {
    if (processing || !isGameRunning) return;
    processing = true;
    totalResolved++;
    if (isWrongGuess || !isCorrect) {
        totalWrongEntries++;
        if (isSinglePlayer) wrongCountries.push(countryList[index]);
    } else {
        if (firstRound) firstTryCorrect++;
        if (!isSinglePlayer) playerScores[playerTurn]++;
    }
    if (!isSinglePlayer) playerTurn = 1 - playerTurn;
    inputField.disabled = true;
    inputField.style.color = isCorrect ? '#5ac47a' : 'rgb(170,170,170)';
    updateScore();
    // Schnelle Antworten dürfen den vorherigen Slide nicht mittendrin
    // abbrechen: erst nach der laufenden Animation zur nächsten Flagge.
    const slideRemaining = Math.max(0,
        FLAG_SLIDE_DURATION - (performance.now() - lastFlagSlideStarted));
    const answerDelay = isCorrect ? 420 : 1000;
    transitionTimer = setTimeout(() => {
        transitionTimer = null;
        index++;
        getCountry();
    }, Math.max(answerDelay, slideRemaining));
}
function checkCountry(auto = false) {
    if (!isGameRunning || processing || isWaitingForSkip || inputField.disabled) return;
    if (isCorrectAnswer(inputField.value)) {
        finishQuestion(true);
        return;
    }
    // Auto-Check löst bei noch unvollständigen Eingaben keine Fehler aus.
    if (auto || !inputField.value.trim()) return;
    markWrong();
    inputField.style.color = '#ff675b';
    inputField.style.animation = 'shake 0.5s';
    setTimeout(() => {
        inputField.style.animation = 'none';
        inputField.style.color = colorContrast;
        if (setting.clearInput && !processing) inputField.value = '';
    }, 500);
}
function loadHint() {
    if (!isGameRunning || processing || isWaitingForSkip || inputField.disabled) return;
    markWrong();
    const answers = getCurrentAnswer();
    const preferred = answers[setting.isGerman ? 0 : 1] || answers[0] || '';
    hintCount = Math.min(hintCount + 1, preferred.length);
    inputField.value = '';
    inputField.placeholder = preferred.slice(0, hintCount);
    inputField.title = inputField.placeholder;
    inputField.focus();
}
function skip(isCorrect = false, isSkipped = false) {
    if (!isGameRunning) return;
    if (isWaitingForSkip) {
        isWaitingForSkip = false;
        finishQuestion(false);
        return;
    }
    if (processing) return;
    if (isCorrect) { finishQuestion(true); return; }
    if (!isSkipped) { checkCountry(); return; }
    markWrong();
    const answer = getCurrentAnswer();
    inputField.value = answer[setting.isGerman ? 0 : 1] || answer[0] || '';
    if (setting.confirmSkip) {
        isWaitingForSkip = true;
        inputField.disabled = true;
        inputField.style.color = 'rgb(170,170,170)';
    } else {
        finishQuestion(false);
    }
}
function finishedRound() {
    const finishText = document.querySelector('#finishedRound p');
    const buttons = document.querySelector('#finishedRound .buttons');
    const denominator = baseListLength;
    const percentage = denominator ? Math.round(firstTryCorrect * 100 / denominator) : 0;
    document.querySelector('#finishedRound h2').textContent = currentLanguage.game[1];
    if (isSinglePlayer) {
        finishText.textContent = setting.isGerman
            ? `${firstTryCorrect} / ${denominator} direkt richtig (${percentage} %) · ${totalResolved} gespielt`
            : `${firstTryCorrect} / ${denominator} correct first try (${percentage}%) · ${totalResolved} played`;
    } else {
        const winner = playerScores[0] === playerScores[1]
            ? (setting.isGerman ? 'Unentschieden' : 'Draw')
            : `${setting.isGerman ? 'Spieler' : 'Player'} ${playerScores[0] > playerScores[1] ? 1 : 2} ${setting.isGerman ? 'gewinnt' : 'wins'}`;
        finishText.textContent = `${setting.isGerman ? 'Spieler' : 'Player'} 1: ${playerScores[0]} | ${setting.isGerman ? 'Spieler' : 'Player'} 2: ${playerScores[1]} – ${winner}`;
    }
    buttons.innerHTML = `<p onclick="newGame()">${currentLanguage.game[2]}</p><p onclick="loadSide('mode');setCountryList(false)">Home</p>`;
}
function hideShowFlag() {
    if (selectorOrder.flagType !== 'capital') return;
    contentField.classList.toggle('big');
    selectorOrder.flagStyle = contentField.classList.contains('big') ? 'show' : 'hidden';
    const icon = document.querySelector('.hideButton .fa-flag');
    icon.classList.toggle('fa-solid', contentField.classList.contains('big'));
    icon.classList.toggle('fa-regular', !contentField.classList.contains('big'));
    saveStored();
    fitCountryHeading(showBox().querySelector('h3'));
    inputField.focus();
}
function resetGame() { setCountryList(false); }
function setLocalStorage() { saveStored(); generateHTML(false); }
function updateSettings() {
    const icons = document.querySelectorAll('#game .buttons i');
    if (icons[0]) icons[0].title = setting.hintKey.key;
    if (icons[1]) icons[1].title = setting.checkKey.key;
    if (icons[2]) icons[2].title = setting.skipKey.key;
}
function activateKeybindsEventListener() {
    for (const [klass, settingKey] of [['hint','hintKey'], ['skip','skipKey'], ['guess','checkKey']]) {
        const elem = document.querySelector(`#settings input.${klass}`);
        if (!elem) continue;
        elem.onkeydown = event => {
            event.preventDefault();
            event.stopPropagation();
            if (event.key === 'Tab' || event.key === 'Escape') { elem.blur(); return; }
            setting[settingKey] = { key: event.key, code: event.code, keyCode: event.keyCode };
            elem.value = event.key;
            saveStored();
            updateSettings();
        };
    }
}
function shortcutMatches(event, shortcut) {
    return (shortcut.code && event.code === shortcut.code) ||
        (!shortcut.code && shortcut.keyCode === event.keyCode);
}
document.addEventListener('keydown', event => {
    if (!isGameRunning || event.target.closest('#settings')) return;
    if (shortcutMatches(event, setting.checkKey)) {
        event.preventDefault();
        if (isWaitingForSkip) skip(false, true);
        else checkCountry();
    } else if (shortcutMatches(event, setting.skipKey)) {
        event.preventDefault(); skip(false, true);
    } else if (shortcutMatches(event, setting.hintKey)) {
        event.preventDefault(); loadHint();
    }
});
inputField.addEventListener('input', () => {
    if (setting.isAutoSkip && isGameRunning && !processing && isCorrectAnswer(inputField.value)) {
        checkCountry(true);
    }
});
function toggleSidebar(elem) {
    const sidebar = elem.closest('#settings') || elem;
    const open = sidebar.dataset.state !== 'open';
    sidebar.dataset.state = open ? 'open' : 'close';
    if (open) updateSettingsInput();
    sidebar.onclick = e => {
        if (sidebar.dataset.state === 'close' && e.target.closest('#settings')) toggleSidebar(sidebar);
        else if (e.target.closest('.heading')) toggleSidebar(sidebar);
    };
}
for (const [className, settingName] of [
    ['language', 'isGerman'], ['inputClear','clearInput'],
    ['skipConfirm','confirmSkip'], ['autoSkip','isAutoSkip']
]) {
    document.querySelector(`.toggle.${className}`).addEventListener('click', e => {
        e.stopPropagation();
        setting[settingName] = !setting[settingName];
        saveStored();
        generateHTML(false);
    });
}
window.addEventListener('resize', () => fitCountryHeading(showBox().querySelector('h3')));
// Initialisierung erst nach dem Laden von Sprache, Daten und Einstellungen.
setCountryList(false);
generateHTML(false);
loadSide('mode');
