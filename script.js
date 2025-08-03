// Scroll navbar effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Booking form confirmation
const form = document.getElementById('bookingForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  confirmation.style.display = "block";
  setTimeout(() => {
    confirmation.style.display = "none";
    form.reset();
  }, 3000);
});
