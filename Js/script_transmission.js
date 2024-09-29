// Menu

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navSections = document.getElementById('nav-sections');
  
    hamburger.addEventListener('click', function() {
        if (navSections.style.display === 'block') {
            navSections.style.display = 'none';
        } else {
            navSections.style.display = 'block';
        }
    });
  });