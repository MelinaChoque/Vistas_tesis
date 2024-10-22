const popupPerfil = document.getElementById("popupPerfil");
const popupModal = document.getElementById("popupModalPerfil");
const modalContent = document.querySelector(".modal-content-perfil"); 


popupPerfil.addEventListener("click", () => {
    popupModal.style.display = "block"; 
});

window.addEventListener("click", (event) => {
    if (!modalContent.contains(event.target) && !event.target.closest('#popupPerfil') ) {
        popupModal.style.display = "none";
    }
});