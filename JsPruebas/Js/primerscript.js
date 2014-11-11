var ganador;

function calculaGanador(a,b){
	if (a== "piedra"){
		if(b== "papel"){
			ganador= "Papel envuelve a la piedra, gana el jugador dos";
		}else if (b== "piedra")
		ganador= "Es un empate de piedra contra piedra";
		else 
			ganador= "La piedra rompe a las tijeras, gana el jugador uno";
	}else if(a=="papel"){
		if (b=="piedra"){
			ganador="Papel elvuelve a la piedra, gana el jugador uno";
		}	else if (b=="papel"){
			ganador="Es un empate de papel contra papel";}
			else
				ganador="Las tijeras cortan al papel, gana el jugador dos";
		}else
		if(b=="tijera"){
			ganador="Es un empate de tijera contra tijera";}
			else if(b=="papel"){
				ganador="Las tijeras cortan al papel, gana el jugador uno";
			} else
			ganador="La piedra destruye a las tijeras, gana el jugador dos";
		
		return ganador;
	}	

	var runo = prompt("Hola jugador Uno, ¿piedra papel o tijera?");
	var rdos = prompt("Hola jugador dos, ¿piedra papel o tijera?");

	if (runo != "piedra" || runo!= "papel" || runo!= "tijera"){
		alert("Escribe un valor válido");}
		 else if(rdos != "piedra" || runo!= "papel" || runo!= "tijera"){
		 	alert("Jugador dos, escribe uno valor válido");
		 } else 

	alert(calculaGanador(runo,rdos));
