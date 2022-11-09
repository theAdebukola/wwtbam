//timer for the game
let second = 120;
let stopTime;
        function timer(params){
            stopTime = setInterval(()=>{
                document.getElementById('timer').innerHTML = second;
                second--;
            if(document.getElementById('timer').innerHTML == "10"){
                document.getElementById('clock').style.background = "red";
            }
            if(document.getElementById('timer').innerHTML == '0'){
                clearInterval(stopTime);
                questions.style.display = "none";
                answers.style.display = "none";
            }
            },1000);
        }
timer();           

//QuestionBank
let questionBank = [
    {quiz:"How long is an Olympic swimming pool in meters?",option:[50,60,100,70],selectedAnswer:"",correctAnswer:50},
    {quiz:"What is cynophobia?",option:["Fear-of-dogs","Fear-of-cats","Fear-of-spiders","Fear-of-cybertheft"],selectedAnswer:"",correctAnswer:"Fear-of-dogs"},
    {quiz:"What is the name of the biggest technology company in South Korea?",option:["Kia","Samsung","Sony","Tecno"],selectedAnswer:"",correctAnswer:"Samsung"},
    {quiz:"Which animal can be seen on the Porsche logo?",option:["Puma","Horse","Rhino","Jaguar"],selectedAnswer:"",correctAnswer:"Horse"},
    {quiz:"What is the name of the largest ocean?",option:["Pacific","Indian","Atlantic","Arctic"],selectedAnswer:"",correctAnswer:"Pacific"},
    {quiz:"Which country consumes the most chocolate per capita?",option:["Switzerland","London","Nigeria","Canada"],selectedAnswer:"",correctAnswer:"Switzerland"},
    {quiz:"What was the first soft drink in space?",option:["Coca-cola","Soda","Pepsi-cola","Sprite"],selectedAnswer:"",correctAnswer:"Coca-cola"},
    {quiz:"Ruby:Red, Emerald: ........",option:["Green","Blue","Purple","Grey"],selectedAnswer:"",correctAnswer:"Green"},
    {quiz:"How many hearts does an octopus have?",option:[2, 3, 4, 1],selectedAnswer:"",correctAnswer:3},
    {quiz:"How long do elepant pregnancies last?",option:["12months","22months","20months","18months"],selectedAnswer:"",correctAnswer:"22months"},
    {quiz:"What type of animal is a flemish giant?",option:["Rabbit","Dog","Cat","Lizard"],selectedAnswer:"",correctAnswer:"Rabbit"},
    {quiz:"From what grain is the Japanese spirit Sake made?", option:["Rice","Wheat","Barley","Bean"],selectedAnswer:"",correctAnswer:"Rice"},
    {quiz:"What geometric shape is generally used for stop signs?", option:["Pentagon","Octagon","triangle","Circle"],selectedAnswer:"",correctAnswer:"Octagon"},
    {quiz:"What is the romanized Arabic word for 'moon'?", option:["Qamar","Habib","Qatar","Hajj"],selectedAnswer:"",correctAnswer:"Qamar"},
    {quiz:"What is the most consumed manufactured drink in the world?", option:["Tea","Coffee","Soda","Vodka"],selectedAnswer:"",correctAnswer:"Tea"}
];

let questions = document.getElementById('questions');
let answers = document.getElementById('answers');
let moneyEarned = document.getElementById('moneyEarned');
let popUp = document.getElementById('alert');
let clue = document.getElementById('hint');
let convoFriend = document.getElementById('convoFriend');
let index = 0;
let money = 0;

function show(params) {
    questions.innerHTML = "";
    answers.innerHTML = "";
    questions.innerHTML +=`<h3>${questionBank[index].quiz}</h3>`;
    questionBank[index].option.forEach((max)=>{
    answers.innerHTML +=`<input class="col-6 answers" type="submit" value=${max}>`;
      });
     document.querySelectorAll("input").forEach((max)=>{
        max.addEventListener('click', pick);
        if (max.value == questionBank[index].selectedAnswer) {
            max.click = true;
        }
    });
}

//Checking for the correct answer or wrong answer
function pick(params) {
    document.querySelectorAll("input").forEach((max)=>{
        max.click = false;
    })
    params.target.click = true;
    questionBank[index].selectedAnswer = params.target.value;
   
    if (questionBank[index].selectedAnswer == questionBank[index].correctAnswer) {
        clue.innerHTML = "";
        convoFriend.innerHTML    = "";
        money += 10000;
        showMoney(); 
        otherQuestion();  
    } 
    else{
        popUp.innerHTML = "This is the end of your journey in WWTBAM!";
        questions.style.display = "none";
        answers.style.display = "none";
        moneyEarned.innerHTML = "";
        clearInterval(stopTime);
     hint();
     deleteTwo();
     phoneFriend();
     convoFriend.innerHTML= "";
    final.innerHTML = `<h3>Congratulations! You have earned $ ${money}</h3>`;
    final.style.background = "orange";
    final.style.border = "2px solid white";
    final.style.borderRadius = "60px";
    final.style.width = "100%";
    final.style.marginBottom = "2%";
    final.style.textAlign = "center";
    }
}

//To ask the audience
let press = 0;
function hint(){
    
    press++;
    if(press == 1){
        clue.innerHTML = `The correct answer is ${questionBank[index].correctAnswer}`;
        clue.style.background = "green";
        clue.style.border = "2px solid white";
        clue.style.borderRadius = "60px";
        clue.style.width = "100%";
        clue.style.marginBottom = "2%";
        clue.style.textAlign = "center";
        disable = document.getElementById('disable');  
        disable.style.background = "grey";
    }
    else if(press == 2) {
      return;
    }  
}
//To move to the next question
function otherQuestion(){
    if(questionBank[index].selectedAnswer){
        if(index+1 >= questionBank[index].length){
            questions.innerHTML = "";
            answers.innerHTML = "";
            showMoney();
        }
        else{
            index++;
        }
        show(); 
    }
}

//Display money earned
function showMoney(){
   
    moneyEarned.innerHTML = `<h3>Congratulations! You have earned $ ${money}</h3>`;
    moneyEarned.style.background = "orange";
    moneyEarned.style.border = "2px solid white";
    moneyEarned.style.borderRadius = "60px";
    moneyEarned.style.width = "100%";
    moneyEarned.style.marginBottom = "2%";
    moneyEarned.style.textAlign = "center";
}
show();

//walk away
function walkAway(){
    (confirm('Are you sure you want to walk away?'));
        moneyEarned.innerHTML += "";
        moneyEarned.innerHTML += `This is the end of your journey on WWTBAM, Congratulations once more You are $ ${money} richer`;
        questions.style.display = "none";
        answers.style.display = "none";
        clearInterval(stopTime);
        money; 
}

//50:50 option
let pres = 0;
const deleteTwo = num =>{
        
    pres++;
    if(pres == 1){
         if(answers.innerHTML= questionBank[index].option.splice(2,2)){
            answers.innerHTML ="";
            questionBank[index].option.forEach((max)=>{
            answers.innerHTML +=`<input class="col-6 answers" type="submit" value=${max}>`;
            });
            document.querySelectorAll("input").forEach((max)=>{
             max.addEventListener('click', pick);
                if (max.value == questionBank[index].selectedAnswer) {
                        max.click = true;
                    }
                });
            }
            justOnce = document.getElementById('justOnce');
            justOnce.style.background = "grey";
         }
         else if(pres == 2){
            return;
         }
};

//call a friend
let pre = 0;
 function phoneFriend(){
    pre++;
    if(pre == 1){
        ri = Math.floor(Math.random() * questionBank[index].option.length);
        convoFriend.innerHTML +=`Friend: I'm guessing the answer is ${questionBank[index].option[ri]}`;
        convoFriend.style.background = "green";
        convoFriend.style.border = "2px solid white";
        convoFriend.style.borderRadius = "60px";
        convoFriend.style.width = "100%";
        convoFriend.style.marginBottom = "2%";
        convoFriend.style.textAlign = "center";
        phone = document.getElementById('phone');
        phone.style.background = "grey";
    }
    else if(pre == 2){
        return;
    }
 }     