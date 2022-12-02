
let newCountryList = countries.sort(() => {return Math.random() - 0.5});
let index = 0;
let wrongI = 0;
let wrongCountrys = new Array();
let hintCount = 0;

loadGame();
getCountry();

/**
 * 
 */
function loadMenu(){

}

/**
 * Loads the Game Template into the HTML
 */
function loadGame(){
    document.querySelector('main').innerHTML = 
        `<div id="content"><h2>${index+1}/${newCountryList.length}</h2>
        <section>
            <img data-position='show' src="">
            <img data-position='hidden' src="https://flagcdn.com/h120/${newCountryList[index].code.toLowerCase()}.png">
        </section>  

        <input id="input" type="text" autocomplete="off" autofocus></div>
        <div id="buttons"><i class="fa-solid fa-lightbulb"></i><i class="fa-solid fa-check"></i><i class="fa-solid fa-forward"></i></div>
        <div id="score"></div>`;

    let flag = document.querySelector("#input");
    flag.addEventListener("keydown", (event) => {
        if (event.keyCode == 191) { // # --> Skip
            event.preventDefault();
            skip(false, true);
        }
        if (event.keyCode == 187){ // * --> Hint
            event.preventDefault();
            loadHint();
        }
        if (event.keyCode == 13){ // Enter --> Check
            checkCountry(index);
        }
    });
}

function checkCountry(i){
    let guess = document.querySelector('#input').value.toLowerCase();
    let answer = newCountryList[index].name;

    for (let i = 0; i < answer.length; i++) {
        if(guess.replace(" ", "") == answer[i].toLowerCase().replace(" ", "")){
            skip(true);
            return;
        }
    }
    skip(false);
}

function loadHint(){
    hintCount++;
    wrongCountrys[wrongI++] = newCountryList[index];
    document.querySelector('#input').value = ""
    document.querySelector('#input').placeholder = newCountryList[index].name[0].substring(0,hintCount)

    let flag = document.querySelector("#input");
    flag.focus();
}

function skip(ind, type){
    if(!ind){ // Falsche Eingabe
        if(type){ // Geskippte Eingabe
            wrongCountrys[wrongI++] = newCountryList[index];
            document.querySelector('#input').style.color = "rgb(110, 110, 110)";
            document.querySelector('#input').value = newCountryList[index].name;
            document.querySelector('#input').disabled = true;
            skipped();


            setTimeout(function(){
                index++;
                document.querySelector('#input').disabled = false;
                document.querySelector('#input').style.color = "white";
                getCountry();
            },1000);
            return;
        }

        // Fail Animation
        document.querySelector('#input').style.color = "red";
        document.querySelector('#input').style.animation = "shake 0.5s"
        document.querySelectorAll('img')[0].style.color = "red"
        document.querySelectorAll('img')[0].style.animation = "shake 0.5s 0.2s"

        setTimeout(function(){
            document.querySelector('#input').style.color = "white";
            document.querySelector('#input').style.animation = "none"
            document.querySelectorAll('img')[0].style.color = "none"
            document.querySelectorAll('img')[0].style.animation = "none"
        },500);
        return;

    } else{ // Richtige Eingabe

        // Accept Animation
        document.querySelector('#input').style.color = "green";
        document.querySelector('.fa-check').style.color = "green";
        setTimeout(function(){
            document.querySelector('#input').style.color = "white";
            document.querySelector('.fa-check').style.color = "white";
            index++;
            getCountry();
        },500);
    }
}

function swap(){
    let hid = document.querySelector('#content img[data-position="hidden"]')
    let show = document.querySelector('#content img[data-position="show"]')
    hid.setAttribute("data-position", "show");
    show.setAttribute("data-position", "hidden");
}

function skipped(){
    document.querySelector('#input').placeholder = newCountryList[index].name[0];
}

function getCountry() {
    document.querySelectorAll('#content h2')[0].innerHTML = `${index+1}/${newCountryList.length}`
    document.querySelector('#content img[data-position="hidden"]').setAttribute("src", `https://flagcdn.com/h120/${newCountryList[index].code.toLowerCase()}.png`);
    document.querySelector('#input').value = "";
    document.querySelector('#input').placeholder = "";
    console.log(newCountryList[index].name)
    swap();

    hintCount = 0;
    
    document.querySelector('#score').innerHTML = `Richtig ${index - wrongI} / ${index}`;
    let flag = document.querySelector("#input");
    flag.focus();

}