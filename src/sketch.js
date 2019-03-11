export default function sketch(p) {
  let capture;

  function setup() {
    p.createCanvas(390, 240);
    capture = p.createCapture(p.VIDEO);
    capture.size(320, 240);
    //capture.hide();
  }

  function draw() {
    p.background(255);
    p.image(capture, 0, 0, 320, 240);
    p.filter("INVERT");
  }
}
