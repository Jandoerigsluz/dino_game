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
  const janTop = parseInt(window.getComputedStyle(jan)
    .getPropertyValue('top'));
  const maschieneLeft = parseInt(window.getComputedStyle(maschiene)
    .getPropertyValue('left'));
  score.innerText++;

  if (maschieneLeft < 0) {
    maschiene.style.display = 'none';
  } else {
    rmaschiene.style.display = ''
  }

  if (maschieneLeft < 50 && maschieneLeft > 0 && janTop > 150) {
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
    
  }
}, 50);
