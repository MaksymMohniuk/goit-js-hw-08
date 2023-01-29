// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

function createGalleryMarkup(galleryItems) {
    const markup = galleryItems
      .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
      })
      .join("");
    return markup;
  }
  const galleryMarkupContainer = document.querySelector(".gallery");
  
  const galleryMarkup = createGalleryMarkup(galleryItems);
  
  galleryMarkupContainer.insertAdjacentHTML("beforeend", galleryMarkup);
  
  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });