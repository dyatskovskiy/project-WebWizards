import axios from 'axios';

export async function fetchTopBooks() {
  const response = await axios.get(
    'https://books-backend.p.goit.global/books/top-books'
  );
  return response.data;
}
