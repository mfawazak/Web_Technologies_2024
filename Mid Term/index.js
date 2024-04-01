// Get the logo element
const logo = document.querySelector('h1 img');

// Listen for mouseover events on any image within the body
document.body.addEventListener('mouseover', function(event) {
  // If the target element is an image
  if (event.target.tagName === 'IMG') {
    // Set the logo's title to the image's alt attribute
    logo.title = event.target.alt;
  }
});