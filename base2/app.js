// const question = 'miyosiはいくつ?';
// const answers = ['22', '23', '24', '25'];
// const correct = '25';

const quiz =[
    {
        question: 'miyosiはいくつ?',
        answers: ['22', '23', '24', '25'],
        correct: '25'
    },{
        question: 'miyosiはいくつ?2',
        answers: ['22', '23', '24', '25'],
        correct: '25'
    },{
        question: 'miyosiはいくつ?3',
        answers: ['22', '23', '24', '25'],
        correct: '25'
    }
];

let quizIndex = 0;
let score = 0;

// console.log(document.getElementById('js-question'));
const $button = document.getElementsByTagName('button')

// htmlのオブジェクトを利用するときは$を変数の前につける

const setQuix = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < quiz[quizIndex].answers.length){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
        
    }
}
setQuix();

const clickHandler = (e) => {
    // ボタンを押して正誤判定を行う
    if(quiz[quizIndex].correct == e.target.textContent){
        window.alert('正解');
        score++;
    }else{
        window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quiz.length){
        setQuix();
    }else{
        window.alert('終了。あなたの正解率は' + score + '/' + quiz.length + 'です。');
    }

};

let handlerIndex = 0
while(handlerIndex < quiz[quizIndex].answers.length){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

