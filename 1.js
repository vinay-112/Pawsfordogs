const containerEl = document.querySelector(".container");

const careers = [ "Dog Lover", "Dog saver"," Dog rescuer","Cynophiles", "dogophiles","Dog helpers"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1> We are ${careers[careerIndex].slice(0, 1) === "I" ? "" : ""} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 500);
}