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
document.addEventListener('contextmenu', e => {
    if (e.target.tagName === 'IMG') e.preventDefault();
});

document.addEventListener('dragstart', e => {
    if (e.target.tagName === 'IMG') e.preventDefault();
});

document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'u')) {
        e.preventDefault();
    }
});

// Protección extra en móviles para evitar que dejen el dedo presionado sobre tus .webp
const estiloFuerte = document.createElement('style');
estiloFuerte.innerHTML = `
    img {
        -webkit-touch-callout: none !important;
        -webkit-user-select: none !important;
        user-select: none !important;
        pointer-events: none !important;
    }
`;
document.head.appendChild(estiloFuerte);


window.toggleGameOptions = toggleGameOptions;
window.openModal = openModal;
window.closeModal = closeModal;
window.closeModalOnOutsideClick = closeModalOnOutsideClick;
