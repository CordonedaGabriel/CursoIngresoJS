function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;

	switch(estacionIngresada){
		case "Invierno":
			switch (destinoIngresado){
				case "Bariloche":
					alert("se viaja");
					break;
				default:
					alert("no se viaja");
					break;
			}switch(estacionIngresada){
				case "Verano":
					switch (destinoIngresado){
						case "Mar del plata":
						case "Cataratas":
							alert("se viaja");
							break;
						default:
							alert("no se viaja");
							break;
					}switch(estacionIngresada){
						case "Otoño":
							switch(destinoIngresado){
								case "Bariloche":
								case "Cordoba":
								case "Mar del plata":
								case "Cataratas":
									alert("se viaja");
									break;
							}switch(estacionIngresada){
								case "Primavera":
									switch(destinoIngresado){
										case "Bariloche":
											alert("no se viaja");
											break;
										default:
											alert("se viaja");
											break;
									}
							}
					}
			}
	}

}//FIN DE LA FUNCIÓN