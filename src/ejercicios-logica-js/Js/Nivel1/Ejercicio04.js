function evaluarDinero() {
    let dinero = parseFloat(document.getElementById('dinero').value);
    let resultado = document.getElementById('resultado');

    if (dinero > 0) {
        resultado.textContent = "El número es positivo.";
    } else if (dinero < 0) {
        resultado.textContent = "El número es negativo.";
    } else if (!isNaN(dinero)) {
        resultado.textContent = "El número es cero.";
    } else {
        resultado.textContent = "Por favor, ingrese una cantidad válida.";
    }
}
