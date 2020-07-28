function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	var estadia = 15000
	aumento = estadia*20/100
	estadia = parseInt(estadia);
	aumento = parseInt(aumento);

	switch (estacionIngresada){
		case "Invierno":
			switch (destinoIngresado){
				case "Bariloche":
					alert("el precio es de " + estadia + aumento);
			}
	}

}//FIN DE LA FUNCIÓN