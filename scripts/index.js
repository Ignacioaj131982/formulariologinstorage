// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas
// han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.

// 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la
// persona y un botón de "Cerrar Sesión".

// 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona
// recargue la página. Para ello, deberás validar si existe información del usuario al momento en
// que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar.

// 3) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar
// la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar
// la página para mostrar nuevamente el formulario de login.

/* 
TIPS:
  - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en
    las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí
    encontrarás todas las respuestas que necesitas para completar la actividad.

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la 
    información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y
    separar la información que tienes que almacenar, a partir del objeto que contiene la información del 
    usuario.

   ¡Manos a la obra!
 */

  //capturamos los elementos de la pagina
  let mainDelSitio = document.getElementById("principal");
  let formulario = document.getElementById("formulario");
  let correo = document.getElementById("email-input");
  let contrasenia = document.getElementById("password-input");
  let statusDelContenedor = document.getElementById("status-container");
  let iniciandoSesion = document.getElementById("loader");
  let errorIniciandoSesion = document.getElementById("error-container");
  let botonInicioSesion = document.querySelector(".login-btn");
  let botonCerrarSesion = document.querySelector(".close-btn");
  let h1Alternativo = document.getElementById("h1_alternativo");

  //inicializamos el listener
 /* window.addEventListener("load", ()=>{
    console.log("carga de pagina exitosa");    

    formulario.addEventListener("submit", (e)=>{
      e.preventDefault(); // Esto evita que el formulario se envíe por defecto

      // Obtenemos el valor de los campos de correo y contraseña del formulario
      let correoValor = correo.value;
      let contraseniaValor = contrasenia.value;
      let usuarioValido = false;

      // Comparamos el correo y la contraseña ingresados con los de cada usuario en la base de datos
      baseDeDatos.usuarios.forEach(usuario => {
        if (usuario.email === correoValor && usuario.password === contraseniaValor) {
          usuarioValido = true;
          iniciandoSesion.style.display = "block";
          setTimeout(()=>{
            console.log("Usuario válido :" + usuario.name);
          // Aquí puedes realizar otras acciones, como redirigir al usuario a otra página
          localStorage.setItem("usuario", usuario.name);
          let nombreUsuario = localStorage.getItem("usuario");
          console.log(nombreUsuario);

          if (nombreUsuario) {
            // Si hay información de usuario, mostrar elementos relevantes para sesión iniciada
            formulario.style.display = "none"; // Ocultar formulario de inicio de sesión
            h1Alternativo.innerText = "Bienvenido al sitio " + usuario.name + " 😃";
            botonCerrarSesion.style.display = "block";
            console.log("Sesión iniciada para: " + nombreUsuario);
      
      
            
          } else {
            // Si no hay información de usuario, mostrar formulario de inicio de sesión
          formulario.style.display = "block";
          console.log("No hay sesión iniciada.");
          }

          // Recargar la página para mostrar los elementos relevantes para sesión iniciada
            //location.reload();
          }, 3000);
        return; // Salimos de la función ya que encontramos un usuario válido
        }
      });

      // Si no se encontró ningún usuario válido, mostramos un mensaje de error
      if (!usuarioValido) {
        alert("Usuario no válido. Por favor, verifique su correo y contraseña.");
      }

      
    });
  });*/
  window.addEventListener("load", () => {
    console.log("Carga de página exitosa");
  
    // Verificar si hay información de usuario en el localStorage
    let nombreUsuario = localStorage.getItem("usuario");
  
    if (nombreUsuario) {
      // Si hay información de usuario, mostrar elementos relevantes para sesión iniciada
      formulario.style.display = "none"; // Ocultar formulario de inicio de sesión
      h1Alternativo.innerText = "Bienvenido al sitio " + nombreUsuario + " 😃";
      botonCerrarSesion.style.display = "block";
      console.log("Sesión iniciada para: " + nombreUsuario);
    } else {
      // Si no hay información de usuario, mostrar formulario de inicio de sesión
      formulario.style.display = "block";
      console.log("No hay sesión iniciada.");
    }
  
    formulario.addEventListener("submit", (e) => {
      e.preventDefault(); // Esto evita que el formulario se envíe por defecto
  
      // Obtenemos el valor de los campos de correo y contraseña del formulario
      let correoValor = correo.value;
      let contraseniaValor = contrasenia.value;
      let usuarioValido = false;
  
      // Comparamos el correo y la contraseña ingresados con los de cada usuario en la base de datos
      baseDeDatos.usuarios.forEach(usuario => {
        if (usuario.email === correoValor && usuario.password === contraseniaValor) {
          usuarioValido = true;
          iniciandoSesion.style.display = "block";
          setTimeout(() => {
            console.log("Usuario válido: " + usuario.name);
            // Aquí puedes realizar otras acciones, como redirigir al usuario a otra página
            localStorage.setItem("usuario", usuario.name);
            // Recargar la página para mostrar los elementos relevantes para sesión iniciada
            location.reload();
          }, 3000);
          return; // Salimos de la función ya que encontramos un usuario válido
        }
      });
      
  
      // Si no se encontró ningún usuario válido, mostramos un mensaje de error
      if (!usuarioValido) {
        alert("Usuario no válido. Por favor, verifique su correo y contraseña.");
      }
    });

    botonCerrarSesion.addEventListener("click", ()=>{
      console.log(botonCerrarSesion);
      alert("se ha cerrado la sesión");
      localStorage.removeItem("usuario")
      location.reload();
    })
  });
  //localStorage.removeItem("usuario")

  



