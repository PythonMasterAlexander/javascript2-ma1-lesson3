import { url } from "./constants/api.js";
import { inputElement } from "./constants/constants.js";

async function apiCall(url) {
  try {
    const response = await fetch(url);
    const apiResult = await response.json();

    console.log(apiResult);

    for(let i = 0; i < apiResult.length; i++) {

      //display title
      const title = apiResult[i].title;

      //display author 
      const author = apiResult[i].author;

      //display publisher properties
      const published = apiResult[i].published;
      const publisher = apiResult[i].publisher;

      console.log(publisher);

      if(i >= 10) {
        break;
      }

    }
  }

  catch(error) {
    console.log(error);
  }

}

inputElement.onkeyup = function(event) {
  const valueOnInputField = event.target.value.trim().toLowerCase();
  console.log(valueOnInputField);
};


apiCall(url);


