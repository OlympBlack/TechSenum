  const gallery = document.getElementById("galleryList");

  function scrollGallery(direction) {
    gallery.scrollBy({
      left: direction * 400,
      behavior: "smooth"
    });
  }

  // défilement automatique
  setInterval(() => {
    gallery.scrollBy({
      left: 400,
      behavior: "smooth"
    });
  }, 3000);


  const navbar = document.querySelector('.nav-enhanced');
window.addEventListener('scroll', () => {
if (window.scrollY > 50) navbar.classList.add('scrolled');
else navbar.classList.remove('scrolled');
});