// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import bookmarkSvg from '../assets/images/icon-bookmark-empty.svg';
/* import CatImage from '../assets/images/anubis.jpg';
import { sayHello } from './demo.js';

sayHello();

const img = document.createElement('img');
img.src = CatImage;
document.body.append(img); */

/* API: https://www.themoviedb.org/ 
Clave de la API (v3 auth)
8c249596e745671ad9c2727c7f926d41

Ejemplo de solicitud de API
https://api.themoviedb.org/3/movie/550?api_key=8c249596e745671ad9c2727c7f926d41

Imágenes
https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

Documentación: https://developers.themoviedb.org/3/getting-started/images
*/

// CONSTANTES

const nav = document.getElementById('nav__list');
const rootApp = document.getElementById('root-app');

// FUNCIONES

const fetchData = async url => {
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

const createElement = (element, classes, content) => {
  const newElement = document.createElement(element);
  newElement.classList.add(classes);
  newElement.textContent = content;
  return newElement;
};

const printTrending = async () => {
  const data = await fetchData('https://api.themoviedb.org/3/trending/all/day?api_key=8c249596e745671ad9c2727c7f926d41');

  const fragment = document.createDocumentFragment();
  const section = createElement('section', 'trending');
  const h2 = createElement('h2', 'heading--l', 'Trending');
  const slider = createElement('div', 'trending__slider');

  data.results.forEach(result => {
    const isMovie = result.media_type === 'movie';
    const card = createElement('article', 'trending__card');
    const background = createElement('img');
    background.src = `https://image.tmdb.org/t/p/w500${result.backdrop_path}`;
    const bookmarkContainer = createElement('div', 'bookmark-icon');
    const bookmarkImg = createElement('img');
    bookmarkImg.src = bookmarkSvg;
    const cardInfo = createElement('div', 'trending__card-info');
    let string;
    if (isMovie) {
    }
    const cardDetails = createElement('p', 'body--m', `${result.release_date}`);
    console.log(result.title);

    const cardTitle = isMovie ? createElement('h3', 'heading--s', result.title) : createElement('h3', 'heading--s', result.name);

    cardInfo.prepend(cardTitle);
    cardInfo.prepend(cardDetails);
    bookmarkContainer.prepend(bookmarkImg);

    card.prepend(cardInfo);
    card.prepend(bookmarkContainer);
    card.prepend(background);

    slider.append(card);
  });
  fragment.append(section);
  fragment.append(h2);
  fragment.append(slider);
  rootApp.append(fragment);
};

{
  /*<section class="trending">
    <h2 class="heading--l">Trending</h2>
    <div class="trending__slider">    
        <article class="trending__card">
            <img src="./assets/images/placeholder.png" alt="" />
            <div class="bookmark-icon">
                <img src="./assets/images/icon-bookmark-empty.svg" alt="" />
            </div>
            <div class="trending__card__info">
                <p class="body--m">2019 · Movie · PG</p>
                <h3 class="heading--s">Beyond Earth</h3>
            </div>
        </article>
    </section>
    
    */
}

// EVENTOS

nav.addEventListener('click', e => {
  //if (e.target.classList.contains('active')) return;
  if (e.target.dataset.icon === 'home') {
    printTrending();
    //print
  }
});
