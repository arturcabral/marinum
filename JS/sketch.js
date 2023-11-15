function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  if (sensor1 != null && sensor2 != null) {
    text("Sensor 1= "+ sensor1,100,100);    
    text("Sensor 2= "+ sensor2,100,200);    

  }
}