

let diaHoje = 14;//leitura da data do computador
let dataEvento = 15;//data do evento

const palestras = ["Logica de programacao - St. Jobs","Versionamento - Thiago Maia", "Codigo Limpo - Leo Santos", "Desenvolvimento Web - Maria Portinele"];

let participantesInscritos = 10;
let idadeParticipante = 18; 

if (dataEvento < diaHoje){
    console.log ("Evento já realizado");
}
else {
    console.log ("Continue seu cadastro, informe sua idade:")

    if (idadeParticipante < 18) {
        console.log ("Infelizmente esse evento é só para maiores!");
    }else{
        console.log ("Continue seu cadastro, Escolha sua palesta:");

        for (let i = 0; i < palestras.length; i++){
            const palestraCorrente = palestras[i];
            console.log(palestraCorrente);
        }

        if (participantesInscritos < 100) {
            console.log ("Incrição realizada com sucesso!");
        }else{
            console.log ("Inscrição não realizada, vagas Esgotadas!");
        }
    }
}





