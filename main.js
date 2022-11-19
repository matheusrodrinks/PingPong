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

//variáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150; 
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
 verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro)
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura)
}

function mostraRaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura)
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
  if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete)
{
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x,y){
    colidiu = 
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function incluiPlacar(){
  textSize(16)
  fill(255)
  text(meusPontos, 278,26);
  text(pontosOponente, 321, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos+= 1
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1
    ponto.play();
  }
}