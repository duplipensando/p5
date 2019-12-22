/*
As duas ellipses estão com transparência, usando dist() a velocidade é calculada.
cores: purple, vermelho, azul
strokeWeight() define a largura do traçado usado para linhas, pontos e a borda em torno das formas
dist(x1, y1, x2, y2) calcula a distância entre dois pontos, em duas ou três dimensões.
*/
function setup(){
	createCanvas(600, 400);
	background(255);
}
function draw(){
	fill(128,0,128,50); //purple com transparência
	stroke(255, 19, 14, 50); //tom de vermelho com transparência
	var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
	strokeWeight(weight); 
	translate(mouseX, mouseY);
	ellipse(mouseX, mouseY, pmouseX, pmouseY);
	translate(10, 10);
	fill(23, 65, 232, 50); //tom de azul com transparência
	ellipse(mouseX, mouseY, pmouseX, pmouseY);
}