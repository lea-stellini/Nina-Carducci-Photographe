import { displayGallery } from "./display.min.js";

const galleryItems = document.querySelectorAll('.gallery-item');
const filterAll = document.getElementById('all');
const filterConcert = document.getElementById('Concert');
const filterEntreprise = document.getElementById('Entreprise');
const filterMariage = document.getElementById('Mariage');
const filterPortrait = document.getElementById('Portrait');

const main = () => {

    let currentFitler = filterAll;
    currentFitler.classList.add('active');
    displayGallery(galleryItems);

    filterAll.addEventListener('click', () => {
        currentFitler.classList.remove('active');
        filterAll.classList.add('active');
        currentFitler = filterAll;
        displayGallery(galleryItems);
    })
    
    filterConcert.addEventListener('click', () => {
        currentFitler.classList.remove('active');
        filterConcert.classList.add('active');
        currentFitler = filterConcert;
        const imagesFilter = [...galleryItems].filter( item => {
            return item.dataset.galleryTag === "Concert";
        });
        displayGallery(imagesFilter);
    })

    filterEntreprise.addEventListener('click', () => {
        currentFitler.classList.remove('active');
        filterEntreprise.classList.add('active');
        currentFitler = filterEntreprise;
        const imagesFilter = [...galleryItems].filter( item => {
            return item.dataset.galleryTag === "Entreprise";
        });
        displayGallery(imagesFilter);
    })

    filterMariage.addEventListener('click', () => {
        currentFitler.classList.remove('active');
        filterMariage.classList.add('active');
        currentFitler = filterMariage;
        const imagesFilter = [...galleryItems].filter( item => {
            return item.dataset.galleryTag === "Mariage";
        });
        displayGallery(imagesFilter);
    })

    filterPortrait.addEventListener('click', () => {
        currentFitler.classList.remove('active');
        filterPortrait.classList.add('active');
        currentFitler = filterPortrait;
        const imagesFilter = [...galleryItems].filter( item => {
            return item.dataset.galleryTag === "Portrait";
        });
        displayGallery(imagesFilter);
    })
}

main();