var canvas;
var contestantCount,contestant,database,quiz,question;
var allContestants;
var gameState=0

function setup(){
  canvas = createCanvas(1510,720);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
   quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
