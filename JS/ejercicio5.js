const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");


img2.style.visibility = "hidden";
img1.style.visibility = "visible";


const show = () =>{
    if ( img2.style.visibility = "hidden" ) {
        img2.style.visibility = "visible"
        
    } else {
        img2.style.visibility = "hidden"
    }
}

const show2 = () =>{
    if ( img1.style.visibility = "visible" ) {
        img2.style.visibility = "hidden"
        
    } else {
        img2.style.visibility = "visible"
    }
}




 img1.onmouseover = function(){
     show();
 }

 img2.onmouseout = function(){
     show2();
 }