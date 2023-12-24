const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

document.body.style.zoom = "300%";

const fps = 60;


const worldTiles = new Image();
worldTiles.src = './images/tiles-overworld.png';

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

function drawMap(level) {
    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < level[i].length; j++) {
            // ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
            ctx.drawImage(worldTiles,(level[i][j] % 18) * 17 + 1,Math.floor(level[i][j] / 18) * 17 + 1, 16, 16, j * 16, i * 16, 16, 16);
        }
    }
};

function draw() {
    setTimeout(function () {
      requestAnimationFrame(draw);
      ctx.fillStyle = "rgb(20,20,20)";
      ctx.fillRect(0, 0, 256, 240);
      drawMap(map7_7);
    }, 1000 / fps);
  }
  draw();