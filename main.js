// Función para saludar al usuario
function saludarUsuario() {
  let nombre = prompt("¡Hola! Bienvenido a Félix 3D. ¿Cómo te llamás?");
  alert("¡Hola " + nombre + " Soy FeliBot, tu asistente de impresión 3D.");
  return nombre;
}

// Función para mostrar productos y devolver el precio
function cotizarProducto() {
  let producto = prompt(
    "¿Qué producto te interesa cotizar?\n1. Maceta ($10800)\n2. Llavero ($1500)\n3. Mate ($7000)\n(Escribí el número)"
  );

  let precio = 0;
  let nombreProducto = "";

  if (producto === "1") {
    precio = 10800;
    nombreProducto = "Maceta";
  } else if (producto === "2") {
    precio = 1500;
    nombreProducto = "Llavero";
  } else if (producto === "3") {
    precio = 7000;
    nombreProducto = "Mate";
  } else {
    alert("Opción no válida. Intentá de nuevo.");
  }

  return { precio, nombreProducto };
}

// Función principal que controla la conversación
function iniciarSimulador() {
  let cliente = saludarUsuario();

  let continuar = true;

  while (continuar) {
    let { precio, nombreProducto } = cotizarProducto();

    if (precio > 0) {
      let cantidad = prompt("¿Cuánt@s " + nombreProducto + "s querés?");
      let total = precio * cantidad;

      alert(
        "Cotización para " +
          cliente +
          ":\nProducto: " +
          nombreProducto +
          "\nCantidad: " +
          cantidad +
          "\nTotal: $" +
          total
      );
    }

    let respuesta = prompt(
      "¿Querés cotizar otro producto? (si / no)"
    ).toLowerCase();
    if (respuesta !== "si") {
      continuar = false;
      alert("Gracias por visitar Félix 3D. ¡Hasta la próxima!");
    }
  }
}

// Iniciar simulación
iniciarSimulador();
