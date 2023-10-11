import axios from 'axios';

//fetch 
//
export async function fetchBooksCategories() {
  const response = await axios.get(
    'https://books-backend.p.goit.global/books/category-list'
  );
  return response.data;
}
