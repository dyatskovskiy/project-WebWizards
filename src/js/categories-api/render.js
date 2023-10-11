import { fetchBooksCategories } from './categories-api';
const categoriesList = document.querySelector('.js-categories');

async function renderCategories(data) {
  const markup = await data
    .map(({ list_name }) => {
      return `
      <li class="categories__item">
        <a href="#" class="categories__link link">
           ${list_name}
      </a>
    </li>`})
    .join('');

  categoriesList.insertAdjacentHTML('beforeend', markup);
}

const data = await fetchBooksCategories();
await renderCategories(data);
