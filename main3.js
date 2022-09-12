function calculadora (PRIMER_NUM, SEGUNDO_NUM, operacion){
    switch(operacion){
        case "+":
            return PRIMER_NUM + SEGUNDO_NUM
            break
        case "-":
            return PRIMER_NUM - SEGUNDO_NUM
            break
        case "*":
            return PRIMER_NUM * SEGUNDO_NUM
            break
        case "/":
            return PRIMER_NUM / SEGUNDO_NUM
            break
        default:
            return 0
            break
    }
}


const cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que quiere comprar"))
let sumatoria = 0
for (let i = 1; i <= cantidadProductos; i++){
        const productoActual = parseFloat(prompt("Ingrese costo del producto número " + i))
        sumatoria = calculadora(sumatoria, productoActual, "+")
        console.log(sumatoria)  
}

let subtotal = sumatoria
console.log(subtotal)

let totalFinal = calculadora(sumatoria, 1.21, "*")
alert (`Total a pagar es de: ${totalFinal} (IVA incluido)`)