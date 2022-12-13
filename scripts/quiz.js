const questions = [
    {
        'question': 'PREGUNTA1',
        'option1': '3',
        'option2': '4',
        'option3': '7',
        'option4': '2',

    },
    {
        'question': 'PREGUNTA2',
        'option1': '3',
        'option2': '4',
        'option3': '7',
        'option4': '2',
    },
    {
        'question': 'PREGUNTA3',
        'option1': '3',
        'option2': '4',
        'option3': '7',
        'option4': '2',
    },
    {
        'question': 'PREGUNTA4',
        'option1': '3',
        'option2': '4',
        'option3': '7',
        'option4': '2',
    },
    {
        'question': 'PREGUNTA5',
        'option1': '3',
        'option2': '4',
        'option3': '7',
        'option4': '2',
    },
    {
        'question': 'PREGUNTA6',
        'option1': '3',
        'option2': '4',
        'option3': '7',
        'option4': '2',
    },
    {
        'question': 'PREGUNTA7',
        'option1': '7',
        'option2': '4',
        'option3': '7',
        'option4': '2',
    },
    {
        'question': 'PREGUNTA8',
        'option1': '3',
        'option2': '4',
        'option3': '7',
        'option4': '2',
    },
    {
        'question': 'PREGUNTA9',
        'option1': '10',
        'option2': '4',
        'option3': '7',
        'option4': '2',
    },
    {
        'question': 'PREGUNTA10',
        'option1': '3',
        'option2': '4',
        'option3': '7',
        'option4': '2',
    }]
      



let qheader=document.createElement('header');
document.body.appendChild(qheader);
let qInstructions=document.createElement('a');
qInstructions.setAttribute('class','boton');
qheader.appendChild(qInstructions);
qInstructions.textContent='Instructions';

let qMain= document.createElement('main');
document.body.appendChild(qMain);
let qSection = document.createElement('section');
qMain.appendChild(qSection);


for (let i =0; i <questions.length;i++){

  allQuestions (questions[i],i);
}

function allQuestions(object,i) {


let qArticle = document.createElement('article');
qArticle.setAttribute('class','qcontainer');
qSection.appendChild(qArticle);

let qQuestion = document.createElement('div');
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
aOption1.name=i;
aOption1.setAttribute('type','radio');
aOption1.id=`a${i}`;
aOption1.value=1;
qOption1Container.appendChild(aOption1);

let qOption2Container= document.createElement('div');
qOption2Container.setAttribute('class', 'option');
qArticle.appendChild(qOption2Container);
let qOption2 = document.createElement('label');
qOption2Container.appendChild(qOption2);
qOption2.setAttribute('class','option2');
qOption2.setAttribute('for',`b${i}`);
let aOption2 = document.createElement('input');
aOption2.name= i;
aOption2.setAttribute('type','radio');
aOption2.id=`b${i}`;
aOption2.value=2;
qOption2Container.appendChild(aOption2);


let qOption3Container= document.createElement('div');
qOption3Container.setAttribute('class', 'option');
qArticle.appendChild(qOption3Container);
let qOption3 = document.createElement('label');
qOption3Container.appendChild(qOption3);
qOption3.setAttribute('class','option3');
qOption3.setAttribute('for',`c${i}`);
let aOption3 = document.createElement('input');
aOption3.name= i;
aOption3.setAttribute('type','radio');
aOption3.id=`c${i}`;
aOption3.value=3;
qOption3Container.appendChild(aOption3);

let qOption4Container= document.createElement('div');
qOption4Container.setAttribute('class', 'option');
qArticle.appendChild(qOption4Container);
let qOption4 = document.createElement('label');
qOption4Container.appendChild(qOption4);
qOption4.setAttribute('class','option4');
qOption4.setAttribute('for',`d${i}`);
let aOption4 = document.createElement('input');
aOption4.name= i;
aOption4.setAttribute('type','radio');
aOption4.id= `d${i}`;
aOption4.value=4;
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