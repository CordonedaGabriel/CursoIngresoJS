/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    var resultado ;
    resultado = precioUno + precioDos + precioTres;

    alert("la suma de los precios es " + resultado);


}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres ;
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    var promedio ;
    promedio = (precioUno + precioDos + precioTres) / 3;

    alert("el promedio es " + promedio);


}
function PrecioFinal () 
{
	 var precioUno;
    var precioDos;
    var precioTres; 
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    var precioFinal;
    precioFinal = (precioUno + precioDos + precioTres) * 1.21;
    alert("el precio final mas el iva incluido es " + precioFinal);

}