import bookmarkEmpty from '../assets/images/icon-bookmark-empty.svg';
import bookmarkFull from '../assets/images/icon-bookmark-full.svg';
import { fetchData, createElement } from './utils';
import { favorites } from './bookmarks';

const rootApp = document.getElementById('root-app');

const printSection = async (url, title) => {
  const data = await fetchData(url);

  const fragment = document.createDocumentFragment();
  const section = createElement('section', 'section');
  const h2 = createElement('h2', 'heading--l', title);
  const grid = createElement('div', 'grid');

  data.results.forEach(result => {
    // Comprueba si existe result.title haciendo una conversión forzada
    const isMovie = !!result.title;
    const card = createElement('article', 'card');
    card.dataset.id = result.id;
    const background = createElement('img', 'backdrop');
    if (result.backdrop_path !== 'null') {
      background.src = `https://image.tmdb.org/t/p/w300${result.backdrop_path}`;
    }
    const bookmarkContainer = createElement('div', 'bookmark__container');
    const bookmarkImg = createElement('img', 'bookmark__icon');
    if (favorites.includes(String(result.id))) {
      bookmarkImg.src = bookmarkFull;
    } else {
      bookmarkImg.src = bookmarkEmpty;
    }
    const cardInfo = createElement('div', 'card__info');
    const cardDetailsDate = isMovie ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4);
    const cardDetailsType = isMovie ? createElement('span', 'card__info--movie', 'Movie') : createElement('span', 'card__info--tv', 'TV');
    const cardDetails = createElement('p', 'body--s', `${cardDetailsDate}`);
    const cardTitle = isMovie ? createElement('h3', 'heading--xs', result.title) : createElement('h3', 'heading--xs', result.name);
    cardDetails.append(cardDetailsType);
    cardInfo.prepend(cardTitle);
    cardInfo.prepend(cardDetails);
    bookmarkContainer.prepend(bookmarkImg);
    card.prepend(cardInfo);
    card.prepend(bookmarkContainer);
    card.prepend(background);
    grid.append(card);
  });
  section.append(h2);
  section.append(grid);
  fragment.append(section);
  rootApp.append(fragment);
};

export { printSection };
