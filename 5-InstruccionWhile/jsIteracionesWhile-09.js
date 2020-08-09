/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	var respuesta;
	var maximo;
	var minimo;
	var numero;
	var contador;


	contador=0
	respuesta=true;

	while(respuesta){
			do{
			numero=prompt("ingrese un numero");
			numero=parseInt(numero); 
			}
			while(isNaN(numero));
	
		if(contador==0){                             //agrego var contador y le hago un if dsp de la primera iteracion
				contador++;
				maximo=numero;
				minimo=numero;
			} else {
				if(numero>maximo){
					numero=maximo;
				} 
				if(numero<minimo){
					numero=minimo;
				}
			}
		
		 respuesta=confirm("¿Desesa continuar?");
		}
		maximo=txtIdMaximo.value;
		minimo=txtIdMinimo.value;
}//FIN DE LA FUNCIÓN