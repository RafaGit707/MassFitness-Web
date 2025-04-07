document.addEventListener("DOMContentLoaded", () => {
    const abrirLogin = document.getElementById("abrir-login");
    const cerrar = document.querySelectorAll(".cerrar");
  
    abrirLogin.addEventListener("click", () => {
      document.body.classList.add("no-scroll");
    });
  
    cerrar.forEach(btn => {
        btn.addEventListener("click", () => {
          document.body.classList.remove("no-scroll");
        });
    });
    
});