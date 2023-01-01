/**
 * Template for obj literals being parsed have the following look:
 * obj {
 *  name: str,
 *  bodyPart: str,
 *  equitment: str,
 *  instructions: strArr[],
 *  imgURL: str
 * }
 *
 * Current plan is to parse each str of txt file up to certain point, and use the obj literals to create
 * HTML which has event listeners etc
 */

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

    // log each line to the console
    lines.forEach((line) => {
      let template = htmlTemplate(JSON.parse(line));
      template.addEventListener("click", () => {
        let temp = JSON.parse(line);
        alert(temp.name);
      });
      container.append(template);
    });
    console.log("done");
  })
  .catch((error) => {
    // handle any errors
    console.error(error);
  });
