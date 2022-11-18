//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha

let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

//variáveis da raquete
let xRaquete = 10;
let yRaquete = 155;
let raqueteComprimento = 10;
let raqueteAltura = 80;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro)
}

function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura)
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if(xBolinha + raio > width ||xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio>height ||yBolinha - raio<0){
     velocidadeYBolinha *= -1
     }
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete)
{
    velocidadeXBolinha *= -1;
  }
}