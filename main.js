var position = 0, test, test_status, question, userChoice,choices, chA,chB,chC,chD;
var message='';
var correct = 0;

function _(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test = _('test');
    if(position>=questions.length){
        test.innerHTML = "<h2>You got "+ correct + " of "+ questions.length + " questions correct</h2>";
        _('test_status').innerHTML='Test completed';
        _('question_response').innerHTML=message;
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

    test.innerHTML ="<h3 id='question'>"+ question +"</h3>"
    test.innerHTML += "<label class='container'>" + chA +"<input type='radio' name='choices' value='A'>" 
        + "<span class='checkmark'></span></label>";
    test.innerHTML += "<label class='container'>" + chB +"<input type='radio' name='choices' value='B'>" 
        + "<span class='checkmark'></span></label>";
    test.innerHTML += "<label class='container'>" + chC +"<input type='radio' name='choices' value='C'>" 
        + "<span class='checkmark'></span></label>";
    test.innerHTML += "<label class='container'>" + chD +"<input type='radio' name='choices' value='D'>" 
        + "<span class='checkmark'></span></label><br/>";
   /*  test.innerHTML += "<input type='radio' name='choices' value='B'>" + chB + "<br/>";
    test.innerHTML += "<input type='radio' name='choices' value='C'>" + chC + "<br/>";
    test.innerHTML += "<input type='radio' name='choices' value='D'>" + chD + "<br/>"; */
    test.innerHTML += "<button onclick='checkAnswer()'><span>Next</span></button>";
}

function checkAnswer(){
    //look through group of /choices/ to see which choice is selected by a user
    choices = document.getElementsByName('choices');//the result of this is an array of input 
    for(var i = 0; i < choices.length;i++){
        if(choices[i].checked){
            userChoice=choices[i].value;
            message += '<p>'+ userChoice + '</p>';
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