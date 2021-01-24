<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
		<h1>Rock Paper Scissors</h1>
	</header>
	<div class="score-board">
		<div id="user-label" class="badge">user</div>
		<div id="computer-label" class="badge">comp</div>
		<span id="user-score">0</span>:<span id="computer-score">0</span>
	</div>
	<div class="result">
		<p>Paper covers rock. You win!</p>
	</div>
	<div class="choices">
		<div class="choice" id="r">
			<img src="rock2.png" alt="">
		</div>
		<div class="choice" id="p">
			<img src="paper2.png" alt="">
		</div>
		<div class="choice" id="s">
			<img src="scissor2.png" alt="">
		</div>
	</div>
	<p id="action-message">Make your move</p>
	<script src="app.js" charset="utf-8"></script>
</body>
</html>