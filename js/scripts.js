//Menu
const sideMenu = document.getElementById("side-menu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-50%";
}

//Language Toggler
const check = document.querySelector(".toggler");
check.addEventListener("click", language);

const navAbout = document.querySelector(".nav-about");
const navSkills = document.querySelector(".nav-skills");
const navProjects = document.querySelector(".nav-projects");
const navContact = document.querySelector(".nav-contact");

const headerTitle = document.querySelector(".header-title");
const typedOut = document.querySelector(".typed-out");
const typedOut2 = document.querySelector(".typed-out--second");

const aboutTitle = document.querySelector(".about-title");
const aboutParagraph = document.querySelector(".about-paragraph");
const aboutParagraph2 = document.querySelector(".about-paragraph-2");

const skillTitle = document.querySelector(".skill-title");
const skillsTitle1 = document.querySelector(".skills-title-1");
const skillsTitle2 = document.querySelector(".skills-title-2");

const projectTitle = document.querySelector(".project-title");
const projectTitle1 = document.querySelector(".project-title-1");

const contactTitle = document.querySelector(".contact-title");

function language() {
    let id = check.checked;

    if (id == true) {
        navAbout.innerHTML = "About";
        navSkills.innerHTML = "Skills";
        navProjects.innerHTML = "Projects";
        navContact.innerHTML = "Contact";

        headerTitle.innerHTML = "Hi, I'm <span class='color'>Sergio</span><br />from Spain";
        typedOut.innerHTML = "Web Developer";
        typedOut2.innerHTML = "¡Let's work together!";

        aboutTitle.innerHTML = "About Me";
        aboutParagraph.innerHTML =
            "I was born on July 20, 2002 in the city of Toledo. Since I was a child I liked technology and computer science, so I decided to study a higher degree in Web Application Development. I'm currently in the second year of this degree, and I'm about to do a specialization in Artificial Intelligence and Big Data.";
        aboutParagraph2.innerHTML =
            "I love to learn, and I am always looking for new technologies to learn. I really enjoy being self-taught, and I am always looking for new ways to learn.";

        skillTitle.innerHTML = "Skills";
        skillsTitle1.innerHTML = "Languages";
        skillsTitle2.innerHTML = "Technologies";

        projectTitle.innerHTML = "Projects";
        projectTitle1.innerHTML = "This Portfolio";

        contactTitle.innerHTML = "Contact me";
    } else {
        location.href = "../index.html";
    }
}

//Scroll Reveal
ScrollReveal().reveal("nav");
ScrollReveal().reveal("#header", { delay: 500 });
ScrollReveal().reveal(".header-text", { delay: 1000 });
ScrollReveal().reveal("#about", { delay: 500 });
ScrollReveal().reveal(".about-col-1", { delay: 1000 });
ScrollReveal().reveal(".about-col-2", { delay: 1500 });
ScrollReveal().reveal("#skills", { delay: 500 });
ScrollReveal().reveal(".skills-items", { delay: 1000 });
ScrollReveal().reveal("#projects", { delay: 500 });
ScrollReveal().reveal(".work-list", { delay: 1000 });
ScrollReveal().reveal("#contact", { delay: 500 });
ScrollReveal().reveal(".contact-left", { delay: 1000 });
ScrollReveal().reveal(".contact-right", { delay: 1500 });
