// Edit these values before publishing the site.
const HOSTEL_CONFIG = {
  phone: "919092111166",
  whatsapp: "919092111166",
  address: "1, 5th Main Rd, New Colony, Chromepet, Chennai, Tambaram, Tamil Nadu 600044",
  mapsUrl: "https://maps.app.goo.gl/PDqav23wwQJYVnG56"
};

document.getElementById("year").textContent = new Date().getFullYear();

// Intro screen: click to enter. It also exits automatically after the progress animation.
const intro = document.getElementById("intro");
const enterSite = document.getElementById("enterSite");
function closeIntro() {
  if (!intro || intro.classList.contains("exit")) return;
  intro.classList.add("exit");
  document.body.classList.remove("intro-open");
}
document.body.classList.add("intro-open");
enterSite?.addEventListener("click", closeIntro);
window.setTimeout(closeIntro, 3800);

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

// Scroll reveal animations
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("in-view"));
}

// Back-to-top button
const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  backTop?.classList.toggle("visible", window.scrollY > 500);
});
backTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Contact links: change HOSTEL_CONFIG above to your real contact details.
const phoneLink = document.getElementById("phoneLink");
const whatsappLink = document.getElementById("whatsappLink");
const mapLink = document.getElementById("mapLink");
if (phoneLink) phoneLink.href = `tel:+${HOSTEL_CONFIG.phone}`;
if (whatsappLink) whatsappLink.href = `https://wa.me/${HOSTEL_CONFIG.whatsapp}?text=${encodeURIComponent("Hi, I would like to know about room availability at Nikilan Men's Hostel.")}`;
if (mapLink) mapLink.href = HOSTEL_CONFIG.mapsUrl;

// Room enquiry buttons open WhatsApp with the selected room type.
document.querySelectorAll(".room-enquire").forEach(button => {
  button.addEventListener("click", () => {
    const room = button.dataset.room || "a room";
    const message = `Hi, I would like to enquire about the ${room} at Nikilan Men's Hostel. Please share current availability, monthly rent, deposit and facilities.`;
    window.open(`https://wa.me/${HOSTEL_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
});

// Navigation active state
const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        mainNav?.querySelectorAll("a").forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => navObserver.observe(section));
}
