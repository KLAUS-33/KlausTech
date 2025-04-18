// Typing Animation using Typed.js
var typed = new Typed(".typing", {
    strings: ["AI Engineer", "Data Analyst", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Navigation and Sidebar Functionality
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

// Add click event to navigation items
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        // Remove 'back-section' class from all sections
        for (let j = 0; j < totalSection; j++) {
            allSection[j].classList.remove("back-section");
        }

        // Remove 'active' class from all nav links
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }

        // Add 'active' class to clicked nav link
        this.classList.add("active");

        // Show the corresponding section
        showSection(this);

        // Close sidebar on mobile if open
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

// Show the section based on the clicked nav link
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

// Sidebar Toggler for Mobile
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}
//togler
document.addEventListener('DOMContentLoaded', () => {
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');

    if (navToggler && aside) {
        navToggler.addEventListener('click', () => {
            aside.classList.toggle('open');
            navToggler.classList.toggle('open');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');

    if (navToggler && aside) {
        // Toggle sidebar on click
        navToggler.addEventListener('click', () => {
            aside.classList.toggle('open');
            navToggler.classList.toggle('open');
        });

        // Hide sidebar when scrolling down, show when scrolling up
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                aside.classList.remove('open');
                aside.classList.add('hide-on-scroll');
                navToggler.classList.remove('open');
            } else {
                // Scrolling up
                aside.classList.remove('hide-on-scroll');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        });
    }
});