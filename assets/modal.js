const body = document.querySelector('body');
const modal = document.getElementById('modal');

export const openModal = () => {
    modal.classList.add("show");
    modal.classList.add("opacity");
    body.classList.add("overflow");
    modal.setAttribute('aria-hidden', false);
    modal.setAttribute('aria-modal', true);
}

export const closeModal = () => {
    modal.classList.remove("show");
    modal.classList.remove("opacity");
    body.classList.remove("overflow");
    modal.setAttribute('aria-hidden', true);
    modal.setAttribute('aria-modal', false);
}