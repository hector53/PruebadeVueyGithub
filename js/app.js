//usando vue js primero declarar la variable que iniciara la instancia de vue 

var app = new Vue({
	
	el: '#app', //esto es el div q tiene la app de vue 
	data: { //en data estan todas las variables o arrays q vayamos a usar 
		message: 'Hola pirobomaniaco', //variable simple de texto declarada
		 message2: 'Usted cargó esta página el ' + new Date().toLocaleString()
	}
}); 

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})