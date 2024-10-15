const popupModalEliminarCuenta = document.getElementById("popupModalEliminarCuenta");
const modalContentEliminarCuenta = document.querySelector("modal-center"); 
const popupEliminarCuenta = document.getElementById("popupEliminarCuenta");

window.addEventListener("click", (event) => {
    if (event.target === popupModalEliminarCuenta) {
        popupModalEliminarCuenta.style.display = "none";
    }
});


popupEliminarCuenta.addEventListener("click", () => {
    popupModalEliminarCuenta.style.display = "block"; 
});

window.addEventListener("click", (event) => {
    if (!modalContentEliminarCuenta.contains(event.target) && !event.target.closest('#popupEliminarCuenta') ) {
        popupModalEliminarCuenta.style.display = "none";
    }
});
