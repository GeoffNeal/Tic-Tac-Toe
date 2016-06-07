//Global Variables
var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;
var player1Display = document.getElementById("player1");
var player2Display = document.getElementById("player2");
// var canvas = document.getElementsByTagName("canvas")[0];

// player1Display.onclick = function() {
// 	console.log(window.getComputedStyle(canvas).getPropertyValue("width"));
// 	canvas.style.transform = "rotate(-5deg)";
// }

// window.requestAnimFrame = (function(callback) {
// 	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
// 	function(callback) {
// 	  window.setTimeout(callback, 1000 / 60);
// 	};
// })();

/* ===========jQuery for resizing canvas ========== */

// $(document).ready(function() {
	//Get the canvas & context


// });

/* ===========jQuery end ========== */

window.onload = function() {
	painted = new Array();
	content = new Array();
	winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

	for(var i = 0; i <= 8; i++){
	    painted[i] = false;
	    content[i]='';
	    // var box = document.getElementById("box" + i);
	    // var size = window.innerHeight;
	    // box.innerHeight = size / 16;
	    // box.innerWidth = size / 16;
    }

    // var canvi = document.getElementsByTagName("canvas");
    // console.log(canvi[0]);

    // for(var i = 0; i < canvi.length; i++) {
    // 	canvi[i].style.transform = "rotate(360deg)";
    // }

    // document.getElementById("player2").style.display = "none";
    // document.getElementById("player1").style.display = "block";

}

//Game methods
function canvasClicked(boxNumber) {
	theCanvas = "box" + boxNumber;
	c = document.getElementById(theCanvas);
	cxt = c.getContext("2d");

	var width = parseFloat(window.getComputedStyle(c).getPropertyValue("width"));
	var height = parseFloat(window.getComputedStyle(c).getPropertyValue("height"));

	c.setAttribute("height", height);
	c.setAttribute("width", width);

	console.log(width);
	console.log(height);

	if(painted[boxNumber - 1] === false) {
		if(turn % 2 === 0) {

			player1Display.style.transform = "scale(1)";
			player2Display.style.transform = "scale(1.5)";

			player1Display.style.color = "#f9f9f9";
			player2Display.style.color = "#abe1fc";


			/**** Animation ****/

			// var points = [],
			// 	currentPoint = 1,
			// 	nextTime = (new Date()).getTime() + 500,
			// 	pace = 10;

			// // make some points
			// for (var i = 10; i < 50; i++) {
			//     points.push({
			//         x: i * (c.width/75),
			//         y: i *  (c.height/75)
			//     });
			// }

			// function draw() {
			// 	if(new Date().getTime() > nextTime) {
			// 		nextTime = new Date().getTime() + pace;

			// 		currentPoint++;
			// 		if(currentPoint > points.length) {
			// 			currentPoint = 0;
			// 		}
			// 	}

			// 	cxt.beginPath();
			// 	cxt.moveTo(points[0].x, points[0].y);
			// 	cxt.lineWidth = 10;
			// 	cxt.strokeStyle = "#961818";
			// 	for(var point = 1, pointLength = currentPoint; point < pointLength; point++) {
			// 		cxt.lineTo(points[point].x, points[point].y);
			// 	}
			// 	cxt.stroke();

			// 	requestAnimFrame(draw);

			// }

			// draw();

			/********/
			console.log(theCanvas + " " + width + " " + height);
			cxt.beginPath();
			cxt.moveTo(10, 10);
			cxt.lineTo(width - 10, height - 10);
			cxt.moveTo(width - 10, 10);
			cxt.lineTo(10, height - 10);
			cxt.lineWidth = 10;
			cxt.strokeStyle = "#961818";
			cxt.stroke();
			cxt.closePath();
			content[boxNumber - 1] = "X";
		} else {

			player1Display.style.transform = "scale(1.5)";
			player2Display.style.transform = "scale(1)";

			player1Display.style.color = "#abe1fc";
			player2Display.style.color = "#f9f9f9";

			cxt.beginPath();
			cxt.ellipse(width / 2, height / 2, (width / 2) - 10, (height / 2) - 10, 0, Math.PI*2, Math.PI*2/180, true);
			cxt.lineWidth = 10;
			cxt.strokeStyle = "#3d6acc";
			cxt.stroke();
			cxt.closePath();
			content[boxNumber - 1] = "O";
		}

		/******/

		// function animate(c, cxt, startTime) {
		// 	//Update
		// 	var time = (new Date()).getTime() - startTime;

		// 	var linearSpeed = 100;
		// 	//Pixels per second
		// 	var newX = linearSpeed * time;

		// 	if(newX < c.width / 2) {
		// 		g
		// 	}
		// }

		/******/

		turn++;
		painted[boxNumber - 1] = true;
		squaresFilled++;
		checkForWinner(content[boxNumber - 1]);

		if(squaresFilled === 9) {
			alert("GAME OVER");
			location.reload(true);
		}
	} else {
		alert("BOX ALREADY FULL");
	}
}

function checkForWinner(symbol) {
	for(var i = 0; i < winningCombinations.length; i++) {
		if(content[winningCombinations[i][0]] === symbol && content[winningCombinations[i][1]] === symbol && content[winningCombinations[i][2]] === symbol) {
			alert(symbol + " WON!");
			playAgain();
		}
	}
}

function playAgain() {
	y=confirm("PLAY AGAIN?");
	if (y === true) {
		location.reload(true);
	} else {
		alert("GOODBYE!");
	}
}



