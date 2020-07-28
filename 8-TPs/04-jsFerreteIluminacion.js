/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
/*{
     var lamparitas;
     var precio;
     var precioConDescuento;
     var marca;
     var precioFinal;
     var ingresosBrutos;

     lamparitas = txtIdCantidad.value;
     lamparitas = parseInt(lamparitas);
     precio = 35;
     marca = Marca.value
     precioFinal = 
     ingresosBrutos = precioFinal * 10 / 100

     if(lamparitas >= 6) {
        precioConDescuento= (lamparitas * precio) * 50 / 100
     } else {
         if(lamparitas == 5 && marca == "ArgentinaLuz")  {
             precioConDescuento = (lamparitas * precio) * 40 / 100
         } else {
            if(lamparitas == 5 && marca != "ArgentinaLuz") {
                precioConDescuento = (lamparitas * precio) * 30 / 100
            } else {
                if(lamparitas == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                    precioConDescuento = (lamparitas * precio) * 25 / 100
                } else {
                    if(lamparitas == 4 && marca != "ArgentinaLuz" || marca != "FelipeLamparas"){
                        precioConDescuento = (lamparitas * precio) * 20 / 100
                    } else {
                        if(lamparitas == 3 && marca == "ArgentinaLuz"){
                            precioConDescuento = (lamparitas * precio) * 15 / 100
                        } else {
                            if(lamparitas == 3 && marca == "FelipeLamparas"){
                                precioConDescuento = (lamparitas * precio) * 10 / 100
                            } else {
                                if(lamparitas == 3 && marca != "ArgentinaLuz" || marca != "FelipeLamparas"){
                                    precioConDescuento = (lamparitas * precio) * 5 / 100
                                } else {
                                    if(precioConDescuento > 120){
        precioConDescuento = precioConDescuento + ingresosBrutos;{
        alert("usted pagó " + ingresosBrutos + " de ingresos brutos");
    } precioConDescuento = txtIdprecioDescuento;

                                }
                                
                            }
                        }
                    }
                }
            }
         }
     }
        
     
         
     
     
}
*/

{
    var lamparitas;
    var precio;
    var precioConDescuento;
    var marca;
    var ingresosBrutos;

    lamparitas = txtIdCantidad.value;
    lamparitas = parseInt(lamparitas);
    precio = 35;
    marca = Marca.value;
    precioConDescuento = parseInt(precioConDescuento);
    
    
    if(lamparitas >= 6){
        precioConDescuento = (lamparitas * precio) * 50 / 100;
    } else if(lamparitas == 5 && marca == "ArgentinaLuz"){
        precioConDescuento = (lamparitas * precio) * 40 / 100;
    } else if(lamparitas == 5 && marca != "ArgentinaLuz"){
        precioConDescuento = (lamparitas * precio) * 30 / 100;
    } else if(lamparitas == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
        precioConDescuento = (lamparitas * precio) * 25 / 100;
    } else if(lamparitas == 4 && marca != "ArgentinaLuz" || marca != "FelipeLamparas"){
        precioConDescuento = (lamparitas * precio) * 20 / 100;
    } else if(lamparitas == 3 && marca == "ArgentinaLuz"){
        precioConDescuento = (lamparitas * precio) * 15 / 100;
    } else if(lamparitas == 3 && marca == "FelipeLamparas"){
        precioConDescuento = (lamparitas * precio) * 10 / 100;
    } else if(lamparitas == 3 && marca != "ArgentinaLuz" || marca != "FelipeLamparas"){
        precioConDescuento = (lamparitas * precio) * 5 / 100;
    } 
    


//COMPLETAR Y PREGUNTAR EL SABADO

/*
EJERCICIO DE JULIETA
{
	var precioLampara;
	precioLampara = 35;
	var cantidadDeLamparasCompradas;
	cantidadDeLamparasCompradas = parseInt(txtIdCantidad.value);
	var marcaLampara;
	marcaLampara = Marca.value;
	var subTotal;
	subTotal = cantidadDeLamparasCompradas * precioLampara;
	var precioConDescuento;
	precioConDescuento = subTotal;
	txtIdPrecioDescuento.value = precioConDescuento;
	var iibb;
	var precioTotal;


	if (cantidadDeLamparasCompradas>=6) {
		precioConDescuento = subTotal * 0.50;
	} else {
		if (cantidadDeLamparasCompradas===5) {
			switch(marcaLampara) {
				case "ArgentinaLuz":
					precioConDescuento = subTotal * 0.60;
					break;
				default:
					precioConDescuento = subTotal * 0.70;
					break;
			}
		} else {
			if (cantidadDeLamparasCompradas===4) {
				switch (marcaLampara) {
					case "ArgentinaLuz":
					case "FelipeLamparas":
						precioConDescuento = subTotal * 0.75;
						break;
					default:
					 	precioConDescuento = subTotal * 0.80;
					 	break;
				}
			} else {
				if (cantidadDeLamparasCompradas===3) {
					switch (marcaLampara) {
						case "ArgentinaLuz":
							precioConDescuento = subTotal * 0.85;
							break;
						case "FelipeLamparas":
							precioConDescuento = subTotal * 0.90;
							break;
						default:
							precioConDescuento = subTotal * 0.95;
							break;
					}
				}
 			}
		}
	}

	//tema IIBB
	if (precioConDescuento>=120) {
		iibb = precioConDescuento * 0.10;
		alert("Usted pago " + iibb + " de IIBB.")
	} else {
		iibb = 0;
	}

	precioTotal = precioConDescuento + iibb;
	txtIdPrecioDescuento.value = precioTotal;
*/





































}