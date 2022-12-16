const baseURL = "https://pokeapi.co/api/v2";

export const get = async (url) => {
  try {
    const response = await fetch(`${baseURL}/${url}`);
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};

const baseURL_books =
  "https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter?maxResults=30";

export const getBooks = async (book) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=30`
    );
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};
