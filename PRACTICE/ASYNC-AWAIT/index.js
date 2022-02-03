/*
async function ALWAYS returns a promise
await always waits until the promise is settled 

notice how hello world gets printed on the console after hello there.
Async/await allows us to run asynchronous code in a synchronous fashion. 
*/

const example = async () => {
  return 'hello there';
};

console.log(example()); // Promise {<fulfilled>: 'hello there'}

const waitIsOver = async () => {
  const result = await example();
  console.log(result);
  console.log('hello world');
};

waitIsOver(); // hello there

const users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'susan' },
  { id: 3, name: 'anna' },
];

const articles = [
  { userId: 1, articles: ['one', 'two', 'three'] },
  { userId: 2, articles: ['four', 'five', 'six'] },
  { userId: 3, articles: ['seven', 'eight', 'nine'] },
];

// first get the user Id
getUser('susan')
  .then((data) => console.log(data)) // {id: 2, name: 'susan'}
  .catch((err) => console.log(err));

// getUser('johnny')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err)); // No such user was found with name : johnny

// then pass that userId to get the articles of that user
getUser('susan')
  .then((data) => getArticles(data.id))
  .then((articles) => {
    console.log(articles); // ['four', 'five', 'six']
  });

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);

    if (user) {
      return resolve(user);
    } else {
      reject(`No such user was found with name : ${name}`);
    }
  });
}
function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId);

    if (userArticles) {
      return resolve(userArticles.articles);
    } else {
      return reject(`No article was found with that user ID: ${userId}`);
    }
  });
}

//_____________ ASYNC - AWAIT____________________//

// const getData = async () => {
//   try {
//     const user = await getUser('john');
//     console.log(user); // {id: 1, name: 'john'}
//     if (user) {
//       const articles = await getArticles(user.id);
//       console.log(articles); // ['one', 'two', 'three']
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// getData();

///__________________ refactor_____________________________//

const getData = async () => {
  try {
    const user = await getUser('john');
    const articles = await getArticles(user.id);
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
};
getData();
