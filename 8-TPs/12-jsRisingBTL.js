/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edad;
 	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var legajo;
	var nacionalidad;
	var contador=0;

	edad=prompt("ingrese su edad");
	edad=parseInt(edad);
	while(isNaN(edad)||edad<18||edad>90){
		edad=prompt("ingrese edad entre 18 y 90 años");
		edad=parseInt(edad);
	} sexo=prompt("ingrese su sexo")
		while(sexo!="m"&&sexo!="f"){
			sexo=prompt("ingrese f para femenino o m para masculino");
		}
		estadoCivil=prompt("ingrese estado civil");
		while(estadoCivil!="1"&&estadoCivil!="2"&&estadoCivil!="3"&&estadoCivil!="4"){
			estadoCivil=prompt("ingrese 1 si es soltero/a, 2 si es casado/a,3 si es divorciado/a o 4 si es viudo/a");
		}
		sueldoBruto=prompt("ingrese su sueldo bruto");
		sueldoBruto=parseInt(sueldoBruto);
		while(isNaN(sueldoBruto)||sueldoBruto<8000){
			sueldoBruto=prompt("ingrese su sueldo bruto mayor a 8000");
		sueldoBruto=parseInt(sueldoBruto);
	}   legajo=prompt("ingrese numero de legajo");
		legajo=parseInt(legajo);
		while(isNaN(legajo)|| legajo<1000||legajo>9999){
		legajo=prompt("ingrese numero de legajo");
		legajo=parseInt(legajo);
		}
		nacionalidad=prompt("ingrese su nacionalidad");
		while(nacionalidad!="a"&&nacionalidad!="e"&&nacionalidad!="n"){
		nacionalidad=prompt("ingrese la letra a si es argentino,la letra e si es extranjero y la letra n si es nacionalizado");
		}
		txtIdEdad.value=edad;
		txtIdSexo.value=sexo;
	    txtIdEstadoCivil.value=estadoCivil;
	    txtIdSueldo.value=sueldoBruto;
	    txtIdLegajo.value=legajo;
	    txtIdNacionalidad.value=nacionalidad;
}
