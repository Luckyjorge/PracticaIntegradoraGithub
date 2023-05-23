const argv = require("process").argv;
const sumaYrestaYpotencia = require("./sumaYrestaYpotencia");
const dividir = require("./dividir");
const multiplicar = require("./multiplicar");
const raizCuadrada = require("./raizCuadrada");
const operacion = argv[2];
const numeroA = +argv[3];
const numeroB = +argv[4];
if (argv.length < 5) {
    console.log(
        `Porfavor, ingrese todos los argumentos para realizar la operación: ${operacion} \n
    En caso de querer realizar la raiz cuadrada de un numero, el segundo argumento debe ser 0`
    );
    process.exit(1);
}
switch (operacion) {
    case "suma":
        console.log(
            `la suma entre ${numeroA} y ${numeroB} es: ${sumaYrestaYpotencia.suma(numeroA, numeroB)}`
        );

        break;
    case "resta":
        console.log(
            `la resta entre ${numeroA} y ${numeroB} es: ${sumaYrestaYpotencia.resta(numeroA, numeroB)}`
        );
        break;
    case "potencia":
        console.log(
            `el numero ${numeroA} elevado al numero: ${numeroB} es: ${sumaYrestaYpotencia.potencia(numeroA, numeroB)}`
        );
        break;
    case "multiplicar":
        console.log(
            `el numero ${numeroA} multiplicado por ${numeroB} es: ${multiplicar(numeroA, numeroB)}`
        );
        break;
    case "dividir":
        console.log(
            `el numero ${numeroA} dividido por ${numeroB} es: ${dividir(numeroA, numeroB)}`
        );
        break;
    case "raiz":
        console.log(
            `la raiz cuadrada de ${numeroA} es: ${raizCuadrada(numeroA)}`
        );
        break;
    default:
        console.log(`Que tocaste???`)
        
} /* 
if(operacion === 'suma'){
    console.log(`la suma entre ${numeroA} y ${numeroB} es = ${sumaYrestaYpotencia.suma(numeroA, numeroB)}`)
}else if(operacion === 'resta'){
    console.log(`la resta entre ${numeroA} y ${numeroB} es = ${sumaYrestaYpotencia.resta(numeroA, numeroB)}`)
}else if(operacion === 'potencia'){
    console.log(`el numero ${numeroA} elevado al numero: ${numeroB} es = ${sumaYrestaYpotencia.potencia(numeroA, numeroB)}`)
}/* Aca empieza jorge */
