const arr = ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli']
console.log(arr);

//adcionar elementos

arr.push('Boromir');
arr.unshift('Boromir');
console.log(arr);

//remover elementos

arr.pop();
arr.shift();
console.log(arr);

//pesquisar por um elemento

const include = arr.includes('Boromir');
const index = arr.indexOf('Gandalf');
console.log(index);
console.log(include);

//cortar e concatenar

const hobbits = arr.slice(0, 5);
const outher = arr.slice(-4);
console.log(outher);
console.log(hobbits);

const society = hobbits.concat(outher, 'boromir');
console.log(society);

//subtistuição dos elementos
//             apartir quantos e substituir
const a = society.splice(4,1,'Gandalf, o cinzento');
console.log(a);

//iterar
for (let i = 0; i < society.length; i++){
    const elemento = society[i];
    console.log(elemento+' se encontra na posição '+i);
}