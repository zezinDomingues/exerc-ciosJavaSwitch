/*
//ex-1
let qualidade = {curso:"administração",};

switch(qualidade.curso){ 
case  "desenvolvimento" : 
    console.log("seu curso é desenvolvimento")
break;
 case 
    "logistica" : 
    console.log("seu curso é logistica")
    break;
case  "administração":
    console.log("seu curso é administração");
break;
default:
    console.log("curso não encontrado")

};

//ex-2

let p1 = 22;
let p2 = 17;
let tudão = p1 + p2;


switch (tudão) {
    case (p1 + p2):
        console.log(`O seu resultado é ${tudão}`);
        break;
    default:
        console.log("Outro valor.");
        break;
}

//ex-3
*/
let aluno = 19


switch(true){
    case aluno < 14 :
    console.log("infantil")
    break;
        case aluno<18 && aluno>14:
            console.log("adolecente")
                break;
                        case aluno < 60 && aluno>=18:
                            console.log("adulto")
                            break;
                                default:
                                    console.log('idoso')

}

//ex-4

let nota = 9;

switch (true) {
    case (nota < 7):
        console.log("insuficiente");
        break;
    case (nota === 7):
        console.log("regular");
        break;
    case (nota > 7 && nota < 10):
        console.log("bom");
        break;
    case (nota === 10):
        console.log("excelente");
        break;
    default:
        console.log("não fez as provas");
}

//ex-5

let semana = {dia:1}
switch(true){
        case semana.dia === 1:
        console.log("esse dia é segunda")
        break;
        case semana.dia === 2:
        console.log("esse dia é terca")
        break;
        case semana.dia === 3:
        console.log("esse dia é quarta")
        break;
        case semana.dia === 4:
        console.log("esse dia é quinta")
        break;
        case semana.dia === 5:
        console.log("esse dia é sexta")
        break;
        case semana.dia === 6:
        console.log("esse dia é sabado")
        break;
        case semana.dia === 7:
            console.log("esse dia é domingo")
            break
}

//ex-6
function evento (nomeEvento) {
    switch (nomeEvento) {
        case "Festa Junina" :
            console.log('O evento é realizado um julho')
            break;
        case "Semana de Tecnologia" :
            console.log("O evento conta sobre seguimentos tech")
            break;
        case "Feira de Profissões" :
            console.log(`Esse evento trás diferentes profissões como base pro futuro`)
            break;
    }
}

evento('Semana de Tecnologia')

//ex-7
let mes = {mes:1}
switch(true){
        case mes.mes === 1:
        console.log("esse mes é janeiro")
        break;
        case mes.mes === 2:
        console.log("esse mes é fevereiro")
        break;
        case mes.mes === 3:
        console.log("esse mes é março")
        break;
        case mes.mes === 4:
        console.log("esse mes é abril")
        break;
        case mes.mes === 5:
        console.log("esse mes é maio")
        break;
        case mes.mes === 6:
        console.log("esse mes é junho")
        break;
        case mes.mes === 7:
            console.log("esse mes é julho")
            break
            case mes.mes === 8:
        console.log("esse mes é agosto")
        break;
        case mes.mes === 9:
        console.log("esse mes é setembro")
        break;
        case mes.mes === 10:
        console.log("esse mes é outubro")
        break;
        case mes.mes === 11:
        console.log("esse mes é novembro")
        break;
        case mes.mes === 12:
        console.log("esse mes é dezembro")
        break;
        
}
//ex-8

let EstacoesAno =  { Quadrimestre: 1 }

    switch (true) {
        case (EstacoesAno.Quadrimestre === 1):
            console.log('A estação do ano em que estamos, é o: Verão.');
        break;
        case (EstacoesAno.Quadrimestre === 2):
            console.log('A estação do ano em que estamos, é o: Outono.');
        break;
        case (EstacoesAno.Quadrimestre === 3):
            console.log('A estação do ano em que estamos, é o: Inverno.');
        break;
        case (EstacoesAno.Quadrimestre === 4):
            console.log('A estação do ano em que estamos, é o: Primavera.');
    }

    //ex-9
    function converte (valor, unidade) {
        switch (unidade) {
            case 'cm' :
                console.log(`${valor} em m é ${valor / 1000} e em km é ${valor / 1000000} `)
                break;
            case 'm' :
                console.log(`${valor} em cm é ${valor * 1000} e em km é ${valor / 1000}`)
                break;
            case 'km' :
                console.log(`${valor} em cm é ${valor /1000000} e em m é ${valor / 1000}`)
                break;
            default:
                console.log('essa metragem não está entre cm, m e km')
        }
    }
    
    converte(1000, 'm')

//ex-10

let Notinha = { ValorAvaliação: 9 };

switch (true) {
    case (Notinha.ValorAvaliação === 10 || Notinha.ValorAvaliação === 9):
        console.log('A nota esta categorizada como: A');
        break;
    case (Notinha.ValorAvaliação === 8 ||  Notinha.ValorAvaliação === 7):
        console.log('A nota esta categorizada como: B');
        break;
    case (Notinha.ValorAvaliação === 6 || Notinha.ValorAvaliação === 5):
        console.log('A nota esta categorizada como: C');
        break;
    case (Notinha.ValorAvaliação === 4 || Notinha.ValorAvaliação === 3):
        console.log('A nota esta categorizada como: D');
        break;
    case (Notinha.ValorAvaliação === 2 || Notinha.ValorAvaliação === 1):
        console.log('A nota esta categorizada como: F');
        break;
    default:
        console.log('A nota não pôde ser analisada.');
}

//ex-11

function converteMoeda (valor, unidade) {
    switch (unidade) {
        case 'USD' :
            console.log(`${valor} em USD é ${valor / 5.71} `)
            break;
        case 'EUR' :
            console.log(`${valor} em EUR é ${valor * 6.12}`)
            break;
        case 'GBP' :
            console.log(`${valor} em GBP é ${valor / 7.97}`)
            break;
        default:
            console.log('essa moeda não está entre (USD, EUR, GBP)')
    }
}

converteMoeda(1000, 'USD')

//ex-12

let cur = {curs:"tecnico",};

switch(cur.curs){ 
case  "tecnico" : 
    console.log("seu curso é tecnico")
break;
 case 
    "superio" : 
    console.log("seu curso é superior")
    break;
case  "extensão":
    console.log("seu curso é extensão");
break;
default:
    console.log("curso não encontrado")

};

//ex-13
let dificuldade = {not:1}
switch(true){
        case dificuldade.not === 1:
        console.log("essa atividade tem prioridade alta")
        break;
        case dificuldade.not === 2:
        console.log("essa atividade tem prioridade media")
        break;
        case dificuldade.not === 3:
        console.log("essa atividade tem prioridade baixa")
        break;
}
//ex-14

function calcularIMC(Peso, Altura) {
    let IMC = Peso / (Altura * Altura);
    
        switch  (true) {
            case (IMC < 18.5):
        console.log("Classificação: Abaixo do peso");
            break;
            case (IMC >= 18.5 && IMC <= 24.9):
        console.log("Classificação: Peso normal");
            break;
            case  (IMC >= 25 && IMC <= 29.9):
        console.log("Classificação: Sobrepeso");
            break;
            case (IMC >= 30):
        console.log("Classificação: Obesidade");
        }
    }
    calcularIMC(80, 1.80);

//ex-15

let alu = {documento:"RG",};

switch(alu.documento){ 
case  "RG" : 
    console.log("vc precisa de um RG")
break;
 case 
    "CPF" : 
    console.log("vc precisa de um CPF")
    break;
case  "Passaporte":
    console.log("vc precisa de um Passaporte");
break;

};


//ex-16

let passa = {va:"estudante",};

switch(passa.va){ 
case  "estudantes" : 
    console.log("vc pagara apenas R$2,50")
break;
 case 
    "trabalhador" : 
    console.log("a empresa pagara por vc")
    break;
case  "idosa":
    console.log("o estado paga sua passagem");
break;
default:
    console.log("vc pagara normal R$5,00 ")

};

//ex-17

function tempoDemora (tempo) {
    switch (true) {
        case tempo < 0.1 :
            console.log('O tempo de desempenho é rapido')
            break;
        case tempo > 0.1 && tempo < 1 :
            console.log('O tempo de desempenho é moderado')
            break;
        case tempo > 1 && tempo < 3 :
            console.log('O tempo de desempenho é lento')
            break;
        case tempo > 3 :
            console.log('O tempo de desempenho é muito lento')
    }
}
tempoDemora(0.05)
//ex-18

let deficiencia = {def:"visual"};;

switch(alu.documento){ 
case  "visual" : 
    console.log("vc tem deficiencia visual")
break;
 case 
    "auditiva" : 
    console.log("vc tem deficiencia auditiva")
    break;
case  "motora":
    console.log("vc tem deficiencia motora");
break;

}

//ex-19

function nota0a100 (notinha) {
    switch (true) {
        case (notinha === 100 && notinha >= 90):
            console.log('A nota esta categorizada como: A');
            break;
        case (notinha <= 80 &&  notinha >= 70):
            console.log('A nota esta categorizada como: B');
            break;
        case (notinha <= 60 && notinha >= 50):
            console.log('A nota esta categorizada como: C');
            break;
        case (notinha <= 40 && notinha >= 30):
            console.log('A nota esta categorizada como: D');
            break;
        case (notinha <= 20 && notinha >= 10):
            console.log('A nota esta categorizada como: F');
            break;
        default:
            console.log('A nota não pôde ser analisada.');
    }
}

nota0a100(70)

//ex-20

let TemperaturaClimática = {GrausEmFuncaoClimatica:20}
    switch(true) {
        case (TemperaturaClimática.GrausEmFuncaoClimatica >= 0 && TemperaturaClimática.GrausEmFuncaoClimatica <= 15):
            console.log('Devido a condição climática, teremos um dia Chuvoso.');
            break;
        case (TemperaturaClimática.GrausEmFuncaoClimatica >= 16 && TemperaturaClimática.GrausEmFuncaoClimatica <= 21):
            console.log('Devido a condição climática, teremos um dia Nublado.');
            break;
        case (TemperaturaClimática.GrausEmFuncaoClimatica >= 22 && TemperaturaClimática.GrausEmFuncaoClimatica <= 36):
            console.log('Devido a condição climática, teremos um dia Ensolarado.');
            break;
    default:
            console.log('Clima não decodificado.');
    }

