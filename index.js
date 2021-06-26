var Bool = true
var Bool2 = false
var string = "Hola"
var int = 12
var float = 2.22222

var array = ["Hola", 12, true, 3.3333]

/*
var esniño = false

switch(esniño){
    case true:
        console.log("Es niño")
        break
    case false:
        console.log("Es niña")
        break
    default:
        console.log("No se puede determinar")
        break
}
*/

// console.log(array[0])

const input = require("prompt-sync")({ sigint: true });

var numero1 = parseFloat(input("Dime un numero: "))
var numero2 = parseFloat(input("Dime otro numero: "))
var operador = input("Dime otro numerouna operacion: ")

switch(operador){
    case "+":
        console.log(numero1+numero2)
        break
    case "-":
        console.log(numero1-numero2)
        break
    case "*":
        console.log(numero1*numero2)
        break        
    case "/":
        console.log(numero1/numero2)
        break
    case "**":
        console.log(numero1**numero2)
        break
        }