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

function preguntas() {
for(let j =1; j==4; j++){
`qOption${j}Container`.createElement='div';
`qOption${j}Container`.setAttribute('class', `Option${j}`);
qArticle.appendChild(`qOption${j}Container`);
`qOption${j}`.createElement='label';
`qOption${j}Container`.appendChild(`qOption${j}`);
`qOption${j}`.setAttribute('class',`Option${j}`);
`qOption${j}`.for=`answer${i}`;
`aOption${j}`.createElement='input';
`aOption${j}`.name= `response${i}`
`aOption${j}`.id= `answer${i}`;
`aOption${j}`.setAttribute('type','radio');
`qOption${j}Container`.appendChild(`aOption${j}`); 

qQuestion.textContent=object.question;
`qOption${j}`.textContent=object.`Option${j}`;
}

}
return 

/* let qOption2Container= document.createElement('div');
qOption2Container.setAttribute('class', 'option2');
qArticle.appendChild(qOption2Container);
let qOption2 = document.createElement('label');
qOption2Container.appendChild(qOption2);
qOption2.setAttribute('class','option2');
qOption2.setAttribute('for','answer2');
let aOption2 = document.createElement('input');
aOption2.name= i;
aOption2.setAttribute('type','radio');
aOption2.setAttribute('id','answer2');
qOption2Container.appendChild(aOption2);


let qOption3Container= document.createElement('div');
qOption3Container.setAttribute('class', 'option3');
qArticle.appendChild(qOption3Container);
let qOption3 = document.createElement('label');
qOption3Container.appendChild(qOption3);
qOption3.setAttribute('class','option3');
qOption3.setAttribute('for','answer3');
let aOption3 = document.createElement('input');
aOption3.name= i;
aOption3.setAttribute('type','radio');
aOption3.setAttribute('id','answer3');
qOption3Container.appendChild(aOption3);

let qOption4Container= document.createElement('div');
qOption4Container.setAttribute('class', 'option4');
qArticle.appendChild(qOption4Container);
let qOption4 = document.createElement('label');
qOption4Container.appendChild(qOption4);
qOption4.setAttribute('class','option4');
qOption4.setAttribute('for','answer4');
let aOption4 = document.createElement('input');
aOption4.name= i;
aOption4.setAttribute('type','radio');
aOption4.setAttribute('id','answer4');
qOption4Container.appendChild(aOption4); */





