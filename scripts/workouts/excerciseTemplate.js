const container = document.querySelector(".workoutHolder");

const filePath = "../scraped.txt";
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
        alert(temp.name);
      });
      container.append(template);
    });
  })
  .catch((error) => {
    // handle any errors
    console.error(error);
  });
