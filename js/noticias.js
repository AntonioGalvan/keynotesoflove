var noticas =document.getElementsByClassName("noticia");
for (let i=0; i<noticas.length; i++){

    noticas[i].addEventListener("click", ()=>{
        let numero = i + 1;
        document.getElementById("modal-noticia"+(numero)).style.display = "flex";
    });
}

var closeButtons = document.getElementsByClassName("modal__close");
for (let i=0; i<closeButtons.length; i++){

    closeButtons[i].addEventListener("click", ()=>{
        let numero = i + 1;
        document.getElementById("modal-noticia"+(numero)).style.display = "none";
    });
}