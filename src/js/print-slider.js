import bookmarkSvg from '../assets/images/icon-bookmark-empty.svg';
import { fetchData, createElement } from './utils';

const rootApp = document.getElementById('root-app');

const printSlider = async (url, title) => {
  const data = await fetchData(url);

  const fragment = document.createDocumentFragment();
  const section = createElement('section');
  const h2 = createElement('h2', 'heading--l', title);
  const slider = createElement('div', 'slider');

  data.results.forEach(result => {
    const isMovie = result.media_type === 'movie';
    const card = createElement('article', 'card');
    card.dataset.id = result.id;
    const background = createElement('img', 'backdrop');
    background.src = `https://image.tmdb.org/t/p/w500${result.backdrop_path}`;
    const bookmarkContainer = createElement('div', 'bookmark-icon');
    const bookmarkImg = createElement('img');
    bookmarkImg.src = bookmarkSvg;
    const cardInfo = createElement('div', 'card__info');
    const cardDetailsDate = isMovie ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4);
    const cardDetailsType = isMovie ? createElement('span', 'card__info--movie', 'Movie') : createElement('span', 'card__info--tv', 'TV');
    const cardDetails = createElement('p', 'body--m', `${cardDetailsDate}`);
    const cardTitle = isMovie ? createElement('h3', 'heading--s', result.title) : createElement('h3', 'heading--s', result.name);
    cardDetails.append(cardDetailsType);
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
  rootApp.prepend(fragment);
};

export { printSlider };
