const argv = require('process').argv;
const sumaYrestaYpotencia = require('./sumaYrestaYpotencia')
const operacion = argv[2]
const numeroA = +argv[3]
const numeroB = +argv[4]
if(argv.length < 5){
    console.log(`Porfavor, ingrese todos los argumentos para realizar la operación: ${operacion}`);
    process.exit(1);
}
if(operacion === 'suma'){
    console.log(`la suma entre ${numeroA} y ${numeroB} es = ${sumaYrestaYpotencia.suma(numeroA, numeroB)}`)
}else if(operacion === 'resta'){
    console.log(`la resta entre ${numeroA} y ${numeroB} es = ${sumaYrestaYpotencia.resta(numeroA, numeroB)}`)
}else if(operacion === 'potencia'){
    console.log(`el numero ${numeroA} elevado al numero: ${numeroB} es = ${sumaYrestaYpotencia.potencia(numeroA, numeroB)}`)
}/* Aca empieza jorge */