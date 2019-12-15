/*
(20, 30, 66); //tom de azul
(133, 133, 135); //tom de cinza
(41, 36, 40); //quase preto

usei suavização, ou seja, o objeto anterior fica mais letargico ao mouse.
combinei com translate. NAO GOSTEI AINDA
*/
var x = 30;
var y = 30;
var suavizado = 0.08;

function setup() {
	createCanvas(600, 400);
	//background(41, 36, 40);
	background(255);
}

function draw() {
	var objetivoX = mouseX;
	var objetivoY = mouseY;

	y += (objetivoY - y) * suavizado;
	x += (objetivoX - x) * suavizado;
//OLHO DIREITO
	stroke(20, 30, 66);
	fill(133, 133, 135);
	ellipse(x, y, 20, 20);
	fill(218, 189, 56);
	ellipse(x, y, 20, 5);
	fill(185, 10, 37);
	ellipse(x, y, 5, 5);
//OLHO ESQUERDO	
	stroke(20, 30, 66);
	fill(133, 133, 135);
	ellipse(x - 35, y, 20, 20);
	fill(218, 189, 56);
	ellipse(x - 35, y, 20, 15);



	fill(185, 10, 37);
	ellipse(x - 35, y, 5, 5);
	

var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
	strokeWeight(weight);
	translate(mouseX, mouseY);
	//ellipse(mouseX, mouseY, pmouseX, pmouseY);
	translate(5, 5);
	print(objetivoX + " : " + x);

}
