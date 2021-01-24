var   computerscore = 0;
var   userscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function win(userchoice,computerchoice) {
	const smalluser = "user".fontsize(3).sub();
	const smallcomp = "comp".fontsize(3).sub();
	const userchoice_div = document.getElementById(userchoice).classList;
	userscore++;
	userscore_span.innerHTML =userscore;
	result_p.innerHTML = `${convert(userchoice)}${smalluser} beats ${convert(computerchoice)}${smallcomp} => You win!`;
	userchoice_div.add('green-glow');
    setTimeout(() => userchoice_div.remove('green-glow'), 300);//instance of the function...
}


function lose(userchoice,computerchoice) {
	const smalluser = "user".fontsize(3).sub();
	const smallcomp = "comp".fontsize(3).sub();
	const userchoice_div = document.getElementById(userchoice).classList;
    computerscore++;
	computerscore_span.innerHTML =computerscore;
	result_p.innerHTML = `${convert(userchoice)}${smalluser} loses ${convert(computerchoice)}${smallcomp} => You lost! `;
	userchoice_div.add('red-glow');
    setTimeout(() => userchoice_div.remove('red-glow'), 300);
}

function draw(userchoice,computerchoice) {
	const smalluser = "user".fontsize(3).sub();
	const smallcomp = "comp".fontsize(3).sub();
	const userchoice_div = document.getElementById(userchoice).classList;
	result_p.innerHTML = `${convert(userchoice)}${smalluser} equals ${convert(computerchoice)}${smallcomp} => DRAWWWW!`;
	userchoice_div.add('gray-glow');
    setTimeout(function(){ userchoice_div.remove('gray-glow') }, 300);
}

function convert(letter) {
	if(letter==="r") return "Rock";
	if(letter==="p") return "Paper";
	if(letter==="s") return "Scissor";
}

function getcomputer() {
const choices = ['r','p','s'];
const randomnumber = Math.floor(Math.random() * 3);
return choices[randomnumber];
}

function game(userchoice) {
  const computerchoice = getcomputer();
  switch(userchoice + computerchoice) {
  	case "pr":
  	case "sp":
  	case "rs":
  	win(userchoice,computerchoice);
  	break;
  	case "rp":
  	case "ps":
  	case "sr":
  	lose(userchoice,computerchoice);
  	break;
  	case "pp":
  	case "rr":
  	case "ss":
  	draw(userchoice,computerchoice);
  	break;
  }
}

function main() {
	rock_div.addEventListener('click',() => game("r"));
	paper_div.addEventListener('click',() => game("p"));
	scissor_div.addEventListener('click',function() {game("s")});//instance of =>..
}

main();