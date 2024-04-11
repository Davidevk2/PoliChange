console.log("Conversion de moneda");

const inputCantidad = document.getElementById("cantidad");
const inputMoneda = document.getElementById("moneda");
const inputResult = document.getElementById("resultado");
const spanResult = document.getElementById("spanResult");


function calcularConverison() {
    let tasaCambio = 0;
    moneda = inputMoneda.value;
    switch (moneda) {
        case 'USD':
            tasaCambio = 3803,96; 
            break;
        case 'EUR':
            tasaCambio = 4081,60; 
            break;
        case 'BRL':
            tasaCambio = 749,280; // Tasa de cambio de reales brasileños a pesos colombianos
            break;
    }

    let resultado = inputCantidad.value * tasaCambio;
    var resultadoFormateado = resultado.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP'
    });
    
    // inputResult.value = resultado.toFixed(2);
    inputResult.value = resultadoFormateado;
    spanResult.innerText = `${inputCantidad.value}  ${moneda} a  COP \n ${resultadoFormateado} Pesos Colombianos`;
}


inputMoneda.addEventListener("change", function () {
    calcularConverison();
})

inputCantidad.addEventListener("keyup",function(){
    calcularConverison();
    
} );

calcularConverison();


