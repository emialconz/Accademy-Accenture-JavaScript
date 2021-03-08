var producto=prompt("Ingrese el articulo o el codigo de lo que quiere buscar");
        if(producto=="11450" || producto=="Ford Fiesta"){
            var descuento = 1350344*0.05;
            var total = 1350344 - descuento;
            var codigo = 11450;
            document.write("Descuento : "+descuento,"<br><br>"+"Total a pagar: "+total,"<br><br>"+"Codigo de producto: "+ codigo);
        }else{
            var descuento = 1750502*0.1;
            var total = 1750502 - descuento;
            var codigo = 11451;
            document.write("Descuento :"+descuento,"<br><br>"+"Total a pagar: "+total,"<br><br>"+"Codigo de producto: "+ codigo);
        }