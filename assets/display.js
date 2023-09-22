import { closeModal, openModal } from "./modal.min.js";

const gallery = document.querySelector('.gallery');
const modalImg = document.getElementById('modal-img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const closeBtn = document.querySelector('.closeBtn');

export const displayGallery = (images) => {
    gallery.innerHTML = "";

    for(let i = 0; i < images.length; i++){

        const a = document.createElement("a");
        const img = document.createElement("img");

        a.className = "item-column col-sm-6 col-md-4";
        img.className = "gallery-item img-fluid";
        img.src = images[i].src;
        img.alt = images[i].alt;
        img.setAttribute("data-gallery-tag", images[i].dataset.galleryTag);
        img.loading = "false";

        a.appendChild(img);
        gallery.appendChild(a);

        a.addEventListener('click', () => {
            displayModal(images, i);

            openModal();
            
        });
    };
}

export const displayModal = (images, index) => {

    let currentIndex = index;

    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;

    prevBtn.addEventListener('click', () => {
        currentIndex === 0 ? currentIndex = images.length - 1 : currentIndex--
        modalImg.src = images[currentIndex].src;
        modalImg.alt = images[currentIndex].alt;
    });

    nextBtn.addEventListener('click', () => {
        currentIndex === images.length - 1 ? currentIndex = 0 : currentIndex++
        modalImg.src = images[currentIndex].src;
        modalImg.alt = images[currentIndex].alt;
    });

    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
      });

}