/* Found this on the internet, couldn't figure out how to make the transition smooth without JS, seems to be impossible? Maybe there is a way, nothing that looked right to me however.
*/
const images = [
  "./images/Spain-Background.jpg",
  "./images/France-Background.jpg",
  "./images/Italy-Background.jpg",
  "./images/Croatia-Background.jpg",
  "./images/Greece-Background.jpg",
  "./images/Turkey-Background.jpg",
];

let currentIndex = 0;

images.forEach((src) => {
  const img = new Image();
  img.src = src;
});

function changeBackground() {
  document.body.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

// Initial background set
changeBackground();

// Change background every 20 seconds
setInterval(changeBackground, 20000);
