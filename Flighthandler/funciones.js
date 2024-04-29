const botonMenu = document.getElementById("inicioMov");
const restoMenu = document.getElementById("barraNav");

function cambiaMenu(){
    if (botonMenu.style.display == "none"){
        botonMenu.style.display = "flex";
        restoMenu.style.display = "none";
    } else {
        botonMenu.style.display = "none";
        restoMenu.style.display = "flex";
    }
}