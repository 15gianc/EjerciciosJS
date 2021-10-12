const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const tx1 = document.getElementById("tx1");
const tx2 = document.getElementById("tx2");



image1.style.visibility = "visible";
image2.style.visibility = "visible";


const mostrar = () =>{
    if ( image1.style.visibility = "visible" ) {
        image1.style.visibility = "hidden"
        
    } else {
        image1.style.visibility = "visible"
    }


}

image1.onmouseover = function() {
    mostrar();
}


const mostrar1 = () =>{
    if ( image2.style.visibility = "visible" ) {
        image2.style.visibility = "hidden"
        
    } else {
        image2.style.visibility = "visible"
    }


}


image2.onmouseover = function() {
    mostrar1();
}


const texto = () =>{
    image1.style.visibility = "visible"
}

tx1.onclick = function() {
    texto();
}


const texto1 = () =>{
    image2.style.visibility = "visible"
}

tx2.onclick = function() {
    texto1();
}
