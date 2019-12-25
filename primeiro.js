
function setup(){
  createCanvas(600,400);
  stroke(255,127,80);
  strokeWeight(2); //colocar aqui por organização já que será padrão
}

function draw(){

  background(64,224,208); //Turquoise
  //PRIMEIRO
  fill(72,209,204); //MediumTurquoise
  noStroke();
  rect(25, 25, 550, 350);
  //SEGUNDO
  fill(32,178,170); //LightSeaGreen
  rect(45, 45, 351, 116);
  //TERCEIRO
  fill(0,139,139); //DarkCyan
  rect(113, 55, 206, 300);
  //QUARTO
  fill(102,205,170); //MediumAquamarine
  rect(55, 185, 206, 116);
  //QUINTO
  fill(127,255,212); //aquamarine
  rect(171, 215, 80, 65);
  //SEXTO
  fill(102,205,170); //MediumAquamarine
  rect(360, 78, 30, 297);
  //TESTE TRANSPARENCIA
  fill(255,255,0,20); //amarelo com alpha
  rect(0, 0, 600, 400);
}

/*
 background(204);
  strokeJoin(ROUND); 
  rect(180, 60, 220, 40);
  strokeCap(SQUARE);
  
  ellipse(278, -100, 400, 400);
  
  arc(90, 60, 80, 80, 0, HALF_PI); //USO RADIANO, SE QUISER USAR GRAUS radians(grau). se quiser usar em todo angleMode(DEGREES) NO SETUP


 ||BIBLIOTECA 2D - shapes 
ROUND- REDONDO
BEVEL- ÂNGULO DE CHANFRO
SQUARE-QUADRADO
JOIN- unir, juntar
CAP- tampa???
STROKE- traço



strokeWeight(pârametro); //define a espessura do traço, padrao 1px. Quando se define este atributo tudo 
desenhado posteriormente é afetado.
strokeJoin(ROUND); ARREDONDA OS CANTOS DO TRAÇO
strokeJoin(BEVEL); corte oblíquo ou chanfro nos cantos do traço
strokeCap(SQUARE); linha com bordas quadradas 
strokeCap(ROUND); ARREDONDA as bordas  das linhas
strokeJoin(); //modifica os cantos e como as linhas se unem
strokeCap(); //muda a forma como as linhas são desnehadas por inteiro

++ posso posicionar retangulos a partir do centro e não do superior esquerdo. Assim
como posso posicionar elipses a partir do canto superior e esquerdo e não do centro.
rectMode();
ellipseMode();
parâmetros RADIUS, por organização usar na função setu()

||COR
fill(); 0 preto à 255 branco, escala de cinza PREENCHIMENTO
stroke(); 0 preto à 255 branco, escala de cinza BORDA
background(); só a cor do canvas, tb escala de cinza. FUNDO DA TELA
++ posso desativar o a borda e o preenchimento. Cuidado p nao desativar os dois
noFill();
noStroke();
++ POSSO USAR rgb (r, g, b) como paramêtro, cada valor varia de 0 À 255 tb.

|| TRANSPARÊNCIA
++usar SOMENTE em fill() e stroke()
++controlo a transparência colocando como quarto parâmetro depois de definir a cor, é um valor alpha
vai de 0(totalmente transparente, nao aparece) à 255(totalmente opaco) tb, valores entre entre esses
extremos mesclam as cores sobrepostas.

||FIGURAS PERSONALIZADAS
++ além das figuras básicas posso usar a função beginShape (parecido com beginPath do js) ela indica que começamos uma figura
++ a função vertex() é usada para definir o par de coordenadas (x, y) da figura //lembra lineTo() do js//
++ a função endShape() sinaliza o fim da figura //parecido com pincel.fill() do js
ex: beginShape(); SEM PARÂMETRO
    vertex(x, y); COORDENADAS
    vertex(x, y); COORDENADAS
    vertex(x, y); COORDENADAS
    endShape(); TEM PARÂMETRO "CLOSE" SE VC DESEJA FECHAR A FIGURA

++ diferente do JS ele não fecha a figura sozinho, não conecta o primeiro ponto com o final. É preciso colocar como parâmetro 
em endShape(CLOSE)    

|| COMENTÁRIOS
usar // anula uma linha

||VARIÁVEIS


*/