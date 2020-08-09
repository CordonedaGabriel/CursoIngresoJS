 
/*{
	var ancho;
	var largo;
	var perimetro;
	var superficie;

	ancho =prompt("Ingrese el ancho del terreno")
	largo =prompt("Ingrese el largo del terreno")

	ancho = parseInt(ancho)
	largo = parseInt(largo)

	perimetro = ancho * 2 + largo * 2
	supeficie = ancho*largo
	superficie = parseInt(superficie)
	
	alert("el terreno tiene " + ancho + " x " + largo + " ,su perimetro total es de " + perimetro + " y la superficie es de " + superficie )







}*/ function mostrar()
{
	var sexo;
	var altura;
	var edad;
	var nombre;
	var respuesta;
	var primeraBandera=true;
	var alturaMax;
	var mujerMasAlta;
	var banderaHombreMasViejo=true;
	var edadMax;
	var hombreEdadMaxima;
	var banderaPrimerAdolescente=true;
	var primerAdolescente;
	var nombrePrimerAdolescente;
	var nombreMujerAlta;
	var nombreHombreViejo;


	respuesta;
	 while(respuesta){

		do{
			sexo=prompt("ingrese F si su sexo es femenino o M si es masculino");
		} while(sexo!="F"||sexo!="M");

		do{
			altura=prompt("Ingrese su altura");
			altura=parseInt(altura);
		} while(isNaN(altura));

		do{
			edad=prompt("ingrese su nombre");
			edad=parseInt(edad);
		} while(isNaN(edad));

		nombre=prompt("ingrese su nombre");

		//PUNTO A:
		if(primeraBandera==true&&sexo=="F"){
			primeraBandera=false;
			alturaMax=altura;
			mujerMasAlta=alturaMax;
			nombreMujerAlta=nombre;
		} else {
			if(altura>alturaMax){
				alturaMax=altura;
				mujerMasAlta=alturaMax;
				nombreMujerAlta=nombre;
			}
		}
		//PUNTO B
		if(banderaHombreMasViejo==true&&sexo=="M"){
			banderaHombreMasViejo=false;
			edadMax=edad;
			hombreEdadMaxima=edadMax;
			nombreHombreViejo=nombre;
		} else {
			if(edad>edadMax){
				edadMax=edad;
				hombreEdadMaxima=edadMax;
			}
		}
		//PUNTO C
		if(edad<18&&edad>13&&banderaPrimerAdolescente==true){
			banderaPrimerAdolescente=false;
			NombrePrimerAdolescente=nombre;
		}
	
	
	
		respuesta=confirm("desea continuar?");
	 }
	 console.log("la mujer mas alta se llama "+ nombreMujerAlta);

	 console.log("el hombre mas viejo se llama "+nombreHombreViejo);

	 console.log("el primer adolescente se llama "+nombrePrimerAdolescente);
	}

