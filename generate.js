let currentLanguage

/**
 * Generates the html with the right language
 */
function generateHTML(newCountryList) {
    // Get currentLanguage
    if (setting.isGerman) {
        currentLanguage = language.german
    } else {
        currentLanguage = language.english
    }

    // Back Button
    let backButton = document.createElement("div")
    backButton.classList.add("back")
    backButton.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`

    //----------- Start Page -----------//
    let divButton = document.createElement("div")
    divButton.classList.add("buttons")
    for (let i = 0; i < currentLanguage.start.length; i++) {
        let div = document.createElement("div")
        div.setAttribute("onclick", `loadSide("mode");toggleMode(${i})`)
        div.innerHTML = `<p>${currentLanguage.start[i]}</p>`
        divButton.appendChild(div);
    }

    document.querySelector('#start').innerHTML = ""
    document.querySelector('#start').appendChild(divButton)


    //----------- Mode Page -----------//
    let selectorType = document.createElement("div")
    selectorType.classList.add("selector", "type")
    selectorType.innerHTML =
        `<p class="country " onclick="selector(this, 'type')">${currentLanguage.mode.selectorType[0]}</p>
    <p class="capital" onclick="selector(this, 'type')">${currentLanguage.mode.selectorType[1]}</p>`

    let selectorContinent = document.createElement("div")
    selectorContinent.classList.add("selector", "continent")
    for (let i = 0; i < currentLanguage.mode.selectorContinent.length; i++) {
        selectorContinent.innerHTML +=
            `<p class="${i != 0 ? language.german.mode.selectorContinent[i] : "all"}" onclick="selector(this, 'continent')">${currentLanguage.mode.selectorContinent[i]}</p>`
    }

    let modeButton = document.createElement("div")
    modeButton.classList.add("buttons")

    modeButton.innerHTML = `<p onclick="loadSide('game');">${currentLanguage.mode.modeButton}</p>`

    backButton.setAttribute("onclick", "loadSide('start')")

    document.querySelector('#mode').innerHTML = ""
    document.querySelector('#mode').append(selectorType, selectorContinent, modeButton, backButton)

    document.querySelector(`.${selectorOrder.flagType}`).classList.add('selected')
    selectContinents()

    if(newCountryList){
        setCountryList();
    }

    //----------- Game Page -----------//
    document.querySelector('#finishedRound h2').innerHTML = currentLanguage.game[1]

    let backUpPage = document.querySelector('#backUpRound')
    backUpPage.innerHTML = `<h2>${currentLanguage.backUp[0]}</h2><p>${currentLanguage.backUp[1]}</p>
                            <div class="buttons"><p onclick="setCountryList();loadSide('game')">${currentLanguage.backUp[2]}</p>
                            <p onclick="loadSide('game')">${currentLanguage.backUp[3]}</p></div>`

    //----------- Settings -----------//
    document.querySelector('#settings .heading p').innerHTML = currentLanguage.settings.headlines[0]

    let hiddenBox = document.createElement("div")
    hiddenBox.classList.add("hidden")

    let section1 = document.querySelectorAll('.hidden section')[0]
    section1.innerHTML = `<h3>${currentLanguage.settings.headlines[1]}</h3>`
    for (let i = 0; i < currentLanguage.settings.keybinds.length; i++) {
        section1.innerHTML += `<div><p>${currentLanguage.settings.keybinds[i]}</p><input class="${language.english.settings.keybinds[i].toLowerCase()}" value="" type="text" autocomplete="off" onclick="this.select()"></div>`
    }

    document.querySelectorAll('.hidden section')[1].querySelectorAll('h3')[0].innerHTML = currentLanguage.settings.headlines[2]

    document.querySelector('.clearInput').dataset.text = currentLanguage.settings.popup[0]
    document.querySelector('.confirmSkip').dataset.text = currentLanguage.settings.popup[1]

    //----------- Function calls and updates -----------//
    activateKeybindsEventListener();
    updateSettingsInput();

    console.log(setting)
    if (!setting.isDarkMode) {
        swapDarkMode(true)
        document.querySelector('.design').classList.add("on")
    }
    if (!setting.isGerman) {
        document.querySelector('.language').classList.add("on")
    }
    if (setting.clearInput) {
        document.querySelector('.inputClear').classList.add("on")
    }
    if (setting.confirmSkip) {
        document.querySelector('.skipConfirm').classList.add("on")
    }
}

function updateSettingsInput() {
    document.querySelector('.hint').value = setting.hintKey.key
    document.querySelector('.skip').value = setting.skipKey.key
    document.querySelector('.guess').value = setting.checkKey.key
}