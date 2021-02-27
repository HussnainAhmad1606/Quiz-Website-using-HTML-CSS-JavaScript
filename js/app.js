const quizDB = [
	{
		question: "1. The Poem Ruba'iyat is written by:",
		option1: "Allama Muhammad Iqbal",
		option2: "Faiz Ahmad Faiz",
		option3: "Ashfaq Ahmad",
		option4: "Sir Syed Ahmad Khan",
		answer: "ans1" 
	},
	{
		question: "2. The Poem God's Attributes is translated by:",
		option1: "Dr. Scott",
		option2: "Momaday Farady",
		option3: "Prof. John",
		option4: "Dr. Nicholson",
		answer: "ans4" 
	},
	{
		question: "3. Majority of Muslims in Pakistan _____ Muslims.",
		option1: "is",
		option2: "are",
		option3: "was",
		option4: "were",
		answer: "ans2" 
	},
	{
		question: "4. I met a traveller coming from an antique _____.",
		option1: "sand",
		option2: "band",
		option3: "hand",
		option4: "land",
		answer: "ans4" 
	},
	{
		question: "5. Who is Roger Splending?",
		option1: "a general",
		option2: "a newscaster",
		option3: "a solider",
		option4: "a mechanic",
		answer: "ans1" 
	},
	{
		question: "6. Where did the spaceshop land?",
		option1: "on the roof of a building",
		option2: "in the fields",
		option3: "on a hill",
		option4: "in the lawn of Mrs. Splending",
		answer: "ans4" 
	},
	{
		question: "7. Who was drinking water?",
		option1: "cat",
		option2: "a tree",
		option3: "rain",
		option4: "man",
		answer: "ans3" 
	},
	{
		question: "8. Good students _____ their time.",
		option1: "not waste",
		option2: "do not waste",
		option3: "are not waste",
		option4: "does not waste",
		answer: "ans2" 
	},
	{
		question: "9. To have no _____ is worse than poverty.",
		option1: "money",
		option2: "passion",
		option3: "faith",
		option4: "love",
		answer: "ans3" 
	},
	{
		question: "10. I became sharp, _____ in my broken images.",
		option1: "mistrusting",
		option2: "creating",
		option3: "building",
		option4: "seeing",
		answer: "ans1" 
	}
]
let score = 0;
let questionStatement = document.querySelector("#questionStatement")
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let btn = document.querySelector("#submitBtn")


const checkAnswer = () => {
	let answer;
	let answers = document.querySelectorAll(".answers")
	answers.forEach(element => {
		if (element.checked) {
			answer = element.id;
		}
	})
	return answer

}

let questionCount = 0;
const loadQuestion = () => {
	questionStatement.innerText = quizDB[questionCount].question;
	option1.innerText = quizDB[questionCount].option1;
	option2.innerText = quizDB[questionCount].option2;
	option3.innerText = quizDB[questionCount].option3;
	option4.innerText = quizDB[questionCount].option4;

}

loadQuestion();

btn.addEventListener("click", () => {
	checkedAnswer = checkAnswer();
	console.log(checkedAnswer)

	if (checkedAnswer === quizDB[questionCount].answer) {
		console.log("Correct Answer");
		score++;
	}
	questionCount++;
	if (questionCount < quizDB.length) {
		loadQuestion()
	}
	else {
		let resultDiv = document.getElementById("result")
		submitBtn.style.display = 'none';
		result.innerHTML = `<h1>Your Score is ${score}/${quizDB.length}<h1>
<input type="button" value="Play Again" class="btn-again" onclick="location.reload()">
		`
	}
})


const timer = () => {
	let seconds = 0;
	let minutes = 10;
		let secondDiv = document.getElementById("seconds");
	let minuteDiv = document.getElementById("minutes");



	setInterval(() => {
		if (minutes == 0 && seconds == 0) {
		console.log("Game Over!");
		document.getElementById('heading').innerText = "Time Up!";
		let resultDiv = document.getElementById("result")
		submitBtn.style.display = 'none';
		result.innerHTML = `<h1>Your Score is ${score}/${quizDB.length}<h1>
<input type="button" value="Play Again" class="btn-again" onclick="location.reload()">
		`
		let timerDiv = document.getElementById('timer');
		timerDiv.style.display = 'none'
		return false;
	}
		if (minutes < 10) {
		
		}
		if (seconds == 0) {
		seconds = 59;
		minutes--;
	}
	seconds--;
	secondDiv.innerText = seconds;
	minuteDiv.innerText = minutes;
   

}, 1000);

}

timer();