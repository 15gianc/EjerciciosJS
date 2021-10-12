const ingreso = () =>{
    let sexo = prompt("Femenino(F)   Masculino(M)").toUpperCase();
    let edad = prompt("Ingrese su edad");

      

    if (sexo == "F" && edad >= 25) {
        alert("Bienvenida, el precio de la entrada es de 25.000")
    } else if (sexo == "F" && edad < 25 && edad > 18){
        alert("Bienvenida, el precio de la entrada es de 20.000")

    }else{
        alert("Debe ser mayor de 18 años para ingresar")

    }

    if (sexo == "M" && edad >= 24) {
        alert("Bienvenido, el precio de la entrada es de 30.000")
    } else if (sexo == "M" && edad < 24){
        alert("Bienvenido, el precio de la entrada es de 25.000")

    } else{
        alert("Debe ser mayor de 18 años para ingresar")

    }


    


}


btn5.onclick = function (){
    ingreso();
}