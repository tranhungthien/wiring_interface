const spacing = 10;
const gridSizeX = 1500;
const gridSizeY = 1500;

function drawGrid() {

    background(220);
    stroke("black");

    var ctx = canvas.getContext("2d");

    for (let x = 0; x <= gridSizeX; x += spacing) {
      for (let y = 0; y <= gridSizeY; y += spacing) {

            point(x, y);

        }
    }
}
