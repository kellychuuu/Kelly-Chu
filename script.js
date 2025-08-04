// Animate nav links on hover
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("animate__rubberBand", "animate__animated");
  });
  link.addEventListener("mouseleave", () => {
    link.classList.remove("animate__rubberBand", "animate__animated");
  });
});

// Scroll reveal for each section
const sections = document.querySelectorAll("section");
const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__fadeInUp", "animate__animated");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  sectionObserver.observe(section);
});

// Background floating hearts
const createHeart = () => {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${3 + Math.random() * 2}s`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
};

setInterval(createHeart, 1000);

// Animate skill items one-by-one as they scroll in
document.addEventListener("DOMContentLoaded", () => {
  const skillItems = document.querySelectorAll(".skill-item");

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = 1;
        }, index * 300);
      }
    });
  }, { threshold: 0.5 });

  skillItems.forEach(item => skillObserver.observe(item));
});
