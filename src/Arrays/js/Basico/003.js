let calf = [];

function promedio() {
    while (true) {
        let cal = prompt("Ingresa tu calificación: ");
        if (cal == "salir") {
            break;
        } else {
            calf.push(Number(cal));
        }
    }

    let sum = calf.reduce((a, b) => a + b, 0);
    console.log(sum / calf.length);
}

promedio();