let texto =prompt("Escribe tu palabra para eliminar las vocales: ");
let resultado = texto.replace(/[aeiouAEIOU]/g, '');
console.log(resultado); 