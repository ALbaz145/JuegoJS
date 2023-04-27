var nave;
var enemigos = [];
var jefe;
var contadorJefe = 0;
var vidaJefe = 10;
var balas = [];
var puntuacion;
var score = 0;
var xTriangulo = 0;
var yTriangulo = 0;

function setup() 
{
  createCanvas(windowWidth-50, windowHeight-40);
  background('black');
  nave = new Nave();
  jefe = new EnemigoJefe(random(windowWidth),random(windowHeight),random(-50,50),random(-50,50));
  for(var i = 0; i < 8; i++)
  {
    enemigos[i] = new EnemigoBase(random(windowWidth-30),random(windowHeight-80),random(-10,10),random(-10,10));
  }
}

function mouseClicked()
{
  var bala = new Balas(xTriangulo, yTriangulo);
  balas.push(bala);
}

function mouseMoved()
{
  xTriangulo = mouseX;
  yTriangulo = mouseY;
}

function windowResized()
{
  resizeCanvas(windowWidth-50, windowHeight-40);
}

function draw() 
{
  background('black');
  nave.mostrar(255);
  texto = new Texto();
  texto.mostrarPuntuacion(score);

  for(var i = 0; i < enemigos.length; i++)
  {
    enemigos[i].mostrar(); 
    enemigos[i].mover();
    if (enemigos[i].chocar(nave))
    {
      nave.mostrar('black');
      texto.mostrarGameOver(score);
      noLoop()
    }
  }
  if (contadorJefe === 8)
    {
    jefe.mostrar();
    jefe.mover();
    if(jefe.chocar(nave))
    {
      texto.mostrarGameOver(score);
      noLoop();   
    }
    }
  for(var i = 0; i < balas.length; i++)
  {
    balas[i].mostrar(); 
    balas[i].mover();
    if( balas[i].chocar(jefe))
      {
        vidaJefe--;
        if(vidaJefe==0)
        {
        score = score + 100;
        texto.mostrarGameOver(score);
        noLoop();
        }
      }
  }

  
  for(var i = 0; i < balas.length; i++)
  {
    balas[i].mostrar(); 
    balas[i].mover();
    for(var j = 0; j < enemigos.length; j++){
      if( balas[i].chocar(enemigos[j]))
      {
        score++;
        contadorJefe++;
        //console.log(enemigos.length);
        enemigos.splice(j,1);
      }
    }
  }
}
