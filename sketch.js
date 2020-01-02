function setup() {
    createCanvas(displayWidth, displayHeight);
    strokeWeight(1);
    stroke(0);
    textSize(12);
    text('Draw here', width/2, 100);
    fill(0, 102, 153);
}

function touchMoved() {
    line(mouseX, mouseY, pmouseX, pmouseY);
    return false;
}
