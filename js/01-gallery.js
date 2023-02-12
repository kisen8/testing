import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galItemsMarkup = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML("beforeend", galItemsMarkup);
gallery.addEventListener("click", onClick);
function createGalleryItems(galleryItems) {
  return galleryItems
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
}

function onClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const selImg = e.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `<img src="${selImg}" width="800" height="600">`
  );

  instance.show();
}
