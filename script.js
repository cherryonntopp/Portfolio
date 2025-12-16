/**
 * Programmer(s): Shana Ibatuan 
 * File Name: script.js
 */

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

alert(`Thanks ${name}! Your message has been sent.`);


form.reset();
});