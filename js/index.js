const burguerMenu = document.querySelector(".burguer-menu");
const navMenu = document.querySelector(".menu");
const header = document.querySelector("nav");

burguerMenu.addEventListener("click", () => {
  if (navMenu.style.display != "flex") {
    header.style.borderBottomLeftRadius = "0";
    header.style.borderBottomRightRadius = "0";
    navMenu.style.display = "flex";
    navMenu.style.borderBottomLeftRadius = "5rem";
    navMenu.style.borderBottomRightRadius = "5rem";
  } else {
    navMenu.style.display = "none";
    header.style.borderBottomLeftRadius = "5rem";
    header.style.borderBottomRightRadius = "5rem";
  }
});

const services = document.querySelectorAll(".service");
const moreInfos = document.querySelectorAll(".more-info");
const moreInfoButtons = document.querySelectorAll(".more");
const lessInfoButtons = document.querySelectorAll(".less");

services.forEach((service) => {
  service.style.height = "20rem";
});

moreInfoButtons.forEach((more) => {
  more.addEventListener("click", () => {
    services.forEach((service) => {
      moreInfos.forEach((mores) => {
        mores.classList.remove("active");
      });
      service.style.height = "20rem";
    });
    setTimeout(() => {
      var altura = more.nextElementSibling.clientHeight;
      altura = altura.toString();
      more.parentElement.style.height = altura + "px";
      more.nextElementSibling.classList.add("active");
    }, 100);
  });
});

lessInfoButtons.forEach((less) => {
  less.addEventListener("click", () => {
    var service = less.parentElement.parentElement;
    service = service.parentElement;
    service.style.height = "20rem";
    setTimeout(() => {
      less.parentElement.parentElement.classList.remove("active");
    }, 450);
  });
});

// CONVIERTE VH A PX
function vhToPx(vh) {
  return Math.round(window.innerHeight * (vh / 100));
}

document.getElementById("download").addEventListener("click", function () {
  const fileUrl = "../CATALOGO.pdf";
  const fileName = "catalogo.pdf";

  fetch(fileUrl)
    .then((response) => response.blob())
    .then((blob) => {
      // Create a temporary anchor element
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = fileName;

      // Programmatically trigger the download
      a.click();

      // Clean up
      URL.revokeObjectURL(a.href);
      a.remove();
    });
});


