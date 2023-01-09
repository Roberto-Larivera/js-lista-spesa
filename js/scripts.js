console.log('int ok');
/*
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/

const listaSpesa = [
    'Acqua',
    'Pane',
    'Pasta Integrale',
    'Frutta',
    'Verdura',
    'Snack'
];
console.log('listaSpesa',listaSpesa.length,typeof listaSpesa);

const outListaSpesa = document.getElementById('lista-spesa');


let i = 0;

while(i < listaSpesa.length){

const liOut = document.createElement('li');
liOut.innerHTML = listaSpesa[i];
outListaSpesa.append(liOut);

console.log('listaSpesa',listaSpesa[i]);

i++;

}
