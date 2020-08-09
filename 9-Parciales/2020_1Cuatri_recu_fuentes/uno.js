
function mostrar()
{	
	var contador=0;
	var tipoProducto;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var maximoJabon;
	var contadorJabones=0;

	while(contador<5){
		contador++;

		do{
			tipoProducto=prompt("ingrese producto");
		} while(tipoProducto!="barbijo"&&tipoProducto!="jabon"&&tipoProducto!="alcohol");

		do{
			precio=prompt("ingrese precio");
			precio=parseInt(precio);
		} while(precio>300&&precio<100||isNaN(precio));

		do{
			cantidadUnidades=prompt("ingrese cantidad de unidades");
			cantidadUnidades=parseInt(cantidadUnidades);
		} while(cantidadUnidades<0&&cantidadUnidades>1000);

		marca=prompt("ingrese marca");

		fabricante=prompt("ingrese fabricante");

		if(tipoProducto=="jabon"){
			contadorJabones++;
		}











	}
	
}
