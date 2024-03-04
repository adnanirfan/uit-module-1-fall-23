const fetchData = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
};

fetchData()
  // .then((data) => data.json())
  .then((data) => {
    return data.json();
  })
  .then((message) => console.log("Message: ", message))
  .catch((error) => console.log("Error: ", error))
  .finally(() => console.log("Finally block"));
