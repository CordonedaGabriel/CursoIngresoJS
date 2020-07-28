function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado){
		case "Bariloche":
			alert("se encuentra al oeste");
			break;
		case "Cataratas":
			alert("se encuentra al norte");
			break;
		case "Mar del plata":
			alert("se encuentra al Este");
			break;
		default:
			alert("se encuentra al sur");
	}

}//FIN DE LA FUNCIÓN