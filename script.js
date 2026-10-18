
"use strict";

// ==========================================
// HOSTEL CONFIGURATION
// ==========================================
const HOSTEL_CONFIG = {
  phone: "919092111166",
  whatsapp: "919092111166",

  address:
    "1, 5th Main Rd, New Colony, Chromepet, Chennai, Tambaram, Tamil Nadu 600044",

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Nikilan Men's Hostel, 1, 5th Main Rd, New Colony, Chromepet, Chennai, Tamil Nadu 600044"
    ),

  savedMapsUrl:
    "https://maps.app.goo.gl/PDqav23wwQJYVnG56"
};

// ==========================================
// FOOTER YEAR
// ==========================================
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ==========================================
// CONTACT AND LOCATION LINKS
// Declare each element only ONCE
// ==========================================
const mapLink = document.getElementById("mapLink");
const whatsappLink = document.getElementById("whatsappLink");
const phoneLink = document.getElementById("phoneLink");

// Google Maps
if (mapLink) {
  mapLink.href = HOSTEL_CONFIG.mapsUrl;
  mapLink.target = "_blank";
  mapLink.rel = "noopener noreferrer";
}

// WhatsApp
if (whatsappLink) {
  const message =
    "Hi, I would like to enquire about room availability at Nikilan Men's Hostel.";

  whatsappLink.href =
    "https://wa.me/" +
    HOSTEL_CONFIG.whatsapp +
    "?text=" +
    encodeURIComponent(message);

  whatsappLink.target = "_blank";
  whatsappLink.rel = "noopener noreferrer";
}

// Phone call
if (phoneLink) {
  phoneLink.href = "tel:+" + HOSTEL_CONFIG.phone;
}

// ==========================================
// WELCOME / INTRO SCREEN
// ==========================================
const intro = document.getElementById("intro");
const enterSite = document.getElementById("enterSite");

function closeIntro() {
  if (!intro || intro.classList.contains("exit")) {
    return;
  }

  intro.classList.add("exit");
  document.body.classList.remove("intro-open");
}

if (intro) {
  document.body.classList.add("intro-open");
}

if (enterSite) {
  enterSite.addEventListener("click", closeIntro);
}

// Automatically close the intro after 3.8 seconds
if (intro) {
  window.setTimeout(closeIntro, 3800);
}

// ==========================================
// MOBILE NAVIGATION
// ==========================================
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => {
    item.classList.add("in-view");
  });
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================
const backTop = document.getElementById("backTop");

if (backTop) {
  window.addEventListener("scroll", () => {
    backTop.classList.toggle(
      "visible",
      window.scrollY > 500
    );
  });

  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ==========================================
// ROOM ENQUIRY WHATSAPP BUTTONS
// ==========================================
document.querySelectorAll(".room-enquire").forEach((button) => {
  button.addEventListener("click", () => {
    const room = button.dataset.room || "a room";

    const message =
      "Hi, I would like to enquire about the " +
      room +
      " at Nikilan Men's Hostel. Please share current availability, monthly rent, deposit and facilities.";

    const whatsappUrl =
      "https://wa.me/" +
      HOSTEL_CONFIG.whatsapp +
      "?text=" +
      encodeURIComponent(message);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  });
});

// ==========================================
// ACTIVE NAVIGATION WHILE SCROLLING
// ==========================================
const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window && mainNav) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mainNav.querySelectorAll("a").forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") ===
                "#" + entry.target.id
            );
          });
        }
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );

  sections.forEach((section) => {
    navObserver.observe(section);
  });
}
