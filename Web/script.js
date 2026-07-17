document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

function toggleGameOptions(gameId) {
    const options = document.getElementById(gameId + '-options');
    options.classList.toggle('show');
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const content = modal.querySelector('.modal-content-game');
    
    content.classList.add('hide-animation');
    
    setTimeout(() => {
        modal.style.display = 'none';
        content.classList.remove('hide-animation');
    }, 500);
}

function closeModalOnOutsideClick(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal(event.target.id);
    }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration.scope);
      })
      .catch((error) => {
        console.error('Error al registrar el Service Worker:', error);
      });
  });
}

window.toggleGameOptions = toggleGameOptions;
window.openModal = openModal;
window.closeModal = closeModal;
window.closeModalOnOutsideClick = closeModalOnOutsideClick;
