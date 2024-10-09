
// Get all navbar links
const navbarLinks = document.querySelectorAll('.nav-links a');

// Add event listener to each link
navbarLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the target section ID
    const sectionId = link.getAttribute('href');

    // Scroll to the target section
    if (sectionId.startsWith('#')) {
      document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      window.location.href = sectionId;
    }
  });
});

