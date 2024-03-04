const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Data is fetched");
      reject("ERROR: Data is not fetched");
    }, 3000);
  });
};

fetchData()
  .then((message) => {
    console.log("Message: ", message);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("Finally block");
  });

// const data = fetch("https://jsonplaceholder.typicode.com/todos/1");
