function Texto()
{

    this.mostrarPuntuacion = function(score)
    {
      this.score = score;

        text('Score: ' + this.score, 10, 30);
        fill('white');
    }
    this.mostrarGameOver = function(score)
    {
      this.score = score;

      textSize(48);
      textStyle(BOLDITALIC);
      fill(251, 72, 196);
      textAlign(CENTER);
      text('Game Over \nScore: ' + this.score, windowWidth/2, windowHeight/2 );
    }
}
