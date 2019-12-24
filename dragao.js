/*
translate usa a posição do cursor do mouse para movimentar os retângulos.
O QUE ESTAVA SALVO POR ÚLTIMO NO SKETCH
*/
var angulo = 0.0;
function setup() {
	createCanvas(800, 600);
	background(0);
	//fill(232, 203, 148);
}
function draw() {
	
	translate(mouseX, mouseY);
	rotate(angulo);
	fill(115, 232, 199); //ciano

	rect(-55, -50, 30, 30);
	stroke(208, 255, 117); //tom de amarelo
	angulo += 0.1;

	fill(255, 165, 162); //rosa
	translate(35, 10); //desloca o retângulo menor para direita
	rect(0, 0, 15, 15);
	
}