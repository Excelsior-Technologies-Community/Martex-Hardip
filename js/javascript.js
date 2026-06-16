const darkBtn = document.getElementById("darkModeToggle");

// Load Saved Mode
if(localStorage.getItem("darkMode") === "enabled"){
    document.body.classList.add("dark-mode");
    darkBtn.innerHTML = "☀️ Light Mode";
}

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("darkMode","enabled");
        darkBtn.innerHTML = "☀️ Light Mode";
    }else{
        localStorage.setItem("darkMode","disabled");
        darkBtn.innerHTML = "🌙 Dark Mode";
    }

});





const styleChanger = document.getElementById("styleChanger");
const toggleChanger = document.getElementById("toggleChanger");

toggleChanger.addEventListener("click", function () {
    styleChanger.classList.toggle("active");
});


function setActiveStyleSheet(title) {

    const links = document.getElementsByTagName("link");

    for (let i = 0; i < links.length; i++) {

        if (
            links[i].getAttribute("rel") &&
            links[i].getAttribute("title")
        ) {

            links[i].disabled = true;

            if (links[i].getAttribute("title") === title) {
                links[i].disabled = false;
            }
        }
    }
}


function chooseStyle(styleName, days) {

    setActiveStyleSheet(styleName);

    localStorage.setItem("selectedTheme", styleName);
}


function resetTheme() {

    localStorage.removeItem("selectedTheme");

    setActiveStyleSheet("pink-theme");
}


window.onload = function () {

    const savedTheme =
        localStorage.getItem("selectedTheme");

    if (savedTheme) {
        setActiveStyleSheet(savedTheme);
    }
};

// ================================
// MOBILE MENU
// ================================
const menuToggle = document.getElementById("wsnavtoggle");
const menu = document.getElementById("wsmainfull");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("open");
        menuToggle.classList.toggle("open");
    });
}

// ABOUT DROPDOWN
const aboutBtn = document.getElementById("toggle-about");
const aboutMenu = document.getElementById("sub-about");

if (aboutBtn && aboutMenu) {
    aboutBtn.addEventListener("click", function () {
        aboutMenu.classList.toggle("mobile-open");
        this.classList.toggle("ws-activearrow");
    });
}

// PAGES MEGA MENU
const pagesBtn = document.getElementById("toggle-pages");
const pagesMenu = document.getElementById("mega-pages");

if (pagesBtn && pagesMenu) {
    pagesBtn.addEventListener("click", function () {
        pagesMenu.classList.toggle("mobile-open");
        this.classList.toggle("ws-activearrow");
    });
}

// HEADER SCROLL EFFECT
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (!header) return;

    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


const swiper = new Swiper(".mySwiper", {

    loop: true,

    spaceBetween: 30,

    grabCursor: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {

        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        992: {
            slidesPerView: 3
        }
    }
});



document.getElementById('wsmenu-close').addEventListener('click', function() {
    var mainMenu = document.querySelector('.wsmainfull');
    var hamburgerToggle = document.getElementById('wsnavtoggle');
    
    
    if(mainMenu) {
        mainMenu.classList.remove('open');
    }
   
    if(hamburgerToggle) {
        hamburgerToggle.classList.remove('wsactive');
    }
});