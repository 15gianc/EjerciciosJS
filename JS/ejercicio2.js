const traducir = () =>{

let palabra = prompt("Ingresa una de las palabras de la lista").toLowerCase();

 switch (palabra) {
     case "casa":
         traduccion.innerHTML = "House";
     break;

     case "mesa":
        traduccion.innerHTML = "Table";
    break;
     
    case "perro":
        traduccion.innerHTML = "Dog";
    break;

    case "gato":
        traduccion.innerHTML = "Cat";
    break;
 
     default:
         alert("Esa palabra no esta en la lista")
         break;
 }

}

    btn2.onclick = function(){
        traducir();
    }
