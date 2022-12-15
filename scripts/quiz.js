const questions = [
    {
        'question': '¿Cuál es el río más largo del mundo?',
        'option1': 'Nilo',
        'option2': '4',
        'option3': '7',
        'option4': '2',


    },
    {
        'question': '¿En qué continente está Ecuador?',
        'option1': '3',
        'option2': '4',
        'option3': 'América',
        'option4': '2',
    },
    {
        'question': ' ¿Quién es el autor de "El Quijote"?',
        'option1': '3',
        'option2': 'Miguel de Cervantes',
        'option3': '7',
        'option4': '2',
    },
    {
        'question': '¿Dónde se encuentra la Sagrada Familia?',
        'option1': 'Barcelona',
        'option2': '4',
        'option3': '7',
        'option4': '2',
    },
    {
        'question': '¿Dónde se encuentra la Torre Eiffel?',
        'option1': '3',
        'option2': '4',
        'option3': '7',
        'option4': 'Paris',
    },
    {
        'question': '¿Cuál es la moneda del Reino Unido?',
        'option1': '3',
        'option2': '4',
        'option3': '7',
        'option4': 'La Libra',
    },
    {
        'question': ' ¿Cual es país más poblado de la Tierra?',
        'option1': '7',
        'option2': '4',
        'option3': '7',
        'option4': 'China',
    },
    {
        'question': '¿A qué país pertenece la ciudad de Varsovia?',
        'option1': '3',
        'option2': 'Polonia',
        'option3': '7',
        'option4': '2',
    },
    {
        'question': ' ¿Cómo se llama el proceso por el cual las plantas obtienen alimento?',
        'option1': '10',
        'option2': '4',
        'option3': 'Fotosíntesis',
        'option4': '2',
    },
    {
        'question': '¿En qué país se usó la primera bomba atómica en combate?',
        'option1': '3',
        'option2': '4',
        'option3': 'Japón',
        'option4': '2',
    }]
      
let correctAnswers ={
    correctAnswer1:'a',
    correctAnswer2:'c',
    correctAnswer3:'b',
    correctAnswer4:'a',
    correctAnswer5:'d',
    correctAnswer6:'d',
    correctAnswer7:'b',
    correctAnswer8:'c',
    correctAnswer9:'c'
};

let qheader=document.createElement('header');
document.body.appendChild(qheader);

let qMain= document.createElement('main');
document.body.appendChild(qMain);

let qSection = document.createElement('form');
qSection.setAttribute('id','QuizForm')
qMain.appendChild(qSection);


for (let i =0; i <questions.length;i++){

  allQuestions (questions[i],i);
}

function allQuestions(object,i) {


let qArticle = document.createElement('fieldset');
qArticle.setAttribute('class','qcontainer');
qSection.appendChild(qArticle);
let qQuestion = document.createElement('label');
qQuestion.setAttribute('class','question');
qArticle.appendChild(qQuestion);
qQuestion.id= `question${i+1}`;


let qOption1Container= document.createElement('div');
qOption1Container.setAttribute('class', 'option');
qArticle.appendChild(qOption1Container);
let qOption1 = document.createElement('label');
qOption1Container.appendChild(qOption1);
qOption1.setAttribute('class','option1');
qOption1.setAttribute('for',`a${i}`);
let aOption1 = document.createElement('input');
aOption1.name=`question${i+1}`;
aOption1.setAttribute('type','radio');
aOption1.id=`a${i}`;
aOption1.value='a';
aOption1.setAttribute('onclick', `respuesta(${i+1},this)`);
qOption1Container.appendChild(aOption1);

let qOption2Container= document.createElement('div');
qOption2Container.setAttribute('class', 'option');
qArticle.appendChild(qOption2Container);
let qOption2 = document.createElement('label');
qOption2Container.appendChild(qOption2);
qOption2.setAttribute('class','option2');
qOption2.setAttribute('for',`b${i}`);
let aOption2 = document.createElement('input');
aOption2.name= `question${i+1}`;
aOption2.setAttribute('type','radio');
aOption2.id=`b${i}`;
aOption2.value='b';
aOption2.setAttribute('onclick', `respuesta(${i+1},this)`);
qOption2Container.appendChild(aOption2);


let qOption3Container= document.createElement('div');
qOption3Container.setAttribute('class', 'option');
qArticle.appendChild(qOption3Container);
let qOption3 = document.createElement('label');
qOption3Container.appendChild(qOption3);
qOption3.setAttribute('class','option3');
qOption3.setAttribute('for',`c${i}`);
let aOption3 = document.createElement('input');
aOption3.name= `question${i+1}`;
aOption3.setAttribute('type','radio');
aOption3.id=`c${i}`;
aOption3.value='c';
aOption3.setAttribute('onclick', `respuesta(${i+1},this)`);
qOption3Container.appendChild(aOption3);

let qOption4Container= document.createElement('div');
qOption4Container.setAttribute('class', 'option');
qArticle.appendChild(qOption4Container);
let qOption4 = document.createElement('label');
qOption4Container.appendChild(qOption4);
qOption4.setAttribute('class','option4');
qOption4.setAttribute('for',`d${i}`);
let aOption4 = document.createElement('input');
aOption4.name= `question${i+1}`;
aOption4.setAttribute('type','radio');
aOption4.id= `d${i}`;
aOption4.value='d';
aOption4.setAttribute('onclick', `respuesta(${i+1},this)`);
qOption4Container.appendChild(aOption4); 

/* qQuestion.textContent= object.question;
qOption1.textContent = object.Option1;
qOption2.textContent = object.Option2;
qOption3.textContent = object.Option3;
qOption4.textContent = object.Option4; */


qQuestion.textContent= object.question;
document.getElementsByClassName('option1')[i].innerHTML = object.option1;
document.getElementsByClassName('option2')[i].innerHTML = object.option2;
document.getElementsByClassName('option3')[i].innerHTML = object.option3;
document.getElementsByClassName('option4')[i].innerHTML = object.option4;
}

let button = document.querySelector("button");
button.addEventListener("click", function() {

    let correctAnswers = ['a','c','b','a','d','d','b','c','c','d']
    let userAnswers = [];
    let answerXQ =[];
    let correctAnswersCounter =0;
    let incorrectAnswersCounter =0;
    let questionsAnswered =0;
    
    for (let i = 0; i < correctAnswers.length; i++) {
        answerXQ =document.getElementsByName(`question${i+1}`);
        for (let j=0;j<=3;j++ ){
            if (answerXQ[j].checked===true){
                questionsAnswered++;
                userAnswers[i]=answerXQ[j].value;
                answerXQ[j].value== respuestasCorrectas[i]? correctAnswersCounter++: incorrectAnswersCounter++  
                document.getElementById('score').innerHTML = correctAnswersCounter;
                document.getElementById('score').innerHTML = incorrectAnswersCounter;
                questionsAnswered==10 ? document.write('has respondido todo'): document.write(`te faltaron por responder ${10-questionsAnswered}`);
            }}
        } 
    } 
)