class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question();
        question.display();
      }
    }
    play(){
    
        background("yellow")
      textSize(30);
      fill("black")
      text("Quiz Results", 700, 40)
      Contestant.getContestantInfo();
  
      if(allContestants !== undefined){
        var display_position = 420;
        textSize(25);
       text("*NOTE: Contestant who answered correct are highlighted in green colour!",400,400);
        for(var plr in allContestants){
          var correctAns="2";
          if (correctAns === allContestants[plr].answer)
            fill("Green")
          else
            fill("Red");
  
            display_position+=30;
            textSize(20);
            text(allContestants[plr].name + ": " + allContestants[plr].answer, 500,display_position)
        }
        contestant.answer =answer
        contestant.update();
    
      }
  
     
    }
  }
  
  