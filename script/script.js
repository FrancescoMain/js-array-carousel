// inseriamo tutte le immagini dinamicamente servendoci dell’array

const imgArray = [];

imgArray[0] = new Image();
imgArray[0].src = 'img/01.webp';

imgArray[1] = new Image();
imgArray[1].src = 'img/02.webp';

imgArray[2] = new Image();
imgArray[2].src = 'img/03.webp';

imgArray[3] = new Image();
imgArray[3].src = 'img/04.webp';

imgArray[4] = new Image();
imgArray[4].src = 'img/05.webp';

for (let index = 0; index < imgArray.length; index++) {
    let cont = document.getElementById("ms_maincont");
    let div = document.createElement("div");
    div.classList.add("img");
    div.append (imgArray[index]);
    cont.append (div);
}

const divArrey = document.getElementsByClassName("img");

let activeIteam = 0;

let btnBot = document.getElementById("bot");
btnBot.classList.add("hidden")
divArrey[0].classList.add("active");
let btnTop = document.getElementById("top");
btnTop.addEventListener ("click",
function () {   
    if (activeIteam < divArrey.length - 1) {
        divArrey[activeIteam].classList.remove("active");

        activeIteam ++;

        divArrey[activeIteam].classList.add("active")
        
    };

    if (activeIteam === divArrey.length - 1) {
        btnTop.classList.add("hidden");
    }

    if (activeIteam > 0) {
        btnBot.classList.remove("hidden");
        
    }
    
});


btnBot.addEventListener ("click",
function () {   
    if (activeIteam > 0) {
        divArrey[activeIteam].classList.remove("active");

        activeIteam --;

        divArrey[activeIteam].classList.add("active")
        
    };

    if (activeIteam === 0) {
        btnBot.classList.add("hidden");
    }

    if (activeIteam < 4) {
        btnTop.classList.remove("hidden");
        
    }
    
});

