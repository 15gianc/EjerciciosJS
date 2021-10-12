

const agregar = () =>{

    let element = document.createElement("div")
    let texto = document.createTextNode("Tocame para cambiar de color")
    element.appendChild(texto)
    document.getElementById("ej6").appendChild(element)
    element.setAttribute("id","colores")
    



}


btn3.onclick = function(){
    agregar();
}

