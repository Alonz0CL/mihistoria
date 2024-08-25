document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');

    // Crear luces dinámicas
    for (let i = 0; i < 6; i++) {
        const light = document.createElement('div');
        light.classList.add('light');
        main.appendChild(light);
    }

    // Animación de entrada para el contenedor de la carta
    const letterContainer = document.querySelector('.letter-container');
    letterContainer.style.opacity = 0;
    letterContainer.style.transform = 'translateY(20px)';

    setTimeout(() => {
        letterContainer.style.transition = 'opacity 1s ease, transform 1s ease';
        letterContainer.style.opacity = 1;
        letterContainer.style.transform = 'translateY(0)';
    }, 100);
});
