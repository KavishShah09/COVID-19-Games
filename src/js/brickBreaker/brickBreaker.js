var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 7;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;

const ball = new Image();
ball.src = '../public/images/brickBreaker/ball.png';

const paddle = new Image();
paddle.src = '../public/images/brickBreaker/paddle.png';

const brick = new Image();
brick.src = '../public/images/brickBreaker/brick.png';

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
	bricks[c] = [];
	for (var r = 0; r < brickRowCount; r++) {
		bricks[c][r] = { x: 0, y: 0, status: 1 };
	}
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

function keyDownHandler(e) {
	if (e.key == 'Right' || e.key == 'ArrowRight') {
		rightPressed = true;
	} else if (e.key == 'Left' || e.key == 'ArrowLeft') {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if (e.key == 'Right' || e.key == 'ArrowRight') {
		rightPressed = false;
	} else if (e.key == 'Left' || e.key == 'ArrowLeft') {
		leftPressed = false;
	}
}

function mouseMoveHandler(e) {
	var relativeX = e.clientX - canvas.offsetLeft;
	if (relativeX > 0 && relativeX < canvas.width) {
		paddleX = relativeX - paddleWidth / 2;
	}
}
function collisionDetection() {
	for (var c = 0; c < brickColumnCount; c++) {
		for (var r = 0; r < brickRowCount; r++) {
			var b = bricks[c][r];
			if (b.status == 1) {
				if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
					dy = -dy;
					b.status = 0;
					score++;
					if (score == brickRowCount * brickColumnCount) {
						alert('YOU WIN, CONGRATS!');
						document.location.reload();
					}
				}
			}
		}
	}
}

function drawBall() {
	ctx.drawImage(ball, x, y);
}
function drawPaddle() {
	ctx.drawImage(paddle, paddleX, canvas.height - paddleHeight);
}
function drawBricks() {
	for (var c = 0; c < brickColumnCount; c++) {
		for (var r = 0; r < brickRowCount; r++) {
			if (bricks[c][r].status == 1) {
				var brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
				var brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.drawImage(brick, brickX, brickY);
			}
		}
	}
}
function drawScore() {
	ctx.font = '18px Serif';
	ctx.fillStyle = '#a09e9f';
	ctx.fillText('Score: ' + score, 8, 20);
}
function drawLives() {
	ctx.font = '18px Serif';
	ctx.fillStyle = '#a09e9f';
	ctx.fillText('Lives: ' + lives, canvas.width - 65, 20);
}

function draw() {
	canvas.style.opacity = 1;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();

	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}
	if (y + dy < ballRadius) {
		dy = -dy;
	} else if (y + dy > canvas.height - ballRadius*2-5) {
		if (x > paddleX && x < paddleX + paddleWidth) {
			dy = -dy;
		} else {
			lives--;
			if (!lives) {
				alert('GAME OVER');
				document.location.reload();
			} else {
				x = canvas.width / 2;
				y = canvas.height - 30;
				dx = 3;
				dy = -3;
				paddleX = (canvas.width - paddleWidth) / 2;
			}
		}
	}

	if (rightPressed && paddleX < canvas.width - paddleWidth) {
		paddleX += 7;
	} else if (leftPressed && paddleX > 0) {
		paddleX -= 7;
	}

	x += dx;
	y += dy;
	requestAnimationFrame(draw);
}

document.addEventListener('click', draw, false);
