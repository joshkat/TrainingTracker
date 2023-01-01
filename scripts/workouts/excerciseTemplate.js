class Excercise {
  constructor(name, bodyPart, equitment, instructions, imgURL) {
    //all of these are required!
    this.name = name;
    this.bodyPart = bodyPart;
    this.equitment = equitment;
    this.instructions = instructions;
    this.imgURL = imgURL;
  }
}

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

let temp2 = {
  name: "Palms-down wrist curl over bench",
  bodyPart: "Forearms",
  equitment: "Barbell",
  grabInstructions: [
    "Start out by placing a barbell on one side of a flat bench.",
    "Kneel down on both of your knees so that your body is facing the flat bench.",
    "Use your arms to grab the barbell with a pronated grip (palms down) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge.",
    "Start out by curling your wrist upwards and exhaling.",
    "Slowly lower your wrists back down to the starting position while inhaling.",
    "Your forearms should be stationary as your wrist is the only movement needed to perform this exercise.",
    "Repeat for the recommended amount of repetitions.",
  ],
};
console.log(typeof temp);
