const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=8c249596e745671ad9c2727c7f926d41';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const URLS1 = {
  trendingDayAll: API_URL + 'trending/all/day' + API_KEY,
  trendingWeekAll: API_URL + 'trending/all/week' + API_KEY,
  trendingWeekMovie: API_URL + 'trending/movie/week' + API_KEY,
  trendingWeekTv: API_URL + 'trending/tv/week' + API_KEY,
  popularMovies: API_URL + 'movie/popular' + API_KEY,
  popularTv: API_URL + 'tv/popular' + API_KEY,
  topRatedMovies: API_URL + 'movie/top_rated' + API_KEY,
  topRatedTv: API_URL + 'tv/top_rated' + API_KEY,
  upComingMovies: API_URL + 'movie/upcoming' + API_KEY
};

const URLS2 = [
  {
    link: API_URL + '/trending/movie/week' + API_KEY,
    title: 'Trending',
    type: 'Movies'
  },
  {
    link: API_URL + '/movie/popular' + API_KEY,
    title: 'Popular',
    type: 'Movies'
  },
  {
    link: API_URL + '/movie/top_rated' + API_KEY,
    title: 'Top Rated',
    type: 'Movies'
  },
  {
    link: API_URL + '/movie/now_playing' + API_KEY,
    title: 'Now Playing',
    type: 'Movies'
  },
  {
    link: API_URL + '/movie/upcoming' + API_KEY,
    title: 'Upcoming',
    type: 'Movies'
  },
  {
    link: API_URL + '/trending/tv/week' + API_KEY,
    title: 'Trending',
    type: 'TV Series'
  },
  {
    link: API_URL + '/tv/popular' + API_KEY,
    title: 'Popular',
    type: 'TV Series'
  },
  {
    link: API_URL + '/tv/top_rated' + API_KEY,
    title: 'Top Rated',
    type: 'TV Series'
  },
  {
    link: API_URL + '/tv/on_the_air' + API_KEY,
    title: 'On Air',
    type: 'TV Series'
  }
];

export { URLS, API_URL, API_KEY, IMAGE_URL };
