function Burbuja() {
    var listas = [];
    while (true) {
        n = prompt("Ingresa datos a ordenar (o ingresa 'salir' para terminar): ");
        if (n == "salir") {
            listas = listas.map(Number);
            break;
        } else {
            listas.push(n);
        }
    }
    for (i = 0; i < listas.length; i++) {
        for (j = 0; j < listas.length - 1; j++) {
            if (listas[j] > listas[j + 1]) {
                aux = listas[j];
                listas[j] = listas[j + 1];
                listas[j + 1] = aux;
            }
        }
    }

    listas.sort((a, b) => a - b);
    console.log(listas);
}
Burbuja();