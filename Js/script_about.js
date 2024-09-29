// Forms
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
  
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
  
  
    let isValid = true;
  
  
    const name = document.getElementById('name').value;
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').textContent = 'Please enter your name.';
    }
  
  
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
    }
  
  
    const message = document.getElementById('message').value;
    if (message === '') {
        isValid = false;
        document.getElementById('messageError').textContent = 'Please enter your message.';
    }
  
  
    if (isValid) {
        alert('Message sent successfully!');
    }
  });
  
  const messageInput = document.getElementById('message');
  const charCount = document.getElementById('charCount');
  
  messageInput.addEventListener('input', function() {
    const currentLength = messageInput.value.length;
    charCount.textContent = `${currentLength}/250`;
  });

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