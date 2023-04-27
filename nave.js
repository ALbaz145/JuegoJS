function Nave()
{
    this.mostrar = function(color)
    {
        fill(color);
        triangle(xTriangulo-30, yTriangulo, xTriangulo, yTriangulo-50, xTriangulo+40, yTriangulo);
    }
}