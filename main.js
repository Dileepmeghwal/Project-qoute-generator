
// qoute generator script

// variables

let btn = document.querySelector('#new-qoute');
let qoute = document.querySelector('.qoute');
let person = document.querySelector('.person');

const qoutes = [{
    qoute: "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.” ",
    person: " – John Green"
},

{
    qoute: "“Loved you yesterday, love you still, always have, always will.”",
    person: "Elaine Davis"
},

{
    qoute: "““I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.”",
    person: "Elaine Davis"
},

{
    qoute: "“Loved you yesterday, love you still, always have, always will.”",
    person: "Elaine Davis"
},

{
    qoute: "“I love you not only for what you are, but for what I am when I am with you.",
    person: "Elizabeth Barrett Browning"
},

{
    qoute: "“Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.”",
    person: "-Unknown"
},

];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * qoutes.length);

    qoute.innerText = qoutes[random].qoute;
    person.innerText = qoutes[random].person;
})