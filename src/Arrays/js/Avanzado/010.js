let arreglo1 = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 }
];

let arreglo2 = [
    { ciudad: 'Madrid', pais: 'España' },
    { ciudad: 'París', pais: 'Francia' }
];

let combinado = arreglo1.map((obj, i) => ({
    ...obj,
    ...arreglo2[i]
}));

console.log(combinado);
