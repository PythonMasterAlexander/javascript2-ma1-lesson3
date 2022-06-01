import { url } from "./constants/api.js";
import { inputElement, containerElement } from "./constants/constants.js";

async function apiCall(url) {
  try {
    const response = await fetch(url);
    const apiResult = await response.json();

    for(let i = 0; i < apiResult.length; i++) {

      //display title
      const title = apiResult[i].title;

      //display author 
      const author = apiResult[i].author;

      //display publisher properties
      const published = apiResult[i].published;
      const publisher = apiResult[i].publisher;

      let displayItemsHtml = `
      <div class="main__api-content-container">
        <h1>${title}</h1>
        <h2>${author}</h2>
        <p>Published: ${published}</p>
        <p>Publisher: ${publisher}</p>
      </div>
      `;
      
      containerElement.innerHTML += displayItemsHtml;
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


