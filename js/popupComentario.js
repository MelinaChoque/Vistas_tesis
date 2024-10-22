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
    if (!modalContent.contains(event.target) && !popupComentario.contains(event.target)) {
        popupModal.style.display = "none";
    }
});

closeBtn.addEventListener("click", () => {
    popupModal.style.display = "none";
});


