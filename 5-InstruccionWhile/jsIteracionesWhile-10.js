/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;






	respuesta;

	do{
		do{
			numeroIngresado=prompt("ingresar numero");
			numeroIngresado=parseInt(numeroIngresado);
		} while(isNaN(numeroIngresado));

		if(numeroIngresado<0){
			sumaNegativos=sumaNegativos+numeroIngresado;
			contadorNegativos++;
		} else {
			if(numeroIngresado>0){
				sumaPositivos=sumaPositivos+numeroIngresado;
				contadorPositivos++;
			} else {
				contadorCeros++;
			}
		} if(numeroIngresado%2==0){
			contadorPares++;
		}

		respuesta=confirm("¿Desea continuar?");
	} while(respuesta);



























}






//FIN DE LA FUNCIÓN