let newCountryList = countries.sort(() => {return Math.random() - 0.5});
let index = 0;
let wrongI = 0;
let wrongCountrys = new Array();
let hintCount = 0;

document.querySelector('#content').innerHTML = 
`<h2>${index+1}/${newCountryList.length}</h2>
<section>
<img data-position='show' src="">
<img data-position='hidden' src="https://flagcdn.com/h120/${newCountryList[index].code.toLowerCase()}.png">
</section>  

<input id="input" type="text" autocomplete="off" autofocus>`;

let flag = document.querySelector("#input");
flag.addEventListener("keyup", (event) => {
    if (event.keyCode == 191) { // # --> Skip
        event.preventDefault();
        skip(false, true);
    }
    if (event.keyCode == 187){ // * --> Hint
        event.preventDefault();
        loadHint();
    }
    if (event.keyCode == 13){
        checkCountry(index);
    }
});

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

    document.querySelector('#input').value = ""
    document.querySelector('#input').placeholder = newCountryList[index].name[0].substring(0,hintCount)

    let flag = document.querySelector("#input");
    flag.focus();
}

function skip(ind, type){
    if(!ind){ // Falsche Eingabe
        if(type){ // Geskippte Eingabe
            wrongCountrys[wrongI++] = newCountryList[index];
            document.querySelector('#input').value = newCountryList[index].name;
            document.querySelector('#input').disabled = true;
            skipped();

            setTimeout(function(){
                index++;
                document.querySelector('#input').disabled = false;
                getCountry();
            },1000);
            return;
        }

        // Fail Animation
        document.querySelector('#input').style.color = "red";
        document.querySelector('#input').style.animation = "shake 0.5s"
        setTimeout(function(){
            document.querySelector('#input').style.color = "rgb(110, 110, 110)";
            document.querySelector('#input').style.animation = "none"
        },500);
        return;

    } else{ // Richtige Eingabe

        // Accept Animation
        document.querySelector('#input').style.color = "green";
        setTimeout(function(){
            document.querySelector('#input').style.color = "rgb(110, 110, 110)";
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
    document.querySelector('#content img[data-position="hidden"]').setAttribute("src", `https://flagcdn.com/h120/${newCountryList[index].code.toLowerCase()}.png`);
    document.querySelector('#input').value = "";
    document.querySelector('#input').placeholder = "";
    console.log(newCountryList[index].name)
    swap();

    hintCount = 0;
    
    document.querySelector('#buttons').innerHTML = `<p onclick="loadHint()">Tipp (+)</p><p onclick="skip()">Weiter (#)</p>`
    document.querySelector('#hint').innerHTML = `Richtig ${index - wrongI} / ${index}`;
    let flag = document.querySelector("#input");
    flag.focus();

}