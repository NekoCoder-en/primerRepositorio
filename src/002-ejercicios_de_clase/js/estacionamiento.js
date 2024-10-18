document.getElementById('btn').addEventListener('click', function () {
    while (true) {
        let horas = prompt("Ingresa el número de horas: ");
        let minutos = prompt("Ingresa el número de minutos: ");
        
        if (!isNaN(horas) && !isNaN(minutos) && horas !== null && minutos !== null && horas !== "" && minutos !== "") {
            horas = parseFloat(horas);
            minutos = parseFloat(minutos);
            let totalHoras = horas + (minutos / 60);
            
            if (totalHoras <= 0.5) {
                console.log("El estacionamiento es gratis");
            } else if (totalHoras > 0.5 && totalHoras < 2) {
                let costo = Math.ceil(totalHoras) * 10; 
                console.log("El costo del estacionamiento es de: " + costo + " pesos");
            } else if (totalHoras >= 2 && totalHoras <= 3) {
                console.log("El costo del estacionamiento es de: 25 pesos");
            } else if (totalHoras > 3) {
                let costo = Math.ceil(totalHoras) * 30;
                console.log("El costo del estacionamiento es de: " + costo + " pesos");
            }
            break; 
        } else {
            alert('Por favor ingresa valores numéricos válidos para horas y minutos.');
            continue; 
        }
    }
});
