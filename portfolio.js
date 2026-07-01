/*=========================================
  PORTFOLIO JAVASCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
      Typing Animation
    =========================*/
    const typingText = document.querySelector(".hero-text h2");

    const words = [
        "Frontend Developer",
        "Python Developer",
        "Web Designer",
        "SQL Learner"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingText.textContent = currentWord.substring(0, charIndex++);
        } else {

            typingText.textContent = currentWord.substring(0, charIndex--);
        }

        let speed = deleting ? 70 : 120;

        if (!deleting && charIndex === currentWord.length + 1) {

            deleting = true;
            speed = 1500;

        } else if (deleting && charIndex === 0) {

            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();


    /*=========================
      Mobile Menu
    =========================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });


    /*=========================
      Smooth Scroll
    =========================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({

                behavior: "smooth"

            });

        });

    });


    /*=========================
      Theme Toggle
    =========================*/

    const themeBtn = document.getElementById("theme-toggle");

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

        } else {

            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

        }

    });

});


/*=========================================
  Scroll Progress Bar
=========================================*/

window.addEventListener("scroll", () => {

    const progressBar = document.getElementById("progress-bar");

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*=========================================
  Scroll To Top Button
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/*=========================================
  Scroll Reveal Animation
=========================================*/

const revealElements = document.querySelectorAll(

    "section, .project-card, .service-card, .skill-card, .timeline-item, .stat-card"

);

const reveal = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        } else {

            element.style.opacity = "0";
            element.style.transform = "translateY(50px)";
        }

    });

};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


/*=========================================
  Active Navigation Highlight
=========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});

const stars = document.querySelectorAll(".rating span");
const rating = document.getElementById("rating");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {

        stars.forEach((s, i) => {
            s.style.opacity = i <= index ? "1" : "0.3";
        });

        rating.value = index + 1;
    });
});