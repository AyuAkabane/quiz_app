｀const quiz = [
{
  questions: '初代星のカービィのラスボスは誰？',
  answer: ['メタナイト',
  'デデデ大王',
  'マルク',
  'ダークゼロ'],
  correct: 'デデデ大王'
},{
  questions: '次のうち飲み込んでも能力をコピーできない敵は？',
  answer: ['スパーキー',
  'ワドルドゥ',
  'ビックワドルディ',
  'メタルン'],
  correct: 'ビックワドルディ'

},{
  questions: 'カービィの嫌いな食べ物は何？',
  answer: ['ちょうちょ',
  '毛虫',
  'ドロッチェ団',
  'ラスボス'],
  correct: '毛虫'

}｀
];

const quizlength = quiz.length;
let quizIndex = 0;

let score = 0;




//const buttonLength = $button.length;


//正解
//const correct = 'ニンテンドーDS';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () =>{
  //問題文をHTMLに反映させる
  document.getElementById('js-question').textContent = quiz[quizIndex].questions;

  //while文で使用する変数
  let buttonIndex = 0;
  let buttonLength = $button.length;

  while(buttonIndex <  buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
  buttonIndex++;
  }

}

setupQuiz();




//選択肢をHTMLに反映させる





const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;

  }else{
    window.alert('不正解');
    }

    quizIndex++;
    if(quizIndex < quizlength) {
      //問題数がまだあればこちらを実行
      setupQuiz();


    }else{
      //問題数がもうなければこちらを実行
      window.alert('終了!! あなたの正解数は'+ score + '/' + quizlength + 'です!');

    }

}




//ボタンをクリックしたら正誤判定
let handlerIndex = 0;

while(handlerIndex<buttonLength){
  $button[handlerIndex].addEventListener('click',(e) =>{
    clickHandler(e);
  });
    handlerIndex++;

}




