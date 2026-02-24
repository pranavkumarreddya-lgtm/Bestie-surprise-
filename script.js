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

// Start typing effect
typeEffect();

// 🔥 Mobile Music Play Fix
document.body.addEventListener("click", function () {
  const music = document.getElementById("bgMusic");
  if (music) {
    music.play();
  }
});
