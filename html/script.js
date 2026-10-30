```javascript
// Menu de navigation mobile

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Fermer le menu après avoir choisi une rubrique

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
        menuToggle.textContent = "☰";
    });
});

// Mettre automatiquement l'année en cours dans le pied de page

document.getElementById("year").textContent = new Date().getFullYear();

// Préparer un message dans l'application de messagerie

const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const nom = formData.get("nom").trim();
    const email = formData.get("email").trim();
    const sujet = formData.get("sujet").trim();
    const message = formData.get("message").trim();

    const corps = [
        `Nom : ${nom}`,
        `E-mail : ${email}`,
        "",
        "Message :",
        message
    ].join("\n");

    const lien = document.createElement("a");

    lien.href =
        "mailto:?subject=" +
        encodeURIComponent(sujet) +
        "&body=" +
        encodeURIComponent(corps);

    lien.textContent = "Ouvrir mon application de messagerie";
    lien.className = "text-link";

    formNote.replaceChildren(
        document.createTextNode(
            "Votre message est prêt à être préparé. "
        ),
        lien
    );
});
```
