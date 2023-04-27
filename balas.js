function Balas(x, y)
{
    this.x = x;
    this.y = y;

    this.mostrar = function()
    {
        fill('blue');
        circle(this.x, this.y, 10);
    }
    this.mover = function()
    {
        this.y = this.y - 15;
    }

    this.chocar = function(enemigo)
    {
        var distancia = dist(this.x, this.y, enemigo.x+15, enemigo.y+30);
        if(distancia < 30)
        {
            return true;
        }else
        {
            return false;
        }

    }
}