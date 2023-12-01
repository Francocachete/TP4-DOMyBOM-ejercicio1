document.getElementById("boton").addEventListener("click", iniciar);

function iniciar(){
    let vidas = 5;
    let num = Math.floor(Math.random()*50)+ 1;
    while(vidas > 0){
        let numElegido = prompt("Te quedan " + vidas + "vidas. Escribe el número: ");

        if(numElegido === num){
            alert("Lo lograste, ganaste");
            break;
        }
        if(numElegido > num){
            alert("el número elegido por mi es menor");
        }
        if(numElegido < num){
            alert("el número elegido por mi es mayor");
        }
        vidas--;
    }
    if(vidas === 0){
        alert("Lo siento mucho, quedaste eliminado")
    }
}