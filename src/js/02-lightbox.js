import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery')

const markup = galleryItems.reduce(
  (acc, url)=> acc + 
    `<a href="${url.original}">
      <img src="${url.preview}" alt="${url.description}"
      class="gallery__image" data-source="${url.original}" loading="lazy">
    </a>`,'')
list.insertAdjacentHTML("beforeend", markup)

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });