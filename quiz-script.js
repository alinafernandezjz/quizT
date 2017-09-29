var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var titleQues = document.getElementById('titulo');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
//var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
var messages = ["Great job!", "That's just okay", "You really need to do better"];

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	titleQues.textContent = "Pregunta " + (questionIndex + 1) + ":";
	questionEl.textContent = q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	//opt4.textContent = q.option4;
};
function resultados(){
	container.style.display = 'none';
	resultCont.style.display = '';
	resultCont.textContent = 'Tu Puntuación: ' + score;
	if(score<=10){
		console.log("hola");
		document.getElementById("picture").src = pictures[0];
		document.getElementById("message").innerHTML = messages[0];
	}else if(score<=30){
		document.getElementById("picture").src = pictures[1];
		document.getElementById("message").innerHTML = messages[1];
	}else{
		document.getElementById("picture").src = pictures[2];
		document.getElementById("message").innerHTML = messages[2];
	}

	return;
}

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('¡Selecciona una respuesta por favor!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
		alert('¡Bien hecho!');
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Terminar';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Tu Puntuación: ' + score;
		if(score<=10){
			console.log("hola");
			document.getElementById("picture").src = pictures[0];
			document.getElementById("message").innerHTML = messages[0];
		}else if(score<=30){
			document.getElementById("picture").src = pictures[1];
			document.getElementById("message").innerHTML = messages[1];
		}else{
			document.getElementById("picture").src = pictures[2];
			document.getElementById("message").innerHTML = messages[2];
		}

		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
