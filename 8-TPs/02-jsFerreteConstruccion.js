/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var cantidadAlambre;
    var perimetro;
    
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    
    perimetro = largo * 2 + ancho * 2;

    cantidadAlambre = perimetro * 3;

    alert("La cantidad de alambre necesaria es: " + cantidadAlambre + " metros");




}
function Circulo () 
{
    var radio;
    var perimetro;
    var totalAlambre;

    radio = txtIdRadio.value;

    radio = parseFloat(radio);

    perimetro = 2 * radio * Math.PI ;
    perimetro = Math.ceil(perimetro);
    totalAlambre  = perimetro * 3;
 

    alert("la cantidad total de alambre que se necesita es " + totalAlambre + " metros");







}
function Materiales () 
{
    var largo
    var ancho
    var bolsaCemento
    var bolsaDeCal
    var area

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho 

    bolsaCemento = 2 * area
    bolsaDeCal = 3 * area

    alert("se necesitan: " + bolsaCemento + " bolsas de cemento y " + bolsaDeCal + " bolsas de cal")
    






}