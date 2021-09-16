var s1;
var s2;
function setup() {
  createCanvas(400,400);

  s1=new Student("pranoti",12,7);
  s2 = new Student("Rhea",12,7);
}

function draw() 
{
  background(30);
  s1.display();
  s2.display();
}