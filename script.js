document.querySelector('.btn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('privacy-modal');
    const acceptBtn = document.getElementById('accept-btn');

    // Mostrar el modal al cargar la página
    modal.style.display = 'flex';

    // Ocultar el modal cuando se hace clic en "Aceptar"
    acceptBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
