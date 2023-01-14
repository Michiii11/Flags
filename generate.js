/**
 * Generates the html with the right language
 */
function setLanguage(){
    if(setting.isGerman){
        currentLanguage = language.german
    } else{
        currentLanguage = language.english
    }

    let backButton = document.createElement("div")
    backButton.classList.add("back")
    backButton.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`

    // Start Page
    let divButton = document.createElement("div")
    divButton.classList.add("buttons")
    for (let i = 0; i < currentLanguage.start.length; i++) {
        let div = document.createElement("div")
        div.setAttribute("onclick", "loadSide('M')")
        div.innerHTML = `<p>${currentLanguage.start[i]}</p>`
        divButton.appendChild(div);
    }
    document.querySelector('#start').innerHTML = ""
    document.querySelector('#start').appendChild(divButton)

    // Mode Page
    let selectorType = document.createElement("div")
    selectorType.classList.add("selector", "type")
    selectorType.innerHTML = 
    `<p class="country selected" onclick="selector(this, 'T')">${currentLanguage.mode.selectorType[0]}</p>
    <p class="capital" onclick="selector(this, 'T')">${currentLanguage.mode.selectorType[1]}</p>`

    let selectorContinent = document.createElement("div")
    selectorContinent.classList.add("selector", "continent")
    for (let i = 0; i < currentLanguage.mode.selectorContinent.length; i++) {
            selectorContinent.innerHTML += 
            `<p class="${i != 0 ? language.german.mode.selectorContinent[i] : "all"}" onclick="selector(this, 'C')">${currentLanguage.mode.selectorContinent[i]}</p>`
    }

    let modeButton = document.createElement("div")
    modeButton.classList.add("buttons")
    modeButton.innerHTML = `<p onclick="loadSide('G');">${currentLanguage.mode.modeButton}</p>`

    backButton.setAttribute("onclick", "loadSide('S')")

    document.querySelector('#mode').innerHTML = ""
    document.querySelector('#mode').append(selectorType, selectorContinent, modeButton, backButton)

    document.querySelector('.selected').classList.remove('selected')
    document.querySelector(`.${selectorOrder.flagType}`).classList.add('selected')
    document.querySelector(`.${selectorOrder.flagContinent}`).classList.add('selected')

    // Game Page
    document.querySelector('#finishedRound h2').innerHTML = currentLanguage.game[1]

    // Settings
    document.querySelector('#settings').innerHTML = `<p class="heading">${currentLanguage.settings.headlines[0]}</p>`

    let hiddenBox = document.createElement("div")
    hiddenBox.classList.add("hidden")
    
    let section1 = document.createElement("section")
    section1.innerHTML = `<h3>${currentLanguage.settings.headlines[1]}</h3>`
    for (let i = 0; i < currentLanguage.settings.keybinds.length; i++) {
        section1.innerHTML += `<div><p>${currentLanguage.settings.keybinds[i]}</p><input class="${language.english.settings.keybinds[i].toLowerCase()}" type="text" autocomplete="off" onclick="this.select()"></div>`
    }

    let section2 = document.createElement("section")
    section2.innerHTML = `<h3>${currentLanguage.settings.headlines[2]}</h3>
    <div class="settingDesign">
        <p>${currentLanguage.settings.display[0]}</p>
        <div>
            <i onclick="swapDarkMode()" class="fa-solid fa-arrow-left"></i>
            <p>${setting.isDarkMode ? "Dark Mode" : "Light Mode"}</p>
            <i onclick="swapDarkMode()" class="fa-solid fa-arrow-right"></i>
        </div>
    </div>
    <div class="settingLanguage">
        <p>${currentLanguage.settings.display[1]}</p>
        <div>
            <i onclick="swapLanguage()" class="fa-solid fa-arrow-left"></i>
            <p>${setting.isGerman ? "Deutsch" : "Englisch"}</p>
            <i onclick="swapLanguage()" class="fa-solid fa-arrow-right"></i>
        </div>
    </div>
    `
    
    hiddenBox.append(section1, section2)
    document.querySelector('#settings').appendChild(hiddenBox)
}