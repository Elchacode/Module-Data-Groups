const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here
const catImage = document.getElementById("carousel-img");
const backwardButton = document.getElementById("backward-btn");
const forwardButton = document.getElementById("forward-btn");

function catCarousel(options) {
  let currentImageIndex = 0;

  backwardButton.addEventListener("click", function () {
    currentImageIndex--;

    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    catImage.src = images[currentImageIndex];
  });

  forwardButton.addEventListener("click", function () {
    currentImageIndex++;

    if (currentImageIndex > images.length - 1) {
      currentImageIndex = 0;
    }
    catImage.src = images[currentImageIndex];
  });
  const autoForwardButton = document.createElement("button");
  autoForwardButton.type = "button";
  autoForwardButton.id = "auto-forward";
  autoForwardButton.textContent = "Auto-Forward";
  document.body.appendChild(autoForwardButton);

  let autoForwardInterval;
  autoForwardButton.addEventListener("click", function () {
    autoForwardInterval = setInterval(function () {
      currentImageIndex++;
      if (currentImageIndex > images.length - 1) {
        currentImageIndex = 0;
      }
      catImage.src = images[currentImageIndex];
    }, 2000);
    autoBackwardButton.disabled = true;
    autoForwardButton.disabled = true;
  });

  const autoBackwardButton = document.createElement("button");
  autoBackwardButton.type = "button";
  autoBackwardButton.id = "auto-backward";
  autoBackwardButton.textContent = "Auto-Backward";
  document.body.appendChild(autoBackwardButton);
  let autoBackwardInterval;
  autoBackwardButton.addEventListener("click", function () {
    autoBackwardInterval = setInterval(function () {
      currentImageIndex--;
      if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
      }
      catImage.src = images[currentImageIndex];
    }, 2000);
    autoBackwardButton.disabled = true;
    autoForwardButton.disabled = true;
  });
  const stopButton = document.createElement("button");
  stopButton.type = "button";
  stopButton.id = "stop";
  stopButton.textContent = "Stop";
  document.body.appendChild(stopButton);

  stopButton.addEventListener("click", function () {
    clearInterval(autoForwardInterval);
    clearInterval(autoBackwardInterval);
    autoBackwardButton.disabled = false;
    autoForwardButton.disabled = false;
  });
}
catCarousel();
