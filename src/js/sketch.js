let x = 1,
    y = 1,
    z = 1;

let sigma = 10,
    rho = 28,
    beta = 8 / 3;

let points = [];

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    colorMode(HSB, 1);
}


function draw() {
    background(0);

    // Allow camera movement with mouse
    orbitControl();

    // dt is the change in time
    let dt = 0.015;
    let dx = (sigma * (y - x)) * dt;
    let dy = (x * (rho - z) - y) * dt;
    let dz = (x * y - beta * z) * dt;

    // x, y, z are the coordinates of the point
    // Update the coordinates
    x += dx;
    y += dy;
    z += dz;

    // console.log(x, y, z);
    // Add the point to the array
    points.push(createVector(x, y, z));


    if (point.length > 2000) {
        points.shift();
    }

    // Draw the points
    scale(5);
    strokeWeight(2);
    background(0);
    noFill();

    let hu = 0;

    for (let i = 0; i < points.length - 1; i++) {
        stroke(hu, 1, 1);
        beginShape();
        vertex(points[i].x, points[i].y, points[i].z);
        vertex(points[i + 1].x, points[i + 1].y, points[i + 1].z);
        endShape();

        hu += 0.001;

        if (hu > 1) {
            hu = 0;
        }

    }

}