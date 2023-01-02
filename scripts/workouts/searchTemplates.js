const input = document.querySelector("input");

// create a function to redraw the container element
const redrawContainer = () => {
  // clear the container element
  container.innerHTML = "";

  // send a request for the text file to the server
  fetch(filePath)
    .then((response) => {
      // return the response as a text string
      return response.text();
    })
    .then((fileContents) => {
      // split the file contents into an array of lines
      const lines = fileContents.split("\n");
      lines.forEach((line) => {
        if (line.includes(input.value)) {
          let template = htmlTemplate(JSON.parse(line));
          template.addEventListener("click", () => {
            let temp = JSON.parse(line);
            openInstructions(temp);
          });
          container.append(template);
        }
      });
    })
    .catch((error) => {
      // handle any errors
      console.error(error);
    });
};

// add an event listener to the input element to redraw the container element on input
input.addEventListener("input", redrawContainer);
