const questions = [
    {
        'question': '¿Cuál es el río más largo del mundo?',
        'option1': 'Nilo',
        'option2': 'Eufrates',
        'option3': 'Orinoco',
        'option4': 'Amazonas',
        'correct': 'Nilo'


    },
    {
        'question': '¿En qué continente está Ecuador?',
        'option1': 'África',
        'option2': 'Europa',
        'option3': 'América',
        'option4': 'Asia',
        'correct': 'América'

    },
    {
        'question': ' ¿Quién es el autor de "El Quijote"?',
        'option1': 'José Saramago',
        'option2': 'Miguel de Cervantes',
        'option3': 'Victor Hugo',
        'option4': 'Edgar Allan Poe',
        'correct': 'Miguel de Cervantes'
        
    },
    {
        'question': '¿Dónde se encuentra la Sagrada Familia?',
        'option1': 'Barcelona',
        'option2': 'Madrid',
        'option3': 'Zaragoza',
        'option4': 'Valencia',
        'correct': 'Barcelona'
    },
    {
        'question': '¿Dónde se encuentra la Torre Eiffel?',
        'option1': 'Lisboa',
        'option2': 'Londres',
        'option3': 'Toulouse',
        'option4': 'Paris',
        'correct': 'Paris'

    },
    {
        'question': '¿Cuál es la moneda del Reino Unido?',
        'option1': 'El Peso',
        'option2': 'El Euro',
        'option3': 'El Dólar',
        'option4': 'La Libra',
        'correct': 'La Libra'

    },
    {
        'question': ' ¿Cual es país más poblado de la Tierra?',
        'option1': 'India',
        'option2': 'Estados Unidos',
        'option3': 'Brasil',
        'option4': 'China',
        'correct': 'China'

    },
    {
        'question': '¿A qué país pertenece la ciudad de Varsovia?',
        'option1': 'Rusia',
        'option2': 'Polonia',
        'option3': 'Serbia',
        'option4': 'Albania',
        'correct': 'Polonia'

    },
    {
        'question': ' ¿Cómo se llama el proceso por el cual las plantas obtienen alimento?',
        'option1': 'Osmosis',
        'option2': 'Transpiración',
        'option3': 'Fotosíntesis',
        'option4': 'traslocación',
        'correct': 'Fotosíntesis'
    },
    {
        'question': '¿En qué país se usó la primera bomba atómica?',
        'option1': 'Alemania',
        'option2': 'Estados Unidos',
        'option3': 'Japón',
        'option4': 'Israel',
        'correct': 'Japón'

    }]
      

let qheader=document.createElement('header');
document.body.appendChild(qheader);

let qMain= document.createElement('main');
document.body.appendChild(qMain);

let qForm = document.createElement('form');
qForm.setAttribute('id','QuizForm')
qMain.appendChild(qForm);


for (let i =0; i <questions.length;i++){

  allQuestions (questions[i],i);
}

function allQuestions(object,i) {


let qFieldset = document.createElement('fieldset');
qFieldset.setAttribute('class','qcontainer');
qForm.appendChild(qFieldset);
let qQuestion = document.createElement('legend');
qQuestion.setAttribute('class','question');
qQuestion.id= `question${i+1}`;
qFieldset.appendChild(qQuestion);

//hasta aqui funciona

//opción A

let aOption1 = document.createElement('input');
aOption1.name=`question${i+1}`;
aOption1.setAttribute('type','radio');
aOption1.id=`a${i+1}`;
qFieldset.appendChild(aOption1);

let qOption1 = document.createElement('label');
qFieldset.appendChild(qOption1);
qOption1.setAttribute('class','option1');
qOption1.setAttribute('for',`a${i+1}`); 

//opción B
let aOption2 = document.createElement('input');
aOption2.name=`question${i+1}`;
aOption2.setAttribute('type','radio');
aOption2.id=`b${i+1}`;
qFieldset.appendChild(aOption2);

let qOption2 = document.createElement('label');
qFieldset.appendChild(qOption2);
qOption2.setAttribute('class','option2');
qOption2.setAttribute('for',`b${i+1}`); 


//opción C
let aOption3 = document.createElement('input');
aOption3.name=`question${i+1}`;
aOption3.setAttribute('type','radio');
aOption3.id=`c${i+1}`;
qFieldset.appendChild(aOption3);

let qOption3 = document.createElement('label');
qFieldset.appendChild(qOption3);
qOption3.setAttribute('class','option3');
qOption3.setAttribute('for',`c${i+1}`); 

//Opción D
let aOption4 = document.createElement('input');
aOption4.name=`question${i+1}`;
aOption4.setAttribute('type','radio');
aOption4.id=`d${i+1}`;
qFieldset.appendChild(aOption4);

let qOption4 = document.createElement('label');
qFieldset.appendChild(qOption4);
qOption4.setAttribute('class','option4');
qOption4.setAttribute('for',`d${i+1}`); 


qQuestion.textContent= object.question;
document.getElementsByClassName('option1')[i].innerHTML = object.option1;
document.getElementsByClassName('option2')[i].innerHTML = object.option2;
document.getElementsByClassName('option3')[i].innerHTML = object.option3;
document.getElementsByClassName('option4')[i].innerHTML = object.option4;
}

let boton = document.createElement('button');
boton.setAttribute('type','submit');
boton.textContent='Submit';
qForm.appendChild(boton);

/* 
    //validación por pregunta 
            let inputs = document.querySelectorAll('input[type=radio]:checked');
            let values=[];
            let correctAnswersCounter=0;

            for(input of inputs){
                values.push(input.value)
            }
            if(values.includes(questions.correct)){
                correctAnswersCounter++;
                }

            let score =document.querySelector('i');
            score.innerHTML = correctCounter +'/10';
 */