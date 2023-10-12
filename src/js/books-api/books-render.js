import { fetchTopBooks } from './books-api';

const topBooksData = await fetchTopBooks();
const booksContainerEl = document.querySelector('.books-container');
const booksTitleEl = document.querySelector('.books-title');

async function renderTopBooks(data) {
  booksTitleEl.textContent = 'Best Sellers Books';
  const topBooksMarkup = await Promise.all(
    data.map(async ({ books, list_name }) => {
      return `
        <ul class="books-category-list">
          <p>${list_name}</p>
          ${await renderCategoryOfBooks(books)}
        </ul>`;
    })
  );

  booksContainerEl.insertAdjacentHTML('beforeend', topBooksMarkup.join(''));
}

async function renderCategoryOfBooks(books) {
  const bookMarkup = await Promise.all(
    books.map(async ({ book_image, title, author, _id }) => {
      return `
      <a  id="${_id}" href="#" class="book_link">  
        <li>
          <img class="book-img" src="${book_image}" alt="book ${title}">
          <p class="book-title">${title}</p>
          <p class="book-author">${author}</p>
        </li>
      </a>`;
    })
  );
  return bookMarkup.join('');
}

renderTopBooks(topBooksData);

// const categoryLink = document.querySelector('.categories__list');

// categoryLink.addEventListener('click', onCategoryClick);

// function onCategoryClick() {

// }
