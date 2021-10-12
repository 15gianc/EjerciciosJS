let lunes = document.getElementById("lunes");
let martes = document.getElementById("martes");
let miercoles = document.getElementById("miercoles");
let jueves = document.getElementById("jueves");
let viernes = document.getElementById("viernes");
let sabado = document.getElementById("sabado");
let domingo = document.getElementById("domingo");


const diaSemana = () =>{
let dia = prompt("Ingrese un dia de la semana").toLowerCase();
    switch (dia) {
        case "lunes":
            lunes.innerHTML = "Trabajo 8:00AM"
            break;
        case "martes":
            martes.innerHTML = "Reunion a las 10:00AM"
            break;
        case "miercoles":
            miercoles.innerHTML = "Llevar a mi hermana al colegio"
            break;
        case "jueves":
             jueves.innerHTML = "Cena con la empresa"
                break;
        case "viernes":
            viernes.innerHTML = "Entrega de proyecto"
            break;
        case "sabado":
            sabado.innerHTML = "Día de Familia"
            break;
        case "domingo":
            domingo.innerHTML = "Descanso"
            break;
    
        default:
            alert("Ingrese un dia de la semana");
            break;
    }


}


btn4.onclick = function () {
    diaSemana();
}