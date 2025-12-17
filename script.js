/**
 * Programmer: Shana Ibatuan
 * File Name: script.js
 * Description: Handles typewriter effect and contact form submission
 */

// ===== TypeWriter Effect =====
const text = "Hi, my name is Shana 👩‍💻";
const typewriterElement = document.getElementById("typewriter");
let index = 0;
const typingSpeed = 100; // ms per character
const pauseDuration = 3000; // wait 3 secs before repeating

function typeWriter() {
  if (index < text.length) {
    typewriterElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    // Finished typing, wait 3 seconds, then reset
    setTimeout(() => {
      typewriterElement.innerHTML = ""; // clear text
      index = 0; // reset index
      typeWriter(); // start typing again
    }, pauseDuration);
  }
}
window.onload = typeWriter;

// ===== Contact Form Handling =====

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Thanks ${name}! Your message has been sent.`);

  form.reset();
});

// ===== Scroll Reveal Sections ====
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;

    if (sectionTop < triggerPoint) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
