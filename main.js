const menutoggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navLinks");

// Guard against missing elements (prevents errors if script loads before DOM)
if (menutoggle && navLinks) {
    menutoggle.addEventListener("click", () => {
        const isShown = navLinks.classList.toggle('show');
        // update aria-expanded for accessibility
        menutoggle.setAttribute('aria-expanded', isShown);
    });
}