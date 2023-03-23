const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

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

const handleVolume = (e) => {
  //To set audio volume, value must be between 0 and 1, 0 is 0%, 0.5 is 50%, and 1 is 100%
  audio.volume = e.target.value; // passing the range slider value as an audio volume
}

const showHideKeys = () => {
  // toggling hide class from each key on the checkbox click
  pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
  // if the pressed key is in the allKeys array, only call the playTune function
  if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);