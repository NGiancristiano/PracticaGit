let autos = require('./autos');

let concesionaria = {
   autos: autos,
   buscarAuto: function(patente){
      if(this.autos.length==0){
         return null;
      }
      else{
         for(let i=0;i<this.autos.length;i++){
            if(this.autos[i].patente == patente){
               return this.autos[i];
            }
            else{
               return null;
            }
         }
      }
   },
   venderAuto: function(patente){
         for(let i=0;i<this.autos.length;i++){
            if(this.autos[i].patente == patente){
               this.autos[i].vendido = true;
            }
         }
   },
   autosParaLaVenta: function(){
      if(this.autos.length==0){
         return null;
      }
      else{ 
         return this.autos.filter(auto => auto.vendido == false);
      }
   },
   autosNuevos: function(){
      let autosDeVenta = this.autosParaLaVenta();
      let autosDeVentaNuevos = autosDeVenta.filter(car => (car.km >= 0)&&(car.km < 100));
      return autosDeVentaNuevos;
   },
   listaDeVentas: function(){
      listaPrecios=[];
      listaAutosVendidos = this.autos.filter(auto => auto.vendido ==true);
      listaPrecios = listaAutosVendidos.map(function(auto){
         return auto.precio;

      });
      return listaPrecios;
   },
   totalDeVentas: function(){
      preciosDeVenta=this.listaDeVentas();
      if (preciosDeVenta.length==0){
         return 0;
      }
      else{
         total = this.listaDeVentas().reduce(
            function(ac,cv){
               return ac + cv;
            });
         return total;
   }
   },
   puedeComprar: function(auto,persona){
   if((auto.precio < persona.capacidadDePagoTotal) &&             ( ((auto.precio)/(auto.cuotas)) < persona.capacidadDePagoEnCuotas)){
      return true;
   }
   else{
      return false;
   }
   },
   autosQuePuedeComprar: function(persona){
      //Paso 1: Obtener los autos para la venta
      autosVenta=this.autosParaLaVenta();

      //Paso 2: Por cada uno de los autos debe de probar si la persona puede comprarlo.
      posiciones =[];
      for (let i=0;i<autosVenta.length;i++){
         condicion = this.puedeComprar(autosVenta[i],persona);
         if(condicion === true){
            posiciones.push(i);
         }
      };

      //Paso 3: Luego debemos retornar los que pueda comprar.
      autosCumplen = []
      for (let k=0;k<posiciones.length;k++){
         autosCumplen.push(autosVenta[posiciones[k]]);
      };
      return autosCumplen;
   }
};

//Al menos hicimos la tarea con tiempo, también pensé que era para antes.


console.log("Un placer trabajar contigo Andres :)")

