function setup() {
    createCanvas(displayWidth, displayHeight);
    strokeWeight(1);
    stroke(0);
}

function touchMoved() {
    line(mouseX, mouseY, pmouseX, pmouseY);
    return false;
}
