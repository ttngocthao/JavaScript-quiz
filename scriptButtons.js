var position = 0, test, test_status, question, userChoice,choices, chA,chB,chC,chD;
var printAnswer='';
var correct = 0;

function _(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test = _('test');
    if(position>=questions.length){
        test.innerHTML = "<h2>You got "+ correct + " of "+ questions.length + " questions correct</h2>";
        _('test_status').innerHTML='Test completed';
        _('question_response').innerHTML= printAnswer;
        position=0;
        correct=0;
        return false //stop renderQuestion function continuing after this line
    }
    //show what question u are on
    _('test_status').innerHTML='Question ' + (position+1)+" of "+ questions.length;
    //
    question=questions[position][0];
    chA=questions[position][1];
    chB=questions[position][2];
    chC=questions[position][3];
    chD=questions[position][4];

    test.innerHTML ="<h2>"+ question +"</h2>"
    test.innerHTML += "<button class='option-btn' name='choices' value='A' onclick='checkAnswer()'>" + chA + "</button>";
    test.innerHTML += "<button class='option-btn' name='choices' value='B' onclick='checkAnswer()'>" + chB + "</button>";
    test.innerHTML += "<button class='option-btn' name='choices' value='C' onclick='checkAnswer()'>" + chC + "</button>";
    test.innerHTML += "<button class='option-btn' name='choices' value='D' onclick='checkAnswer()'>" + chD + "</button>";
    //test.innerHTML += "<button onclick='goToPrevQu()'>Go previous</button>"
    //test.innerHTML += "<button onclick='goToNextQu()'>Go next</button>";
}
//function goToNextQu(){}

function checkAnswer(){
    //look through group of /choices/ to see which choice is selected by a user
    choices = document.getElementsByName('choices');//the result of this is an array of input 
    for(var i = 0; i < choices.length;i++){
        if(choices[i].checked){
            userChoice=choices[i].value;
            printAnswer += '<p>' + userChoice + '</p>';
        }        
    }
    
    if(userChoice == questions[position][5]){
        correct ++;
        _('question_response').innerHTML='<h3> Correct Answer</h3>';
    }else{
       _('question_response').innerHTML='<h3>Sorry</h3>';
        
        
    }
    position=position +1;
    renderQuestion();
}

//load the question
window.addEventListener("load",renderQuestion,false);