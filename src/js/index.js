import '../scss/styles.scss';
import { printSlider } from './print-slider';
import { printSection } from './print-section';
import { bookmarks, getLocalStorage, favorites } from './bookmarks';
import { updateNav } from './utils';

// CONSTANTES

const nav = document.getElementById('nav__list');
const formElement = document.getElementById('form');
const searchInputElement = document.getElementById('search-input');
const rootApp = document.getElementById('root-app');

const API = 'https://api.themoviedb.org/3/';
const trending = 'trending/all/day';
const topRatedMovies = 'movie/top_rated';
const topRatedTV = 'tv/top_rated';
const searchMulti = 'search/multi';
const key = '?api_key=8c249596e745671ad9c2727c7f926d41';

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
  } else if (e.target.dataset.icon === 'bookmark') {
    rootApp.innerHTML = '';
    console.log(favorites);
    favorites.forEach(id => {
      printSection('http://api.themoviedb.org/3/movie/' + Number(id) + key);
      //http://api.themoviedb.org/3/movie/768362?api_key=8c249596e745671ad9c2727c7f926d41
    });
  }
});

formElement.addEventListener('submit', e => {
  e.preventDefault();
  rootApp.innerHTML = '';
  printSection(API + searchMulti + key + '&query=' + searchInputElement.value, `${searchInputElement.value} results`);
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
