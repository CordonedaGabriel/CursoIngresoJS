function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	var max;
	var min;

	max=11;
	min=1;
	notaRandom=Math.floor(Math.random() * (max - min) + min);

	if(notaRandom >= 9){
		alert("excelente");
	} else {
	if(notaRandom > 4){
		alert("aprobó");
	} else {
		alert("vamos,la proxima se puede");
	}
	} 
	console.log(notaRandom);
	




}//FIN DE LA FUNCIÓN
/* var notaRandom;
	var max;
	var min;

	max=11;
	min=1;
	notaRandom=Math.floor(Math.random() * (max - min) + min);

	if(notaRandom >= 9){
		alert("excelente");
	} else if(notaRandom > 4){
		alert("aprobó");
	} else if(notaRandom < 4){
		alert("vamos,laproxima se puede");

	} console.log(notaRandom); */