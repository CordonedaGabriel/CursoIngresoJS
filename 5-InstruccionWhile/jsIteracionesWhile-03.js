/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()

	/*var claveIngresada;
	var contador=0;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != "utn750"){
		contador++;
	if(contador==3){
		alert("ya no tiene mas intentos");
		break;
	} 
	claveIngresada=prompt("ingresar clave");
}*/
{
	var claveIngresada;
	var contador=0;

	claveIngresada=prompt("ingresar clave");

	while(claveIngresada != "utn750"){
		contador++;
		if(contador==3){
			alert("usted ya no tiene mas intentos");
			break;
		}
		 claveIngresada=prompt("vuelva a ingresar la clave");
		 }
}//FIN DE LA FUNCIÓN
