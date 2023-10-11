import { fetchBooksCategories } from './categories-api';
const categoriesList = document.querySelector('.js-categories');

async function renderCategories(data) {
  const markup = await data
    .map(({ list_name }) => ` <li class="categories__item">${list_name}</li>`)
    .join('');

  categoriesList.insertAdjacentHTML('beforeend', markup);
}

const data = await fetchBooksCategories();
await renderCategories(data);
