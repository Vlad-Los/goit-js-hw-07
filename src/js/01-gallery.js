import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

// 1. создаем div-ы для preview изображений.
// используем массив 
const list = document.querySelector('.js-list')

const markup = galleryItems.reduce(
  (acc, url)=> acc + 
    `<li>
      <img src="${url.preview}" alt="${url.description}"
      class="gallery__image" data-source="${url.original}" loading="lazy">
    </li>`,'')
list.insertAdjacentHTML("beforeend", markup)

let arr=document.querySelectorAll('.gallery__image');
for (let i=0; i<arr.length; ++i)
{
  arr[i].onclick=function(e) {
    basicLightbox.create('<img width="1400" height="900" class="gallery__item" src="'+e.target.dataset.source+'">')
    .show();
  }
}

//console.log(basicLightbox);

//for ()
/*
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="preview"
      data-source="original"
      alt="description"
    />
  </a>
</div>
*/

// 2. через querySelector задать событию onClick открытие original изображения
/*
document.querySelectorAll('gallery__image').onclick = () => {
	basicLightbox.create(`
		<img width="1400" height="900" src=target.dataset.source>
	`).show()

}

*/