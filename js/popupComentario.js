const popupComentario = document.getElementById("popupComentario");
const popupModal = document.getElementById("popupModal");
const modalContent = document.querySelector(".modal-content"); 
const closeBtn = document.querySelector(".close");

window.addEventListener("click", (event) => {
    if (event.target === popupModal) {
        popupModal.style.display = "none";
    }
});


popupComentario.addEventListener("click", () => {
    popupModal.style.display = "block"; 
});

window.addEventListener("click", (event) => {
    if (!modalContent.contains(event.target) && !event.target.closest('#popupComentario') ) {
        popupModal.style.display = "none";
    }else{
        closeBtn.addEventListener("click", () => {
            popupModal.style.display = "none";
        });
    }
});

