function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	var estadia = 15000;
	var precioTotal;
	var aumento;
	var descuento;
	estadia = parseInt(estadia);
	aumento = estadia*20/100;
	aumento = parseInt(aumento);
	precioTotal = estadia + aumento;

	switch (estacionIngresada){
		case "Invierno":
			switch (destinoIngresado){
				case "Bariloche":
					alert("el precio es de $" + precioTotal);
					break;
				case "Cataratas":
				case "Cordoba":
					descuento=estadia*10/100
					precioTotal = estadia - descuento;
					alert("el precio es de $" + precioTotal);
					break;
				default:
					descuento=estadia*20/100;
					precioTotal= estadia - descuento;
					alert("el precio es de $" + precioTotal);
					break;
			}
		}switch(estacionIngresada){
			case "Verano":
				switch(destinoIngresado){
					case "Bariloche":
						descuento= estadia*20/100;
						precioTotal= estadia - descuento;
						alert("el precio es de $" + precioTotal);
						break;
					case "Cataratas":
					case "Cordoba":
						aumento=estadia*10/100;
						precioTotal=estadia + aumento;
						alert("el precio es de $" + precioTotal);
						break;
					default:
						aumento=estadia*20/100;
						precioTotal=estadia + aumento;
						alert("el precio es de $" + precioTotal);
						break;
				}
		}switch(estacionIngresada){
			case "Otoño":
			case "Primavera":
				switch(destinoIngresado){
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
						aumento=estadia*10/100;
						precioTotal= estadia + aumento;
						alert("el precio es de $" + precioTotal);
						break;
					default:
						alert("el precio es de $" + estadia);
						break;
				}
		}

}//FIN DE LA FUNCIÓN