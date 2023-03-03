import '../scss/styles.scss';
import { printSlider } from './print-slider';
import { printSection } from './print-section';
import { bookmarks, getLocalStorage } from './bookmarks';
import { updateNav } from './utils';

//import { URLS_MOVIES, URLS_SERIES, API_URL, API_KEY, IMAGE_URL } from './requests';

/*
API: https://www.themoviedb.org/ 
Clave de la API (v3 auth) 8c249596e745671ad9c2727c7f926d41
Ejemplo de solicitud de API https://api.themoviedb.org/3/movie/550?api_key=8c249596e745671ad9c2727c7f926d41
Documentación imágenes: https://developers.themoviedb.org/3/getting-started/images
*/

// CONSTANTES

const nav = document.getElementById('nav__list');
const formElement = document.getElementById('form');
const searchInputElement = document.getElementById('search-input');
const rootApp = document.getElementById('root-app');

const API = 'https://api.themoviedb.org/3/';
const trending = 'trending/all/day';
const topRatedMovies = 'movie/top_rated';
const topRatedTV = 'tv/top_rated';
const search = 'search/movie';
const key = '?api_key=8c249596e745671ad9c2727c7f926d41';

// FUNCIONES

// EVENTOS

nav.addEventListener('click', e => {
  if (e.target.classList.contains('active')) return;
  updateNav(e.target);
  if (e.target.dataset.icon === 'home') {
    rootApp.innerHTML = '';
    printSlider(API + trending + key, 'Trending');
    printSection(API + topRatedMovies + key, 'Top Rated Movies');
    printSection(API + topRatedTV + key, 'Top Rated TV Series');
  } else if (e.target.dataset.icon === 'movies') {
    rootApp.innerHTML = '';
    printSection(API + topRatedMovies + key, 'Top Rated Movies');
  } else if (e.target.dataset.icon === 'series') {
    rootApp.innerHTML = '';
    printSection(API + topRatedTV + key, 'Top Rated TV Series');
  }
});

formElement.addEventListener('submit', e => {
  e.preventDefault();
  rootApp.innerHTML = '';
  printSection('https://api.themoviedb.org/3/search/movie?api_key=8c249596e745671ad9c2727c7f926d41&query=' + searchInputElement.value, 'Searching for...');
  //printSection(API + search + key + '&query=' + searchInputElement.value, 'Searching for...');
  //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
});

document.addEventListener('click', e => {
  if (e.target.matches('.bookmark__container')) {
    bookmarks(e.target);
  }
});

// ACCIONES
getLocalStorage();

printSlider(API + trending + key, 'Trending');
printSection(API + topRatedMovies + key, 'Top Rated');
printSection(API + topRatedTV + key, 'Top Rated TV Series');
