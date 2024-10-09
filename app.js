const clickBoton = document.querySelectorAll(".boton p")
let pantallaOperando = document.getElementById("pantallaOperando")
let pantallaResultado = document.getElementById("pantallaResultado")
let primerNumero = ""
let segundoNumero = ""
let operadorSeleccionado  = ""
let resultado = 0

// clickBoton.forEach(botones=>{
//     botones.addEventListener("click",()=>{
//         const valorBoton = botones.innerHTML;

//         // Empezamos con la logica. Primero si es un numero...
//         if(!isNaN(valorBoton)|| valorBoton==="."){
//             //Aca como tenemos numeros diferenciamos con un if si es el primero o el segundo numero. 
//             if( operadorSeleccionado ===""){
//                 /*Ex´plicacion de este if: Por logica el orden de las operaciones es primer numero, operador, segundo numero y resultado. Si operador seleccionado es vacio, entonces estamos en precencia del primer numero */
//                 primerNumero += valorBoton  //almacenamos primer numero 
//                 pantallaOperando.innerText = primerNumero //mostramos el primer numero 
                
//             } else {
//                 segundoNumero = valorBoton // almacenamos segundo numero 
//                 pantallaOperando.innerText = primerNumero + " " + operadorSeleccionado + " " + segundoNumero
                
//             }
//         } else if (['+', '-', '*', '/', '%'].includes(valorBoton)){
//             operadorSeleccionado = valorBoton //gauardamos el operador seleccionado

//             pantallaOperando = primerNumero + " " + operadorSeleccionado // aca mostramos el primer numero mas el operador seleccionado
//         } else if (valorBoton==="="){
//             // Esto es para calcular el numero en cuestion. 
//             /*convertimos en numeros a las variables almacenadas y usamos un swich para manejar los casos.  */

//             const num1 = parseFloat(primerNumero)
//             const num2 = parseFloat(segundoNumero)
//                 switch(operadorSeleccionado){
//                     case '+':
//                         resultado = num1 + num2
//                         break;
//                     case '-':
//                         resultado = num1 - num2
//                         break;
//                     case '*':
//                         resultado = num1 * num2
//                         break;
//                     case '/':
//                         resultado = num1/num2
//                         break;
//                     case '%':
//                         resultado = num1%num2
//                         break;
//                 }
//                 pantallaResultado.innerText = resultado //mostramos el resutado en la pantalla

//                 /* ahora toca reiniciar las variables.*/
//                 primerNumero = ""
//                 segundoNumero = ""
//                 operadorSeleccionado = ""
//         }
//     })})

clickBoton.forEach(boton => {
    boton.addEventListener("click", () => {
        const valorBoton = boton.innerHTML;

        if (!isNaN(valorBoton) || valorBoton === ".") {
            // Si no hay operador, es el primer número
            if (operadorSeleccionado === "") {
                primerNumero += valorBoton;
                pantallaOperando.innerText = primerNumero;
            } else {
                segundoNumero += valorBoton;
                pantallaOperando.innerText = primerNumero + " " + operadorSeleccionado + " " + segundoNumero;
            }
        } else if (['+', '-', '*', '/', '%'].includes(valorBoton)) {
            operadorSeleccionado = valorBoton;
            pantallaOperando.innerText = primerNumero + " " + operadorSeleccionado;
        } else if (valorBoton === "=") {
            const num1 = parseFloat(primerNumero);
            const num2 = parseFloat(segundoNumero);
            

            switch (operadorSeleccionado) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
                case '*':
                    resultado = num1 * num2;
                    break;
                case '/':
                    resultado = num1 / num2;
                    break;
                case '%':
                    resultado = num1 % num2;
                    break;
            }

            pantallaResultado.innerText = resultado;
            console.log(resultado)
            primerNumero = "";
            segundoNumero = "";
            operadorSeleccionado = "";
            
        }
    });
});








