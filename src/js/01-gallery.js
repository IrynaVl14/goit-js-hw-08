import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const makeListOfImages = ({ preview, original, description }) => {
  return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>       
    `    
};

const listOfImages = galleryItems.map(makeListOfImages).join('');
const galleryEl = document.querySelector('div.gallery');
galleryEl.insertAdjacentHTML('afterbegin', listOfImages);

let lightbox = new SimpleLightbox('.gallery a');

galleryEl.addEventListener('click', onGalleryClick)

function onGalleryClick(evt) {
    evt.preventDefault();
    const isImgEl = evt.target.classList.contains('gallery__image');

    if (!isImgEl) {
        return;
    }

    lightbox.options.captionsData = 'alt';       
    lightbox.options.captionDelay = 250;
    
}
