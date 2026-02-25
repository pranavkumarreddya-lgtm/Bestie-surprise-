let text = "Hacking Complete...";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("loading").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(showSlideshow, 2000);
  }
}

function showSlideshow() {
  document.getElementById("hacker").classList.add("hidden");
  document.getElementById("slideshow").classList.remove("hidden");
}

let images = ["pic1.jpg", "pic2.jpg", "pic3.jpg"];
let current = 0;

function nextSlide() {
  current++;
  if (current < images.length) {
    document.getElementById("slide").src = images[current];
  } else {
    document.getElementById("slideshow").classList.add("hidden");
    document.getElementById("secret").classList.remove("hidden");
  }
}

function showMessage() {
  document.getElementById("secret").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
}

typeEffect();


// 🎵 MUSIC
let musicStarted = false;
function startMusicOnce() {
  if (!musicStarted) {
    const music = document.getElementById("bgMusic");
    if (music) {
      music.play();
      musicStarted = true;
    }
  }
}
document.addEventListener("click", startMusicOnce);


// ❤️ SMOOTH HEART RAIN (Controlled)
let heartCount = 0;

function createHeart() {
  if (heartCount > 20) return; // limit max hearts

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
  heart.style.fontSize = (Math.random() * 10 + 15) + "px";

  document.body.appendChild(heart);
  heartCount++;

  setTimeout(() => {
    heart.remove();
    heartCount--;
  }, 6000);
}

// slower interval
setInterval(createHeart, 800);
