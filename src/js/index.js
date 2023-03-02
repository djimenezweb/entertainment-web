// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { fetchData, createElement } from './utils';
import { printSlider } from './print-slider';
import { printSection } from './print-section';

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

const API = 'https://api.themoviedb.org/';
const trending = '3/trending/all/day';
const topRated = '3/movie/top_rated';
const key = '?api_key=8c249596e745671ad9c2727c7f926d41';

// FUNCIONES

// EVENTOS

nav.addEventListener('click', e => {
  //if (e.target.classList.contains('active')) return;
  if (e.target.dataset.icon === 'home') {
    rootApp.innerHTML = '';
    printSlider(API + trending + key);
    printSection(API + topRated + key);
  }
});

document.addEventListener('click', e => {
  if (e.target.matches('.bookmark-icon')) {
    console.log(e.target.parentElement.dataset.id);
  }
});
