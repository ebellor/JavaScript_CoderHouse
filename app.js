const iva = 19
let neto = 0

for (let i = 1;i <= 10; i++) {
    
    
    let valor = Number(prompt(`Producto N° ${i} Ingrese el valor : \n (10 productos máximo y para finalizar ingresar 0)`))

    neto = neto + valor
        if (valor == 0) {
            break
        }
    }

alert(`Totales de la Factura \n ============= \n Neto : ${Math.round(neto)} \n IVA : ${Math.round(neto * (iva/100))} \n Total : ${Math.round(neto + neto * (iva/100))}`)
