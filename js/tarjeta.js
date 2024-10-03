const tarjeta = document.querySelector('#tarjeta');
numeroTarjeta = document.querySelector('#tarjeta .numero');
nombreTarjeta = document.querySelector('#tarjeta .nombre');
cvvTarjeta = document.querySelector('#tarjeta .cvv');
vencimientoTarjeta = document.querySelector('#tarjeta .expiracion');
formulario = document.querySelector('#form-tarjetas');



const mostrarFrente = () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
};

const mostrarDetras = () => {
    if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active');
    }
};

document.addEventListener('DOMContentLoaded', function() {
    mostrarFrente();
});

inputDni.addEventListener('focus', mostrarFrente); 
inputVencimiento.addEventListener('focus', mostrarFrente); 
inputNumero.addEventListener('focus', mostrarFrente);   
inputSeguridad.addEventListener('focus', mostrarDetras); 
inputNombre.addEventListener('focus', mostrarFrente);   


document.getElementById("inputVencimiento").addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, "");
    let mes = "";
    let anio ="";
    if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
        mes =  value.slice(0,2)
        anio =  value.slice(3)
        console.log(anio);
        const today = new Date();
        const currentMonth = today.getMonth() + 1; 
        const currentYear = today.getFullYear() % 100;

        if(anio <= currentYear && mes <= currentMonth ){
            console.log("Ya vencio la tarjeta");
        }else{
            console.log("tarjeta en vigencia")
        }


    }
    //Tamaño permitido 5 caracteres incluye la barra (/) //
    e.target.value = value.slice(0, 5);

    vencimientoTarjeta.textContent =value ;
    

});

document.getElementById("inputSeguridad").addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, "");
    e.target.value = value.slice(0, 3);
    
    
    formulario.inputSeguridad.value = formulario.inputSeguridad.value
    cvvTarjeta.textContent =formulario.inputSeguridad.value ;
    

});

formulario.inputDni.addEventListener('keyup', (e) =>{
    let value = e.target.value.replace(/\D/g, "");
    e.target.value = value.slice(0, 8);

});



document.getElementById("inputNumero").addEventListener("input", function(e) {
    const value = e.target.value.replace(/\D/g, ""); 
    e.target.value = value.replace(/(\d{4})(?=\d)/g, "$1 ");  

    // Identificar tipo de tarjeta
    let cardType = "";
    let cardIcon = document.getElementById('logo-marca');
    if (/^4/.test(value)) {
        cardType = "Visa";
        cardIcon.innerHTML = '<img src="img/tarjeta/logos/visa.png" alt="Visa">';
    } else if (/^5[1-5]/.test(value) || /^2(2[2-9]|[3-6]|7[0-1]|720)/.test(value)) {
        cardType = "Mastercard";
        cardIcon.innerHTML = '<img src="img/tarjeta/logos/mastercard.png" alt="Mastercard">';
    } else if (/^3[47]/.test(value)) {
        cardType = "American Express";
        cardIcon.innerHTML = '<img src="img/tarjeta/logos/america_Express.png" alt="American Express">';
    } else if (/^58/.test(value)) {
        cardType = "Cabal";
        cardIcon.innerHTML = '<img src="img/tarjeta/logos/cabal.png" alt="Cabal">';
    } else if (/^60/.test(value)) {
        cardType = "Naranja";
        cardIcon.innerHTML = '<img src="img/tarjeta/logos/naranja.png" alt="Naranja">';
    } else if (/^50(1105)/.test(value)) {
        cardType = "Argencard";
        cardIcon.innerHTML = '<img src="img/tarjeta/logos/argencard.png" alt="Argencard">';
    } else if (/^50/.test(value) || /^56|^57|^6/.test(value)) {
        cardType = "Maestro";
        cardIcon.innerHTML = '<img src="img/tarjeta/logos/maestro.png" alt="Maestro">';
    }else{
        cardIcon.innerHTML = '';
    }
    numeroTarjeta.textContent = e.target.value;

    if(value == ''){
        numeroTarjeta.textContent='#### #### #### ####';

    }

});

formulario.inputNombre.addEventListener('keyup', (e) =>{
    var valorInput = e.target.value;
    formulario.inputNombre.value = valorInput.replace(/[^a-zA-Z\s]/g, "");
    nombreTarjeta.textContent =valorInput;

    if(valorInput == ''){
        nombreTarjeta.textContent='Jhon Doe';
    }

});
