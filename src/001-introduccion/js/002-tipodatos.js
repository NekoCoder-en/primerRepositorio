//para texto debe de ir en comillas simples o dobles
const nombre='Carlos Arturo';
const parrafo="Este es un oparrafo con comillas dobles";
// numeor positivo entero o decimal
const numero=12;
const decimal= -12.43;
//tipo de dato de cadena
var grupo= 'G1-DSM';
//booleano
grupo = 10>5;

//arreglos 
let ArreglosAutos = []; //ARREGLO vacio ya que detro de los [] no se encuentra nada
let ArreglosFrutas = ['Manzana','uva',{objeto: 'Valor'},[1,2,3,4,5,6],true];

//OBJETO
let Alumno={
    nombre: 'Alan',
    edad : 19,
    becado: true,
    materias: ['Apps Web','Integradora','Calculo','Inglés'],
    direccion:{
        calle: 'Independencia',
        numero: '4-12c',
        colonia: 'Gral. Porfirio Diaz'
    },
    saludar: function (){console.log('Hola')},
    titulo : null,
    cedulaProfecional: undefined,
}
//Arriba creamos un objeto llamado Alumno que ceunta con todos los tipos de datos desde numericos, boleanos, arreglos, y funciones.
console.log(Alumno);