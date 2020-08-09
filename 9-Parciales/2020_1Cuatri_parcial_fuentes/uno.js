
function mostrar()
{
	var contador=0;
	var producto;
	var precio;
	var cantidadDeUnidades;
	var marca;
	var fabricante;
	var bandera=true;
	var minimoAlcohol;




	while(contador<5){
		contador++;


		do{
			producto=prompt("ingrese el producto");
		} while(producto!="barbijo"&&producto!="jabon"&&producto!="alcohol");

		do{
			precio=prompt("ingrese el precio");
			precio=parseInt(precio);
		} while(precio>300||precio<100||isNaN(precio));

		do{
			cantidadDeUnidades=prompt("ingrese cantidad de unidades");
			cantidadDeUnidades=parseInt(cantidadDeUnidades);
		} while(cantidadDeUnidades<=0||cantidadDeUnidades>1000||isNaN(cantidadDeUnidades));


		marca=prompt("ingrese nombre de la marca");

		fabricante=prompt("ingrese nombre del fabriccante");


		/*
		//puntoA
		*/
		
		if(bandera&&producto=="alcohol"){
			bandera=false;
			minimoAlcohol=cantidadDeUnidades;
		} else {
			if(cantidadDeUnidades<minimoAlcohol&&producto=="alcohol"){
				minimoAlcohol=cantidadDeUnidades;
			}
		} 
 











	}
}
