/*

var numero1 = 10.5;
var numero2 = 5;
var resultado = numero1*numero2;

console.log(resultado);

var nombre = "Natalia Mateus";
var profesion = 'Desarrollador full stack';

console.log(nombre + profesion);

var tienen_mascota = true;

console.log(tienen_mascota);

var datos=("Natalia",36,false,25,78,"Desarrollador");

console.log(datos[2]);
*/

/*
var edad = 41;

if(edad>=18 && edad<=40){
	console.log("Eres un adulto joven");
}else {
	console.log("No eres un adulto joven");
}

var dias= ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

for(var i=0;i<7;i++){
	console.log(dias[i]);
}
*/

/*
function suma(numero1,numero2){
	var resultado=numero1+numero2;
	return resultado;
}

var res=suma(88,55);

console.log(res);
*/

/*
function iva(numero1){
	var resultado= numero1*0.19;
	return resultado;
}

var res=iva(100);
console.log(rest);

function iva(precio_producto){
	var iva_producto= precio_producto*0.19;
	return iva_producto;
}

var res=iva(1000);
console.log(resultado);
*/
/*
var titulos = document.getElementsByTagName("h1");
console.log(titulos[0]);

var clasetexto= document.getElementsByClassName("texto");
console.log(clasetexto);

var sede= document.getElementsById("sede");
console.log(sede);
*/

function iva(precio_producto,porcentaje_iva){
	var iva_producto= precio_producto*(porcentaje_iva/100);
	return iva_producto;
}

function calcular_iva(){
	var precio= parseInt(document.getElementById('precio').value);
	var porcentaje_iva= parseInt(document.getElementById('iva').value);
	var resultado= iva(precio, porcentaje_iva);
	var salida= document.getElementById('resultado');
	salida.value= resultado;
}
