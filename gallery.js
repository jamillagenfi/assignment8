// Define an array of gallery image URLs
const galleryImages = [
  "path/to/image1.jpg",
  "path/to/image2.jpg",
  "path/to/image3.jpg",
];
const thumbnails = document.querySelectorAll(".thumbnail");

// Function to preload gallery images
function preloadGalleryImages(images) {
  for (const image of images) {
    new Image().src = image;
  }
}

// Function to handle rollover for gallery images
function handleRollover(index) {
  // Assuming you have rollover images with _hover suffix
  thumbnails[index].setAttribute(
    "src",
    galleryImages[index].replace(".jpg", "_hover.jpg")
  );
}

// Function to handle rollout for gallery images
function handleRollout(index) {
  thumbnails[index].setAttribute("src", galleryImages[index]);
}

// Function to be called on page load
function onPageLoadGallery() {
  preloadGalleryImages(galleryImages);

  // Attach rollover and rollout events to each thumbnail
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("mouseover", () => handleRollover(index));
    thumbnail.addEventListener("mouseout", () => handleRollout(index));
  });
}

// Attach onPageLoadGallery function to the window's load event
window.onload = onPageLoadGallery;
