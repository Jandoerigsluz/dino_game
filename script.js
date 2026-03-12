const jan = document.getElementById("jan");
const maschiene = document.getElementById("maschiene");
const score = document.getElementById("score");
score.innerText = 0;

function jump() {
  jan.classList.add("jump-animation");
  setTimeout(() =>
    jan.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!jan.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {

  const janTop = parseInt(window.getComputedStyle(jan).getPropertyValue("top"));

  const maschieneLeft = parseInt(
    window.getComputedStyle(maschiene).getPropertyValue("left")
  );

  score.innerText = parseInt(score.innerText) + 1;

  if (maschieneLeft < 0) {
    maschiene.style.display = "none";
  } else {
    maschiene.style.display = "";
  }

  if (maschieneLeft < 50 && maschieneLeft > 0 && janTop > 150) {

    // Animation starten
    jan.classList.add("crash");

    // Maschine stoppen
    maschiene.style.animation = "none";

    setTimeout(() => {
      alert("You got a score of: " + score.innerText + "\n\nPlay again?");
      location.reload();
    }, 500);

  }

}, 50);
