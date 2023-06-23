//menu

function llamar(){
    let menuhamburguesa=document.getElementById("listaid");
        menuhamburguesa.classList.toggle("lista-open")
    let listabar=document.getElementById("lista-bar");
    listabar.querySelector("lista-bar .listabar").classList.toggle;
}

//sombreado

window.addEventListener("scroll",Scroll);
function Scroll(){
    let header=document.getElementById("listaid");
    let posy=window.pageYOffset;
    if (posy>100){
        header.style.background="rgba(0, 0, 0, 0.80)";
        header.style.transition="0.5s"
    }
    else{
        header.style.background="rgba(0, 0, 0, 0.20)";
        header.style.transition="0.5s"
    }
}

window.addEventListener("scroll",Scroll);
function Scroll(){
    let header=document.getElementById("conta-menu");
    let posy=window.pageYOffset;
    if (posy>100){
        header.style.background="rgba(0, 0, 0, 0.80)";
        header.style.transition="0.5s"
    }
    else{
        header.style.background="none";
        header.style.transition="0.5s"
    }
}