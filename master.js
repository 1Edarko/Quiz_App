//Get the questions with JSON : 

// Set index : 
let Index = 0;
// set points : 
let points = 0;
function getQuestions(){

let Request = new XMLHttpRequest();

Request.onreadystatechange =function(){

    if(this.readyState === 4 && this.status === 200){
       
       
        let QuestionsObj = JSON.parse(this.responseText);


        addQuestions(QuestionsObj[Index]);

        //Next question :

    document.querySelector('.Next').onclick =function(){
        CheckAnswer(QuestionsObj[Index]);

        if(Index == (QuestionsObj.length - 1)){
            let time = document.querySelector(".quiz-timer").innerHTML;
            localStorage.setItem('timer' ,time);

            location.href ='result.html';
        }

    Index++;
    

    addQuestions(QuestionsObj[Index]);

    
    

  
 

}
    
    }
};
Request.open("GET", "questions.json",true);

Request.send();




}

getQuestions();

// // start the game :
let startButt = document.querySelector('.start')
let Name = document.querySelector('form input');
function start(e){


    e.preventDefault();
    localStorage.setItem('Name',Name.value);
    location.href ='quiz.html';
    
};
//Add questions :

function addQuestions(myobject){
let Quizbody = document.querySelector('.quiz-body');
    Quizbody.innerHTML = `
    <h1>${myobject.title}</h1>
    <div class="questions">
        <li class="question active">${myobject.question[0]}</li>
        <li class="question">${myobject.question[1]}</li>
        <li class="question">${myobject.question[2]}</li>
        <li class="question">${myobject.question[3]}</li>
    </div>
    
    `;
    ToggleActive();


}



function SetName(Name){
    let quizuser = document.querySelector('.quiz-user');
    quizuser.innerHTML = `Welcome ${Name}`;
}
SetName(localStorage.getItem('Name'));

// active class onclick :
function ToggleActive(){
    let questionsList = document.querySelectorAll('.questions li');

questionsList.forEach(li=>{

    li.addEventListener('click' , (e)=>{
  questionsList.forEach((q)=>{
    q.classList.remove('active');

  });
  li.classList.add('active');

    });
    

});

} 
//check Answer :
function CheckAnswer(myobject){
    
       
    let rightAnswer = document.querySelector('.questions li.active').innerHTML;
    
    if(rightAnswer === myobject.answer){
        points +=100;
        localStorage.setItem('Points',points);
        
        
    }
    
}

// timer count up : 
setInterval(countTimer, 1000);

var totalSeconds = 0;
function countTimer() {
           ++totalSeconds;
           var hour = Math.floor(totalSeconds /3600);
           var minute = Math.floor((totalSeconds - hour*3600)/60);
           var seconds = totalSeconds - (hour*3600 + minute*60);
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
           document.querySelector(".quiz-timer").innerHTML =  minute + ":" + seconds;
        }




