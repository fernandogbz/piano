const pianoKeys = document.querySelectorAll(".piano-keys .key");

pianoKeys.forEach(key => {
  // Calling playTune function with passing data-key value as an argument
  key.addEventListener("click", () => playTune(key.dataset.key));
  console.log(key.dataset.key);
})