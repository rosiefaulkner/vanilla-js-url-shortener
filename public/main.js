// Information to reach API
const apiKey = "0a6cd7eb756d412a83dba7ead8dde45e";
const url = "https://api.rebrandly.com/v1/links";

// Some page elements
const inputField = document.querySelector("#input");
const shortenButton = document.querySelector("#shorten");
const responseField = document.querySelector("#responseField");

// Asynchronous functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      apikey: apiKey,
    },
    body: data,
  })
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      },
      (networkError) => {
        console.log(networkError.message);
      }
    )
    .then((jsonResponse) => {
      return renderResponse(jsonResponse);
    });
};

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

shortenButton.addEventListener("click", displayShortUrl);
