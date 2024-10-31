(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
    modalMenu: document.querySelector('.mobile-menu-list'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
  refs.modalMenu.addEventListener('click', (event) => {
    let tagName = event.target.tagName.toLowerCase();

    if (tagName === 'a') {
      toggleModal();
    };
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  };
})();