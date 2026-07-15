// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Typing Animation
new Typed("#typing", {
    strings: [
        "Aspiring Data Analyst",
        "Excel Enthusiast",
        "SQL Learner",
        "Power BI Developer",
        "Python Learner"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// Navbar Background Change
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(8,17,31,0.95)";
    } else {
        header.style.background = "rgba(8,17,31,0.75)";
    }
});

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Smooth Button Animation
document.querySelectorAll(".btn, .btn2").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-5px) scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) scale(1)";
    });

});

// Fade-in Effect
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".skill, .project-card").forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});

// Console Welcome
console.log("Welcome to Siddhesh Bhavsar Portfolio");
