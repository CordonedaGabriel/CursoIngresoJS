function mostrar()
{
	
	var nombre;
	var nacionalidad;
	var sexo;
	var edad;
	var estadoCivil;
	var temperaturaCorporal;
	var respuesta;


	respuesta;
	while(respuesta){

	
	do{
		nombre=prompt("ingrese nombre");
	} while(isNaN(nombre));


	do{
		nacionalidad=prompt("ingrese la nacionalidad");
	} while(isNaN(nacionalidad));
	
	do{
		sexo=prompt("ingrese sexo");
	} while(sexo!="f"&&sexo!="m");

	do{
		edad=prompt("ingrese su edad");
	} while(isNaN(edad));

	do{
		estadoCivil=prompt("ingrese estado civil");
	} while(estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo");

	do{
		temperaturaCorporal=prompt("ingrese temperatura corporal");
		temperaturaCorporal=parseInt(temperaturaCorporal);
	} while(isNaN(temperaturaCorporal));




	respuesta=confirm("Desea continuar?");

}




}
