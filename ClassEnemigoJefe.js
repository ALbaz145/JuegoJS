class EnemigoJefe extends Enemigos
{
    constructor(x, y,vx,vy)
    {
        super(x, y,vx,vy)
    }
    mostrar()
    {
        fill(this.color);
        square(this.x, this.y, 100);
    }
    /*poder() 
    {
        fill('black');
    }*/
}