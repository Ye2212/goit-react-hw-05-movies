import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '07e84016aeec599a5623106dff9619bb';

async function fetchMoviesBySearch(page, query) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${query}`;
  return await axios.get(`${url}`).then(response => response.data);
}

async function fetchTrendingMovies() {
  const trendingURL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${1}`;
  return await axios.get(`${trendingURL}`).then(response => response.data);
}

export { fetchMoviesBySearch, fetchTrendingMovies };

// export const fetchAPI = async (search, page) => {
//   const URL = 'https://pixabay.com/api/';
//   const options = {
//     params: {
//       key: '25212904-bc289a80479625a5a070d2ccf',
//       q: search,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       page: page,
//       per_page: 12,
//     },
//   };

//   const response = await axios.get(URL, options);
//   const mappedImages = response.data.hits.map(
//     ({ id, largeImageURL, webformatURL }) => ({
//       id,
//       largeImageURL,
//       webformatURL,
//     })
//   );

//   if (response.data.total === 0) {
//     return Promise.reject(new Error('Something get wrong!'));
//   }
//   return mappedImages;
// };
