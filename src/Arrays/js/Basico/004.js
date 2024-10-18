let calf = [];

function numeros() {
    while (true) {
        let cal = prompt("Ingresa un dato para el array o 'salir' para terminar: ");
        if (cal == "salir") {
            break;
        } else {
            calf.push(cal);
        }
    }

    // Mostrar el arreglo al revés sin usar reverse()
    let resultado = "";
    for (let i = calf.length - 1; i >= 0; i--) {
        resultado += calf[i] + " ";
    }

    console.log("Array al revés: " + resultado);
}

numeros();
