const filePath = "../scraped.txt";
const container = document.querySelector(".workoutHolder");

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
      let template = htmlTemplate(JSON.parse(line));
      template.addEventListener("click", () => {
        let temp = JSON.parse(line);
        openInstructions(temp);
      });
      container.append(template);
    });
  })
  .catch((error) => {
    // handle any errors
    console.error(error);
  });
