// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.addEventListener('click', onGalleryPictureClick);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItemMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </div>
      `;
        })
        .join('');
};

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 })

function onGalleryPictureClick(event) {
    event.preventDefault();
    if (event.key === "Escape") {
        modalWindow.close();
    };
};
