// Cargar header y footer automáticamente en cada página
document.addEventListener("DOMContentLoaded", () => {
  // Insertar Header
  fetch("../header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("site-header").innerHTML = data;
    });

  // Insertar Footer
  fetch("../footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("site-footer").innerHTML = data;
    });
});
