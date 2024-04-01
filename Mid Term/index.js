document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.img');
    const imageName = document.getElementById('image-name');
    
    images.forEach(image => {
      image.addEventListener('mouseover', function() {
        const name = this.getAttribute('alt');
        imageName.textContent = name;
      });
      
      image.addEventListener('mouseout', function() {
        imageName.textContent = '';
      });
    });
  });