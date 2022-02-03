/*

*/

const url = 'https://jsonplaceholder.typicode.com/users';

// console.log(fetch(url));

//_______ promise version __________ //

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// __________ async/await ____________ //

const fetchJSON = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchJSON();

const fetchError = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const msg = `There was an error ${response.status} ${response.statusText}`;
      throw new Error(msg);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const btn = document.querySelector('.btn');
btn.addEventListener('click', fetchError);
