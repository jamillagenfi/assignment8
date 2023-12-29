// Define an array of banner images
const bannerImages = [
  "images/banner1.jpg",
  "images/banner2.jpg",
  "images/banner3.jpg",
];
let currentBannerIndex = 0;

// Function to preload images
function preloadImages(images) {
  for (const image of images) {
    new Image().src = image;
  }
}

// Function to set the banner image
function setBannerImage(index) {
  const bannerImage = document.getElementById("bannerImage");
  bannerImage.src = bannerImages[index];
}

// Function to cycle the homepage banner
function cycleBanner() {
  setBannerImage(currentBannerIndex);
  currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
}

// Function to be called on page load
function onPageLoad() {
  preloadImages(bannerImages);
  cycleBanner(); // Initial banner setup
  setInterval(cycleBanner, 3000); // Set interval to cycle every 3 seconds
}

// Attach onPageLoad function to the window's load event
window.onload = onPageLoad;
