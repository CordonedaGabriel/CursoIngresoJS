/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESU
	

/*
REPASO SABADO
*/
 /*{
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
		if(primeraBandera==true){
			primeraBandera=false;
			alturaMax=altura;
		} else {
			if(sexo=="F"&&nombre){
				mujerMasAlta=alturaMax;
				console.log("la mujer mas alta es " + nombre + " y mide "+ alturaMax);	
			}
		}

		if(banderaHombreMasViejo==true){
			banderaHombreMasViejo=false;
			edadMax=edad;
		} else {
			if(sexo=="M"&&nombre){
				hombreEdadMaxima=edadMax;
				console.log("el hombre mas viejo es "+nombre+" y tiene "+hombreEdadMaxima+" años");
			}
		}
	
		if(edad<18&&edad>13&&banderaPrimerAdolescente==true){
			banderaPrimerAdolescente=false;
			primerAdolescente=nombre
		} else {
			if(edad<18&&edad>13){
				nombrePrimerAdolescente=primerAdolescente;
				console.log("el primer adolescente se llama "+nombrePrimerAdolescente);
			}
		}
	
	
	
		respuesta=confirm("desea continuar?");
	 }




	}//FIN DE LA FUNCIÓN*/
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
			if(primeraBandera==true){
				primeraBandera=false;
				alturaMax=altura;
			} else {
				if(sexo=="F"&&nombre){
					mujerMasAlta=alturaMax;
					console.log("la mujer mas alta es " + nombre + " y mide "+ alturaMax);	
				}
			}
			//PUNTO B
			if(banderaHombreMasViejo==true){
				banderaHombreMasViejo=false;
				edadMax=edad;
			} else {
				if(sexo=="M"&&nombre){
					hombreEdadMaxima=edadMax;
					console.log("el hombre mas viejo es "+nombre+" y tiene "+hombreEdadMaxima+" años");
				}
			}
			//PUNTO C
			if(edad<18&&edad>13&&banderaPrimerAdolescente==true){
				banderaPrimerAdolescente=false;
				primerAdolescente=nombre
			} else {
				if(edad<18&&edad>13){
					nombrePrimerAdolescente=primerAdolescente;
					console.log("el primer adolescente se llama "+nombrePrimerAdolescente);
				}
			}
		
		
		
			respuesta=confirm("desea continuar?");
		 }
	
	
	
	
		}
	
	
	
	
		






