function mostrar()
{
  var respuesta;
 var tipo;
 var precio;



  respuesta;


  while(respuesta){

    do{
      tipo=prompt("ingrese tipo de producto");
    } while(tipo!="cal"&&tipo!="cemento"&&tipo!="arena");

    do{
      precio=prompt("ingrese precio");
      precio=parseInt(precio);
    } while(isNaN(precio)||precio)








    respuesta=confirm("¿Desea continuar?");
  }
}
