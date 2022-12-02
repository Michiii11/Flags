let newCountryList = countries.sort(() => {return Math.random() - 0.5});
let index = 0;
let wrongI = 0;
let wrongCountrys = new Array();
let hintCount = 0;

getCountry();

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

    document.querySelector('#input').placeholder = newCountryList[index].name[0].substring(0,hintCount)

    let flag = document.querySelector("#input");
    flag.focus();
}

function skip(ind, type){
    if(!ind){
        if(type){
            wrongCountrys[wrongI++] = newCountryList[index];
            document.querySelector('#input').disabled = true;
            skipped();

            setTimeout(function(){
                index++
                document.querySelector('#input').disabled = false;
                getCountry();
            },2000);
            return;
        }

        document.querySelector('#input').style.color = "red";
        document.querySelector('#input').style.animation = "shake 0.5s"

        setTimeout(function(){
            document.querySelector('#input').style.color = "rgb(110, 110, 110)";
            document.querySelector('#input').style.animation = "none"
        },500);
        return;
    } 
    index++;
    getCountry();
}

function skipped(){
    document.querySelector('#input').placeholder = newCountryList[index].name[0];
}

function getCountry() {
    hintCount = 0;
    document.querySelector('#content').innerHTML = 
    `<h2>${index+1}/${newCountryList.length}</h2>
    <img src="https://flagcdn.com/h120/${newCountryList[index].code.toLowerCase()}.png">
    <input id="input" type="text" autocomplete="off" autofocus>`;

    console.log(newCountryList[index].name)
    
    document.querySelector('#buttons').innerHTML = `<p onclick="loadHint()">Tipp</p><p onclick="skip()">Weiter</p>`
    document.querySelector('#hint').innerHTML = `Richtig ${index - wrongI} / ${index}`;
    let flag = document.querySelector("#input");
    flag.focus();

    flag.addEventListener("keydown", (event) => {
        if (event.keyCode == 191) {
            event.preventDefault();
            skip(false, true);
        }
        if (event.keyCode == 187){
            event.preventDefault();
            loadHint();
        }
        if (event.keyCode == 13){
            checkCountry(index);
        }
    });
}