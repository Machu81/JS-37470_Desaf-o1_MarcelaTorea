
let seleccionUsuario = "";
let nombreUsuario = "";
let subTotal = 0;
let total = 0;
let menuPrincipal = 0;
let medioDePago = 0;

nombreUsuario = prompt("¿Cuál es su nombre?");
alert("Bienvenido/a al sitio de Programas Profesionales " + nombreUsuario);

const consultarPrograma = (numero) => {
  switch (numero) {
    case 1:
      return "Mi Primer Estudio";
    case 2:
      return "Tu Nuevo Rol";
    case 3:
      return "Generación X";
    case 4:
      return "Asociatividad";
    case 5:
      return "Tiempo de Balance";
    case 6:
      return "Mi Vocación";
    default:
      return null;
  }
};

const consultarPrecio = (numero) => {
  switch (numero) {
    case 1:
      return 8000;
    case 2:
      return 10000;
    case 3:
      return 6000;
    case 4:
      return 6500;
    case 5:
      return 5500;
    case 6:
      return 4000;
    default:
      return 0;
  }
};

while (menuPrincipal !== 2) {
  seleccionUsuario = parseInt(
    prompt(
      "Seleccione el Programa al que desea inscribirse: \n1. Mi Primer Estudio: $8000 \n 2. Tu Nuevo Rol: $10000\n 3. Generación X: $6000 \n 4. Asociatividad: $6500 \n 5. Tiempo de Balance: $5500 \n 6. Mi Vocación: $4000"
    )
  );

  subTotal = subTotal + consultarPrecio(seleccionUsuario);

  if (isNaN(seleccionUsuario)) {
    alert("No seleccionó ningún programa");
  } else if (seleccionUsuario > 0 && seleccionUsuario < 7) {
    console.log(seleccionUsuario);
    alert(
      "Usted se inscribió en " +
        consultarPrograma(seleccionUsuario) +
        ", debe abonar $" +
        consultarPrecio(seleccionUsuario)
    );
    menuPrincipal = parseInt(
      prompt("¿Desea inscribirse en otro programa? \n 1. Si \n 2. No")
    );
  } else {
    alert("Opcion invalida");
  }
}

while (medioDePago !== 1 && medioDePago !== 2) {
  medioDePago = parseInt(
    prompt("¿Cómo desea abonar? \n1. Tarjeta \n 2. Transferencia (15% descuento)")
  );
  if (medioDePago !== 1 && medioDePago !== 2) alert("Opcion invalida");
}

if (medioDePago === 1) {
  let cantidadCuotas = 0;
  while (cantidadCuotas < 1 || cantidadCuotas > 3) {
    cantidadCuotas = parseInt(
      prompt(
        "¿En cuantas cuotas desea abonar?: \n 1. 1 cuota \n 2. 2 cuotas \n 3. 3 cuotas"
      )
    );
    }
  alert("Usted deberá abonar " + cantidadCuotas + " cuotas de " + (subTotal / cantidadCuotas) + ".")
  }
else if (medioDePago === 2) {
  alert("Usted deberá abonar " + (subTotal * 0.85) + ".")

}

alert("¡Felicidades! La inscripción se realizó con éxito!¡Gracias por su compra!")
