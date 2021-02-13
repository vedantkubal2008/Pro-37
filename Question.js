class Question {

    constructor() {
        this.input1 = createInput("Enter your name here__");
        this.input2 = createInput("Write your answer number");
        this.button = createButton("SUBMIT");
      this.title = createElement('h2')
      this.question = createElement('h2');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
      this.option3 = createElement('h2');
      this.option4 = createElement('h2');
    }
    hide(){
      this.title.hide();
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
    }
  
    display(){
 
     this.title.html("My Quiz Game");
     this.title.position(700, 10);
     this.question.html("Question:- What starts and ends with letter 'E',but has only one letter in it?");
      this.question.position(400, 100);
    
      this.option1.html("1: Everyone")
      this.option1.position(400, 160);
      this.option2.html("2: Envelope")
      this.option2.position(400, 200);
      this.option3.html("3: E")
      this.option3.position(400, 240);
      this.option4.html("4: Edible")
      this.option4.position(400, 280);
      this.input1.position(400,400);
      this.input2.position(700,400);
      this.button.position(650, 500);

      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      
      });
  
    }
  }
  