//objeto
let personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Luis', edad: 20 },
    { nombre: 'Carlos', edad: 35 },
    { nombre: 'Maria', edad: 28 },
    { nombre: 'Pedro', edad: 40 }
];
//crear nuevo arreglo
let nombres = personas.map(persona => persona.nombre);
//imprimir nuevo arreglo con map que solo contienen los nombres
console.log(nombres);
