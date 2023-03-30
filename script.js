// Fetching data from a specified URL and returning a Promise that resolves to JSON data
const getData = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error fetching data");
    })
    .catch((error) => console.log(error));
};
// Sends data to a URL as a POST request and returns a Promise that resolves to JSON data
const sendData = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error sending data");
    })
    .catch((error) => console.log(error));
};
// Gets data from a JSON file, sends it to a specified URL and logs the response
getData("db.json")
  .then((data) => {
    sendData("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error));
