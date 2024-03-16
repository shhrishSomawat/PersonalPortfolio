
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  



//   sdsdnsdisdnisdnsnd
document.addEventListener('DOMContentLoaded', function () {
    animateName();
});

function animateName() {
    const nameElement = document.getElementById('animated-name');
    const name = nameElement.textContent.trim();
    const letters = name.split('');
    nameElement.innerHTML = '';

    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animation = `fadeIn 0.5s ${index * 0.1}s forwards`;
        nameElement.appendChild(span);
    });
}
