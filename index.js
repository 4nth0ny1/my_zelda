const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
document.body.style.zoom = "300%";
const fps = 60;

// EVENT LISTENERS
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// DECLARATIONS
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let animationCounter = 0;
let currentAnimation = 0;
let animationSpeed = 10;
let lastButtonPressed = "w";
let linkY = 135;
let linkX = 116;


// IMAGES
const worldTiles = new Image();
worldTiles.src = './images/tiles-overworld.png';
const link = new Image();
link.src = './images/link.png'


// MAPS
const map7_7 = [
    // 1-4 HUD
    [ 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22 ],
    [ 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22 ],
    [ 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22 ],
    [ 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22 ],
    // MAP
    [ 61, 61, 61, 61, 61, 61, 61,  2,  2, 61, 61, 61, 61, 61, 61, 61 ],
    [ 61, 61, 61, 61, 22, 61, 62,  2,  2, 61, 61, 61, 61, 61, 61, 61 ],
    [ 61, 61, 61, 62,  2,  2,  2,  2,  2, 61, 61, 61, 61, 61, 61, 61 ],
    [ 61, 61, 62,  2,  2,  2,  2,  2,  2, 61, 61, 61, 61, 61, 61, 61 ],
    [ 61, 62,  2,  2,  2,  2,  2,  2,  2, 60, 61, 61, 61, 61, 61, 61 ],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2 ],
    [ 43, 44,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 43, 43 ],
    [ 61, 61,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 61, 61 ],
    [ 61, 61,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 61, 61 ],
    [ 61, 61, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 61, 61 ],
    [ 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61 ]
];



// FUNCTIONS
function drawMap(level) {
    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < level[i].length; j++) {
            // ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
            ctx.drawImage(worldTiles,(level[i][j] % 18) * 17 + 1,Math.floor(level[i][j] / 18) * 17 + 1, 16, 16, j * 16, i * 16, 16, 16);
        }
    }
};

function keyDownHandler(e){
    if (e.keyCode === 87) {
        upPressed = true;
        lastButtonPressed = "w";
    }
    if (e.keyCode === 65) {
        leftPressed = true;
        lastButtonPressed = "a"
    }
    if (e.keyCode === 83) {
        downPressed = true;
        lastButtonPressed = "s"
    }
    if (e.keyCode === 68) {
        rightPressed = true;
        lastButtonPressed = "d"
    }
}

function keyUpHandler(e){
    if (e.keyCode === 87) {
        upPressed = false;
    }
    if (e.keyCode === 65) {
        leftPressed = false;
    }
    if (e.keyCode === 83) {
        downPressed = false;
    }
    if (e.keyCode === 68) {
        rightPressed = false;
    }
}

function drawLink() {
    let speed = 2;
    animationCounter++;

    if (leftPressed) {
        linkX -= speed;
        if (currentAnimation === 0) {
            ctx.drawImage(link, 30, 0, 16, 16, linkX, linkY, 16, 16)
        } else if (currentAnimation === 1) {
            ctx.drawImage(link, 30, 30, 16, 16, linkX, linkY, 16, 16)
        }
        if (animationCounter >= 6) {
            currentAnimation++;
            animationCounter = 0;
            if (currentAnimation > 1) {
                currentAnimation = 0;
            }
        }
    } 
    else if (rightPressed) {
        linkX += speed;
        if (currentAnimation === 0) {
            ctx.drawImage(link, 91, 0, 16, 16, linkX, linkY, 16, 16)
        } else if (currentAnimation === 1) {
            ctx.drawImage(link, 91, 30, 16, 16, linkX, linkY, 16, 16)
        }
        if (animationCounter >= 6) {
            currentAnimation++;
            animationCounter = 0;
            if (currentAnimation > 1) {
                currentAnimation = 0;
            }
        }
    }
    else if (downPressed) {
        linkY += speed;
        if (currentAnimation === 0) {
            ctx.drawImage(link, 0, 0, 16, 16, linkX, linkY, 16, 16)
        } else if (currentAnimation === 1) {
            ctx.drawImage(link, 0, 30, 16, 16, linkX, linkY, 16, 16)
        }
        if (animationCounter >= 6) {
            currentAnimation++;
            animationCounter = 0;
            if (currentAnimation > 1) {
                currentAnimation = 0;
            }
        }
    }
    else if (upPressed) {
        linkY -= speed;
        if (currentAnimation === 0) {
            ctx.drawImage(link, 60, 0, 16, 16, linkX, linkY, 16, 16)
        } else if (currentAnimation === 1) {
            ctx.drawImage(link, 60, 30, 16, 16, linkX, linkY, 16, 16)
        }
        if (animationCounter >= 6) {
            currentAnimation++;
            animationCounter = 0;
            if (currentAnimation > 1) {
                currentAnimation = 0;
            }
        }
    }
    else {
        if (lastButtonPressed === "s") {
            ctx.drawImage(link, 0, 0, 16, 16, linkX, linkY, 16, 16);
        }
        if (lastButtonPressed === "w") {
            ctx.drawImage(link, 62, 0, 16, 16, linkX, linkY, 16, 16);
        }
        if (lastButtonPressed === "a") {
            ctx.drawImage(link, 30, 30, 16, 16, linkX, linkY, 16, 16)
        }
        if (lastButtonPressed === "d") {
            ctx.drawImage(link, 91, 0, 16, 16, linkX, linkY, 16, 16);
        }
    }
}


// MAIN
function draw() {
    setTimeout(function () {
      requestAnimationFrame(draw);
      ctx.fillStyle = "rgb(20,20,20)";
      ctx.fillRect(0, 0, 256, 240);
      drawMap(map7_7);
      drawLink();
    }, 1000 / fps);
  }
  draw();