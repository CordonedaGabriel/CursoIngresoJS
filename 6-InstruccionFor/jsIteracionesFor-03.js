function mostrar()
{
	var repeticiones;

	do{
		repeticiones=prompt("ingrese cantidad de repeticiones");
		repeticiones=parseInt(repeticiones);
	} while(isNaN(repeticiones)|| repeticiones<1);

	for(var contador=0;contador<repeticiones;contador++){          //
	alert("hola utn fra");
	} 

}//FIN DE LA FUNCIÓN