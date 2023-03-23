const pianoKeys = document.querySelectorAll(".piano-keys .key");

let allKeys = [],
audio = new Audio("tunes/a.wav"); // by default, audio src is "a" tune

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed
  audio.play(); // playing audio
  console.log(allKeys);

  const clickedKey = document.querySelector(`[data-key="${key}"]`); // Getting clicked key element
  clickedKey.classList.add("active"); // Adding active class to the clicked key element
  setTimeout(() => { // Removing active class after 150ms from the clicked key element
    clickedKey.classList.remove("active");
  }, 150);
}

pianoKeys.forEach(key => {
  allKeys.push(key.dataset.key); // Adding data-key value to the allKeys array
  // Calling playTune function with passing data-key value as an argument
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
  // if the pressed key is in the allKeys array, only call the playTune function
  if(allKeys.includes(e.key)) playTune(e.key);
}

document.addEventListener("keydown", pressedKey);