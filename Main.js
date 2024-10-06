//======================================================================
//                      v6 - added terminal block
//                         - cleared livenList in simulation on
//                           short circuit detection.
//                      v7 - added contactor
//                      v8 - added base block where relay and timer can
//                           be mounted
//                         - added timer, partially functional
//                      v9 - added zoom and pan
//                         - added timer and relay selectable
//                         - fixed minor bug (contactors).
//                     v10 - todo: add timer wiring
//                                (may need two check two paths)
//                         - todo: add contactor functionality
//                         - todo: make active and neutral placeable
//                         - todo: add right click context menu
//                         - todo: collision detection
//                         - todo: add rails
//                         - todo: add motor
//                     v12 - removed component.js and using individual
//                           components as edges. This helps troubleshooting
//                           and shows up in simulation
//                         - added sources A, B and C
//                         - added timer wiring compliance
//
//                unresolved errors:
//                         - [Simulator.js, line 13] Cannot read property
//                           of undefined.
//                           found at wire: vertex undefined
//                           revisit wire
//                         - patched terminateWiring() in Wiring.js
//----------------------------------------------------------------------
//                      Minimum global variables
//======================================================================

let state = "SELECT";
let message = "Main";
let done = true;
var dotGrid;

function setup() {

    let canvas = createCanvas(windowWidth, windowHeight);

    setupGrid();

    initZoom();
    initSources();
    dropDown(canvas);

}

function setupGrid() {

    dotGrid = createGraphics(windowWidth, windowHeight);

    dotGrid.clear();

    dotGrid.stroke("black");
    dotGrid.fill(255, 0, 0);
    for (let x = 0; x <= gridSizeX; x += spacing) {
        for (let y = 0; y <= gridSizeY; y += spacing) {

            dotGrid.point(x, y);

        }
    }

}

function draw() {

    //In ZoomAndPan.js
    translate(offset.x, offset.y);
    scale(scaling);


    background(220);
    image(dotGrid, 0, 0);
    drawControlBoard();

    // need to draw first
    controller();
    panWithKeys();
    pan();
}

function windowResized() { 
    resizeCanvas(windowWidth, windowHeight); 
} 
