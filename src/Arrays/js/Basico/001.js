let arrays = [];
function array() {
    let a=true;
    while (a) {
        let nom = prompt("Ingresa un valor: ");
        if (nom == "para") {
            a=false;
        } else {
            arrays.push(nom);
        }
    }
    //convierte strings a enteros
    arrays = arrays.map(Number);    
    //suma el contenido del arreglo
    console.log(arrays.reduce((a, b) => a + b));
}
array();

//Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu