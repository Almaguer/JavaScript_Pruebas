/*var numero= prompt("Ingresa tu número");
var contador= 0;
var prueba =0; //La variable desde afuera sí se guarda y existe siempre. Adentro de la función solo mientras
// ella está usándose. Termina la función y nada hay ya.

while(contador<11){
	alert(contador*numero);
	contador++;
}
function imprimeTablas(mult){
	for(prueba =0; prueba <11; prueba++){
	alert(prueba*numero);
}
	}

imprimeTablas(numero);
alert(prueba);

*/


/* var alturaPozo = prompt("Dame la altura del pozo");

function escala(altura){
	var contador=4;
	var dia=1;
	while(contador<altura){
		alert("En el día "+ dia +" el caracol subió hasta el metro " + contador);
		contador= contador-3;
		alert("En la noche el caracol se jeteó y bajó 3 metros y ahora está en "+ contador+ " metros");
		alert("Es el día" + (dia+1) +" ");
		dia++;
		contador=contador+4;
	}
	alert("ya llegó a los 10 metros y salió del pozo");
}

escala(alturaPozo);
*/

var niveles= Number(prompt("¿Cuántos niveles quieres?"));
var x=1; /*se aumentará de 2 en 2 */
var espaciosParaImprimir= niveles-1;
var imprime="";
var auxiliar=1;
var numeroAsteriscos=1;


function imprimeArbol(nivelesX){
	aux2 = espaciosParaImprimir;
	aux3 = espaciosParaImprimir;

	for (var k=0; k <nivelesX ; k++) {

		for (var i=1; i<= aux2; i++){
			imprime= imprime + "-";
			}
		for(var j=1; j<=x; j++){
			imprime+="*";
			}
		imprime= imprime + "\n";
		aux2= aux2-1;
		x+=2;
	}
alert(imprime);
	}

imprimeArbol(niveles);



/*
var rad= prompt("Dame el radio de tu circulo");

var area = 0;

function areaCirculo(radio){
	area= ((radio*radio)*3.1416);
	alert(area);
}

areaCirculo(rad);

function areaCirculoSin(){
	var rad=prompt("dame el radio deseado");
	area= ((rad*rad)*3.1416);
	alert(area);
}

areaCirculoSin();

var ladoPent= prompt("Dame el largo de un lado del pentágono");
var apotemaUser= prompt("dame el largo del apotema");

function areaPentagono(lado,apotema){
	var perimetroPentagono= Number(lado*5);
	area= Number((perimetroPentagono*apotema)/2)
	alert(area);
}
areaPentagono(ladoPent,apotemaUser);

function areaPentagonoSin(){
	var ladoPentagono= prompt("Dame la longitud del lado de pentagono");
	var perimetroPentagono= Number(ladoPentagono*5);
	var apotema = prompt("dame el apotema del pentagono");
	area= Number((perimetroPentagono*apotema)/2)
	alert(area);
}

areaPentagonoSin();
*/
