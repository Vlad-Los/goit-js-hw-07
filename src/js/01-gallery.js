import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

// 1. создаем div-ы для preview изображений.
// используем массив 
const list = document.querySelector('.js-list')

const markup = galleryItems.reduce((acc, url)=> acc + `<li><img src="${url.preview}" alt="cat" loading="lazy" width="300"></li>`,'')
list.insertAdjacentHTML("beforeend", markup)

const instance = basicLightbox.create(`
    
        
        <img src="${url.preview}" alt="cat" loading="lazy" width="300">
      
    
`)

instance.show()

console.log (basicLightbox);

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