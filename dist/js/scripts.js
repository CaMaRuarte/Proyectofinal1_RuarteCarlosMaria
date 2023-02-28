var img = document.querySelector("img");
var nacimiento_edad = document.querySelector(".nacimiento_edad");
var email = document.querySelector(".email");
var domicilio = document.querySelector(".domicilio");
var telefono = document.querySelector(".telefono");
var links = document.querySelectorAll("li.knowledge", "a[data-id]");
var div_info = document.getElementById("info");
var modal_knowledge = document.getElementById("modelId");

// Cuando el documento esta listo inicia las funciones
$(document).ready(function () {
  // Carga de datos de muestra desde API
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
      let results = data.results;
      let nomb_completo;
      results.forEach((result) => {
        // carga los valores mediante manejo de DOM con información de API
        nomb_completo = result.name.first + ", " + result.name.last;
        img.src = result.picture.large;
        nacimiento_edad.innerText =
          new Date(result.dob.date).toLocaleDateString("es-ES") +
          " | " +
          result.dob.age +
          " Años";
        email.innerHTML = `<a href="mailto:${result.email}">${result.email}</a>`;
        domicilio.innerText =
          result.location.street.name +
          ", " +
          result.location.street.number +
          ", " +
          result.location.state +
          ", " +
          result.location.country +
          ".";
        telefono.innerText = result.phone;

        div_info.innerHTML = `
        <img class="img-fluid rounded mx-auto mb-2" src="${img.src}" alt="">
        <h4 class="mb-0">CARLOS MARÍA RUARTE</h4>
        <p class="mt-0 mb-3">
          <span class="mr-3">${
            domicilio.innerText + " | " + email.innerHTML
          }</span>
        </p>

        <p class="mt-3 mb-0">
          <b>
            <i class="fas fa-phone pr-3"></i> Teléfono /Celular
          </b>
        </p>
        <span>${telefono.innerText}</span>
        
        <p class="mt-3 mb-0">
          <b>
            <i class="fas fa-cake pr-3"></i> Fecha de Nacimiento
          </b>
        </p>
        <span>${nacimiento_edad.innerText}</span>`;
      });
    },
  });

  // Llamada a función mostrar info de conocimientos
  $("ul.fa-ul").click(function (e) {
    e.preventDefault();
    var li = e.target.parentNode;
    showInfo(li);
  });

  scrollASection();

  // Botón ir arriba
  scrollTop();
});

// Función para hacer scroll entre secciones
function scrollASection() {
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Cierra el menú interactivo al hacer clic en un enlace de activación de desplazamiento.
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activa scrollspy para añadir una clase activa a los elementos de la barra de navegación al desplazarse
  $("body").scrollspy({
    target: "#navigation-style",
  });
}

// Mostrar información de elemento clickeado en conocimientos
function showInfo(li) {
  switch (li.id) {
    case "1":
      modal_knowledge.querySelector(".modal-title").innerText = "Content Title 1";
      modal_knowledge.querySelector(".modal-body").innerText =
        'El contenido del element "1" es Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vitae illum at quidem voluptates! At veritatis fuga accusamus aliquid, nulla aliquam, error sint dignissimos iste, non sed commodi fugiat vero!';
      $(modal_knowledge).modal("show"); // abrir
      break;
      case "2":
        modal_knowledge.querySelector(".modal-title").innerText = "Content Title 2";
        modal_knowledge.querySelector(".modal-body").innerText =
          'El contenido del element "2" es Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vitae illum at quidem voluptates! At veritatis fuga accusamus aliquid, nulla aliquam, error sint dignissimos iste, non sed commodi fugiat vero!';
        $(modal_knowledge).modal("show"); // abrir
        break;
        case "3":
          modal_knowledge.querySelector(".modal-title").innerText = "Content Title 3";
          modal_knowledge.querySelector(".modal-body").innerText =
            'El contenido del element "3" es Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vitae illum at quidem voluptates! At veritatis fuga accusamus aliquid, nulla aliquam, error sint dignissimos iste, non sed commodi fugiat vero!';
          $(modal_knowledge).modal("show"); // abrir
          break;
          case "4":
            modal_knowledge.querySelector(".modal-title").innerText = "Content Title 4";
            modal_knowledge.querySelector(".modal-body").innerText =
              'El contenido del element "4" es Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vitae illum at quidem voluptates! At veritatis fuga accusamus aliquid, nulla aliquam, error sint dignissimos iste, non sed commodi fugiat vero!';
            $(modal_knowledge).modal("show"); // abrir
          break;
    default:
      modal_knowledge.querySelector(".modal-title").innerText = "Content Title 5";
      modal_knowledge.querySelector(".modal-body").innerText =
        'El contenido del element "05" es Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vitae illum at quidem voluptates! At veritatis fuga accusamus aliquid, nulla aliquam, error sint dignissimos iste, non sed commodi fugiat vero!';
      $(modal_knowledge).modal("show"); // abrir
      break;
  }

  let close_button = modal_knowledge.querySelector("button.close");
  let cancel_button = modal_knowledge.querySelector("button.cancel");
  close_button.addEventListener("click", function () {
    $(modal_knowledge).modal("hide"); // cerrar
  });
  cancel_button.addEventListener("click", function () {
    $(modal_knowledge).modal("hide"); // cerrar
  });
}

function scrollTop() {
  $("#go-top").hide();
  $("#go-top").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("#go-top").fadeIn(300);
    } else {
      $("#go-top").fadeOut(300);
    }
  });
}
