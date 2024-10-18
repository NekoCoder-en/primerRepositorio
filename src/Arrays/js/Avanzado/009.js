const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 34 },
    { nombre: 'Luis', edad: 42 },
    { nombre: 'Marta', edad: 27 },
    { nombre: 'Carlos', edad: 31 },
    { nombre: 'Lucía', edad: 53 }
];

let gruposPorDecada = personas.reduce((ac, { edad, nombre }) => {
    let decada = Math.floor(edad / 10) * 10 + 's';
    (ac[decada] = ac[decada] || []).push({ nombre, edad });
    return ac;
}, {});

console.log(gruposPorDecada);
