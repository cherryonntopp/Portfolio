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


// ===== Projects =====

// Project Data 
const projects = {
  dl: {
    title: "BrainScan AI",
    date: "Summer 2025",
    description:
      "A deep learning project focused on classifying medical brain images using convolutional neural networks. The model achieved 94% accuracy and emphasizes accessibility through a simple interface.",
    media: `<video src="videos/BrainTumorDemo.mp4" controls autoplay muted loop width="100%"></video>`,
    links: `
      <a href="https://github.com/cherryonntopp/Brain-Tumor-Classification" target="_blank">GitHub</a>
      <a href="https://cherryonntopp-brain-tumor-demo.hf.space" target="_blank">Live Demo</a>
    `,
  },

  research: {
    title: "Image Classification of Cats Vs. Dogs",
    date: "Summer 2023",
    description:
      "This project was done under the STEM Active Learning Program at CSU Dominguez Hills. A research project analyzing corporate AI ethics frameworks and their real-world implications. Presented findings through a research poster.",
    media: `<img src="images/cat-and-dog.png" alt="Image of Cat and Dog">`,
    links: `
      <a href="images/ImageClassificationPoster.pdf" target="_blank">Read Paper</a>
    `,
  },

  other: {
    title: "Interdisciplinary Project",
    date: "Put date here",
    description:
      "A creative project exploring problem-solving beyond traditional software development.",
    media: `<img src="images/other-project.jpg">`,
    links: ``,
  },
};

// Open the modal function
function openProject(key) {
  const project = projects[key];

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-date").textContent = project.date;
  document.getElementById("modal-description").textContent = project.description;
  document.getElementById("modal-media").innerHTML = project.media;
  document.getElementById("modal-links").innerHTML = project.links;

  document.getElementById("project-modal").style.display = "block";
}

// Close the modal function
function closeProject() {
  document.getElementById("project-modal").style.display = "none";
}

// Close when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("project-modal");
  if (e.target === modal) {
    closeProject();
  }
});


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
