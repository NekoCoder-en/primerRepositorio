function encontrarObjeto(arr, propiedad, valor) {
    return arr.find(obj => obj[propiedad] === valor);
}

let personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 35 }
];

let personaEncontrada = encontrarObjeto(personas, "nombre", "Ana");
console.log(personaEncontrada);
