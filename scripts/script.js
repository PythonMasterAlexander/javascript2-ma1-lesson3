import { url } from "./constants/api.js";

import { inputElement, containerElement } from "./constants/constants.js"



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