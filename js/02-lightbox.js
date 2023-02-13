import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galItemsMarkup = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML("beforeend", galItemsMarkup);
// gallery.addEventListener("click", onClick);
function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 500,
  animationSpeed: 2000,
});
