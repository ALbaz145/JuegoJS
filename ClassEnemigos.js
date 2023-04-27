class Enemigos
{
    constructor(x, y,vx,vy)
    {
        this.x = x;
        this.y = y;
        this.velocidad = createVector(vx,vy);
        this.color = 'red';
    }
    
    mostrar()
    {
        fill(this.color);
        square(this.x, this.y, 30);
    }
    mover()
    {
        this.x = this.x + this.velocidad.x;
        this.y = this.y + this.velocidad.y;

        if (this.x > width-30 || this.x < 0) 
        {
            this.velocidad.x = this.velocidad.x * -1;
        }
        if (this.y > height-30 || this.y < 0) 
        {
            this.velocidad.y = this.velocidad.y * -1;
        }
    }
    chocar()
    {
        var distancia = dist(this.x, this.y, xTriangulo, yTriangulo-20);
        if(distancia < 30)
        {
            return true;
        }else
        {
            return false;
        }

    }
}