const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

document.body.style.zoom = "300%";

const fps = 60;

function draw() {
    setTimeout(function () {
      requestAnimationFrame(draw);
      ctx.fillStyle = "rgb(20,20,20)";
      ctx.fillRect(0, 0, 256, 240);
    }, 1000 / fps);
  }
  draw();