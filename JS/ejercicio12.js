const saldo = 8000;
const agua = 2000;
const queso = 12000;
const leche = 3000;
const azucar = 2500;



btn6.onclick = function(){
    alert("Su saldo es: " + saldo)
    
}

const compra = () =>{
        
       let compras = prompt("Elije tu compra: 1-Agua 2-Queso 3-Leche 4-Azucar")

       switch (compras) {
           case "1":
               if (agua <= saldo) {
                   alert("Gracias por tu compra")
               } else{
                   alert("Saldo insuficiente")
               }
               break;
            case "2":
                if (queso <= saldo) {
                    alert("Gracias por tu compra")
                }else{
                    alert("Saldo insuficiente")
                }
                break;
            case "3":
                    if (leche <= saldo) {
                        alert("Gracias por tu compra")
                    }else{
                        alert("Saldo insuficiente")
                    }
                    break;
            case "4":
                        if (azucar<= saldo) {
                            alert("Gracias por tu compra")
                        }else{
                            alert("Saldo insuficiente")
                        }
                        break;
       
           default:
               break;
       }

    


}

btn7.onclick = function(){
    compra();
}

