let comentario = prompt ("Ingrese un comentario");

if (comentario == comentario.toLowerCase()) {
    alert("Tu comentario contiene solo letras en minusculas")
}

if (comentario == comentario.toUpperCase()) {
    alert("Tu comentario contiene solo letras en mayusculas")
}

if (comentario == comentario.toLowerCase() && comentario == comentario.toUpperCase()) {
    alert("Tu comentario tiene letras mayusculas y minusculas")
    
}