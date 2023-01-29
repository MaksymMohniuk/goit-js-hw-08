// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
function createGalleryMarkup(galleryItems) {
    const markup = galleryItems
      .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
      })
      .join("");
    return markup;
  }
  
  const galleryMarkupContainer = document.querySelector(".gallery");
  
  const galleryMarkup = createGalleryMarkup(galleryItems);
  
  galleryMarkupContainer.insertAdjacentHTML("beforeend", galleryMarkup);
  
  galleryMarkupContainer.addEventListener("click", returnUrlOfBiggestImg);
  
  function returnUrlOfBiggestImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
      return;
    }
    const bigImg = basicLightbox.create(`
       <img src="${event.target.dataset.source}" width="800" height="600">
    `);
    bigImg.show();
  
    galleryMarkupContainer.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        bigImg.close();
      }
    });
  }