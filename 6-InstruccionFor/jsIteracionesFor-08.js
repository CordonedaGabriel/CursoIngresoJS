function mostrar()
{
/*
REPASO SABADO
*/
	var sexo;
	var altura;
	var edad;
	var nombre;
	var respuesta;
	var primeraBandera=true;
	var mujerMasAlta;

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

		if(primeraBandera==true){
			primeraBandera=false;
			mujerMasAlta=altura;
		}


		 
		
		
		
		
		
		
		
		
		
		
		
		respuesta=confirm("desea continuar?");
	 }




}//FIN DE LA FUNCIÓN