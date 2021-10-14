let numeroAlunos = 5;
let listaDeAlunos = ["ismael", "Orion", "Thiago", "Ordilei", "Marina"];

// for(let i=0; i < listaDeAlunos.length; i++){
//     //console.log(i);

//     if (i == 0) {
//         console.log(i+": ZERO  ${listaDeAlunos[i]}");
//     } else if (i % 2 == 1){
//         console.log(`${i}: ÍMPAR  ${listaDeAlunos[i]}`);
//         //console.log(i+": ÍMPAR  ${listaDeAlunos[i]}");
//     }else{
//         console.log(`${i}: PAR  ${listaDeAlunos[i]}`);
//     }
// }

// //Minimum Viable Product
let i=0;  
while (i < listaDeAlunos.length) {
    if (i == 0) {
        console.log(`${i}: ZERO  ${listaDeAlunos[i]}`);
    } else if (i % 2 == 1){
        console.log(`${i}: ÍMPAR ${listaDeAlunos[i]}`);
        //console.log(i+": ÍMPAR");
    }else{
        console.log(`${i}: PAR  ${listaDeAlunos[i]}`);
    }

    i++;
}