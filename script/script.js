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

divArrey = document.getElementsByClassName("img");
console.log(divArrey);
divArrey[0].classList.add("active");
