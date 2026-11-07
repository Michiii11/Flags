// Baut die vorhandene Oberfläche in der gewählten Sprache auf.
let currentLanguage;

function generateHTML(newCountryList = false) {
    currentLanguage = setting.isGerman ? language.german : language.english;

    // Das Startmenue Einzelspieler/Mehrspieler wird nicht mehr gezeigt.
    // Direkt zur vorhandenen Auswahl der Spieloptionen wechseln.
    document.querySelector('#start').replaceChildren();

    const type = document.createElement('div');
    type.className = 'selector type';
    type.innerHTML = `<p class="country" onclick="selector(this,'type')">${currentLanguage.mode.selectorType[0]}</p>
                      <p class="capital" onclick="selector(this,'type')">${currentLanguage.mode.selectorType[1]}</p>`;

    const un = document.createElement('div');
    un.className = 'selector un';
    const groups = ['yesun', 'noun'];
    groups.forEach((group, i) => {
        const p = document.createElement('p');
        p.className = group;
        p.textContent = currentLanguage.mode.selectorUN[i];
        p.onclick = () => selector(p, 'un');
        un.appendChild(p);
    });

    const continent = document.createElement('div');
    continent.className = 'selector continent';
    currentLanguage.mode.selectorContinent.forEach((label, i) => {
        const p = document.createElement('p');
        p.className = i === 0 ? 'all' : language.german.mode.selectorContinent[i];
        p.textContent = label;
        p.onclick = () => selector(p, 'continent');
        continent.appendChild(p);
    });

    const play = document.createElement('div');
    play.className = 'buttons';
    play.innerHTML = `<p onclick="loadSide('game')">${currentLanguage.mode.modeButton}</p>`;
    document.querySelector('#mode').replaceChildren(type, un, continent, play);

    document.querySelector(`.selector.type .${selectorOrder.flagType}`)?.classList.add('selected');
    selectContinents();

    if (newCountryList) setCountryList(false);
    updateScore();
    const visibleHeading = showBox().querySelector('h3');
    if (visibleHeading && countryList[index]) {
        visibleHeading.textContent = countryList[index].name[setting.isGerman ? 0 : 1];
        fitCountryHeading(visibleHeading);
    }

    document.querySelector('#finishedRound h2').textContent = currentLanguage.game[1];
    const backup = document.querySelector('#backUpRound');
    backup.innerHTML = `<h2>${currentLanguage.backUp[0]}</h2><p>${currentLanguage.backUp[1]}</p>
        <div class="buttons"><p onclick="newGame()">${currentLanguage.backUp[2]}</p>
        <p onclick="resumeGame()">${currentLanguage.backUp[3]}</p></div>`;

    document.querySelector('#settings .heading p').textContent = currentLanguage.settings.headlines[0];
    const keySection = document.querySelector('#settings .hidden section:first-child');
    keySection.innerHTML = `<h3>${currentLanguage.settings.headlines[1]}</h3>`;
    ['hint', 'skip', 'guess'].forEach((kind, i) => {
        const wrapper = document.createElement('div');
        const title = document.createElement('p');
        title.textContent = currentLanguage.settings.keybinds[i];
        const input = document.createElement('input');
        input.className = kind;
        input.type = 'text';
        input.autocomplete = 'off';
        input.readOnly = true;
        input.setAttribute('aria-label', currentLanguage.settings.keybinds[i]);
        input.onclick = () => input.select();
        wrapper.append(title, input);
        keySection.appendChild(wrapper);
    });
    document.querySelectorAll('#settings .hidden section')[1].querySelector('h3').textContent = currentLanguage.settings.headlines[2];

    document.querySelector('.clearInput').dataset.text = currentLanguage.settings.popup[0];
    document.querySelector('.confirmSkip').dataset.text = currentLanguage.settings.popup[1];
    document.querySelector('.confirmAutoSkip').dataset.text = currentLanguage.settings.popup[2];
    document.querySelector('.language').classList.toggle('on', !setting.isGerman);
    document.querySelector('.inputClear').classList.toggle('on', setting.clearInput);
    document.querySelector('.skipConfirm').classList.toggle('on', setting.confirmSkip);
    document.querySelector('.autoSkip').classList.toggle('on', setting.isAutoSkip);
    updateSettingsInput();
    activateKeybindsEventListener();
    updateSettings();
}

function updateSettingsInput() {
    const values = { hint: setting.hintKey.key, skip: setting.skipKey.key, guess: setting.checkKey.key };
    Object.entries(values).forEach(([klass, value]) => {
        const input = document.querySelector(`#settings input.${klass}`);
        if (input) input.value = value;
    });
}
