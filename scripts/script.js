import { url } from "./constants/api.js";

const containerElement = document.querySelector("main__section-container")

async function apiCall(url) {

  try {
    const response = await fetch(url);
    const apiResult = await response.json();

    console.log(apiResult);
  }

  catch(error) {
    console.log(error);
  }

}

apiCall(url);