const slider = document.getElementById("slider");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Función para avanzar y retroceder
const slide = (direction) => {
    const sliderWidth = slider.offsetWidth; // Ancho del slider
    const scrollAmount = sliderWidth * 1; // 50% del ancho del slider

    if (direction === 'next') {
        slider.scrollLeft += scrollAmount; // Desplazar a la derecha
    } else if (direction === 'prev') {
        slider.scrollLeft -= scrollAmount; // Desplazar a la izquierda
    }
    setTimeout(checkButtons, 400); // Asegurarnos de que el desplazamiento se haya completado
};

// Función para chequear la visibilidad de los botones
const checkButtons = () => {
    if (slider.scrollLeft === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
};

// Añadir event listeners a los botones
nextButton.addEventListener("click", () => slide('next'));
prevButton.addEventListener("click", () => slide('prev'));

// Chequear inicialmente el estado de los botones
checkButtons();