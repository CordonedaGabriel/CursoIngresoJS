function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	/*var numeroRandom;
	var max;
	var min;

	max = 11;
	min = 1;
	numeroRandom = Math.floor(Math.random() * (max - min)) + min;

	console.log(numeroRandom);
	*/

}//FIN DE LA FUNCIÓN
{
var numeroRandom;
var max;
var min;
var numeroRandomSegundo;
var mensaje;

min=1;
max=52;
numeroRandom= Math.floor(Math.random() * (max - min) + min);
numeroRandomSegundo= Math.floor(Math.random() * (max -min) + min);
mensaje = "";

if(numeroRandom %2 == 0 && numeroRandomSegundo %2 == 0){
		alert(numeroRandom * numeroRandomSegundo);
	} 
	if(numeroRandom %2 != 0 && numeroRandomSegundo %5 != 0){
		alert(numeroRandom - numeroRandomSegundo);
	} 
	if(numeroRandom %5 == 0){
		alert(numeroRandom * numeroRandom * numeroRandom);
	}
	 if (numeroRandomSegundo %5 == 0){
		alert(numeroRandomSegundo * numeroRandomSegundo * numeroRandomSegundo);
	} 
}   
/* {
var numeroRandom;
var max;
var min;
var numeroRandomSegundo;
var multiplicación;
var resta;
var numeroRandomCubo;
var numeroRandomSegundoCubo;
var ningunaPosibilidad;

min=1;
max=52;
numeroRandom= Math.floor(Math.random() * (max - min) + min);
numeroRandomSegundo= Math.floor(Math.random() * (max -min) + min);


if(numeroRandom %2 == 0 && numeroRandomSegundo %2 == 0){
		alert(numeroRandom * numeroRandomSegundo);
	} if(numeroRandom %2 != 0 && numeroRandomSegundo %5 != 0){
		alert(numeroRandom - numeroRandomSegundo);
	} if(numeroRandom %5 == 0){
		alert(numeroRandom * numeroRandom * numeroRandom);
	} if (numeroRandomSegundo %5 == 0){
		alert(numeroRandomSegundo * numeroRandomSegundo * numeroRandomSegundo);
	} else {
		alert("no paso nada");
	
	} multiplicación = numeroRandom * numeroRandomSegundo;
		resta = numeroRandom - numeroRandomSegundo;
		numeroRandomCubo = numeroRandom * numeroRandom * numeroRandom;
		numeroRandomSegundoCubo = numeroRandomSegundo * numeroRandomSegundo * numeroRandomSegundo;
		var ningunaPosibilidad = " no paso nada" ;

		alert(multiplicación + resta + numeroRandomCubo + numeroRandomSegundoCubo + ningunaPosibilidad);
}   
*/




