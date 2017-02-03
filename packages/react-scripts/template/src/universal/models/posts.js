exports.get = function () {
  return fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(r => r.json())
    .then(data => data.slice(0, 5));
};
