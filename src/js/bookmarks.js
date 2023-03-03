import bookmarkEmpty from '../assets/images/icon-bookmark-empty.svg';
import bookmarkFull from '../assets/images/icon-bookmark-full.svg';

let favorites = [];

const getLocalStorage = () => {
  const localFavourites = localStorage.getItem('favorites');
  if (localFavourites) {
    favorites = JSON.parse(localFavourites);
  } else {
    localStorage.setItem('favorites', JSON.stringify([]));
  }
};

const updateLocalStorage = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const bookmarks = element => {
  const id = element.parentElement.dataset.id;
  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id);
    element.firstElementChild.src = bookmarkEmpty;
  } else {
    favorites.push(id);
    element.firstElementChild.src = bookmarkFull;
  }
  updateLocalStorage();
};

export { bookmarks, favorites, getLocalStorage };
