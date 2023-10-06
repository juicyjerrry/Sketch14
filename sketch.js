let xPos = 100; // Initial x-position of the sheep

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("aliceblue");

  // Translate the canvas to move the sheep
  translate(xPos, 0);

  // Draw the sheep
  drawSheep(0, 300, 60);

  // Update the x-position for animation
  xPos += 2; // Adjust the speed of movement
  if (xPos > width + 60) {
    // Reset sheep's position when it goes off-screen
    xPos = -60;
  }
}

function drawSheep(x, y, size) {
  // Body
  fill(255);
  ellipse(x, y, size, size * 0.6);

  // Head
  fill(255);
  ellipse(x + size * 0.6, y - size * 0.4, size * 0.4, size * 0.4);

  // Eyes
  fill(0);
  ellipse(x + size * 0.7, y - size * 0.4, size * 0.1, size * 0.1);
  ellipse(x + size * 0.8, y - size * 0.4, size * 0.1, size * 0.1);

  // Nose
  fill(128);
  ellipse(x + size * 0.75, y - size * 0.35, size * 0.05, size * 0.05);

  // Legs (relative to the translated position)
  fill(255);
  rect(x - size * 0.3, y + size * 0.2, size * 0.2, size * 0.4);
  rect(x + size * 0.1, y + size * 0.2, size * 0.2, size * 0.4);

  // Tail
  fill(255);
  triangle(x - size * 0.3, y - size * 0.2, x - size * 0.3, y - size * 0.4, x - size * 0.5, y - size * 0.3);
}
