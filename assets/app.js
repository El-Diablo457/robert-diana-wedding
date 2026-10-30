// Background Music
const bgMusic = document.getElementById("bgMusic");
// Show Page Function
function showPage(pageId) {
    document.querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add("active");
    }
}
// Open Invitation
function openInvitation() {
    const guestInput =
        document.getElementById("guestName");
    const guest =
        guestInput && guestInput.value.trim()
            ? guestInput.value.trim()
            : "Honored Guest";
    // Save guest name
    localStorage.setItem("guestName", guest);
    // Play music
    if (bgMusic) {
        bgMusic.play().catch(error => {
            console.log("Audio autoplay blocked:", error);
        });
    }
    // Personal greeting
    const greeting =
        document.getElementById("guestGreeting");
    if (greeting) {
        greeting.textContent = `Welcome, ${guest}`;
    }
    // Start typing effect
    typeWriter("Robert & Diana");
    // Show cover page
    showPage("cover");
}
// Typing Effect
function typeWriter(text) {
    const target =
        document.getElementById("typedName");
    if (!target) return;
    target.innerHTML = "";
    let i = 0;
    const timer = setInterval(() => {
        target.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(timer);
        }
    }, 100);
}
// Countdown Timer
function updateCountdown() {
    const countdown =
        document.getElementById("countdown");
    if (!countdown) return;
    // Update this wedding date if needed
    const weddingDate =
        new Date("2027-02-14T11:00:00");
    const now = new Date();
    const diff = weddingDate - now;
    if (diff <= 0) {
        countdown.innerHTML =
            "Today is the Wedding Day!";
        return;
    }
    const days =
        Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours =
        Math.floor(
            (diff % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );
    const minutes =
        Math.floor(
            (diff % (1000 * 60 * 60))
            / (1000 * 60)
        );
    countdown.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes`;
}
// RSVP Form
function submitRSVP() {
    const name =
        document.getElementById("rsvpName")?.value || "";
    const mobile =
        document.getElementById("rsvpMobile")?.value || "";
    const attendance =
        document.getElementById("attendance")?.value || "";
    const guestCount =
        document.getElementById("guestCount")?.value || "";
    const message =
        document.getElementById("message")?.value || "";
    const csvData =
`Name,Mobile,Attendance,Guests,Message
"${name}","${mobile}","${attendance}","${guestCount}","${message}"`;
    const blob =
        new Blob([csvData], {
            type: "text/csv"
        });
    const link =
        document.createElement("a");
    link.href =
        URL.createObjectURL(blob);
    link.download =
        "Wedding-RSVP.csv";
    link.click();
    const thankYouName =
        document.getElementById("thankYouName");
    if (thankYouName) {
        thankYouName.textContent = name;
    }
    showPage("thanks");
}
// Lightbox
function openLightbox(imageSrc) {
    const lightbox =
        document.getElementById("lightbox");
    const image =
        document.getElementById("lightboxImage");
    if (!lightbox || !image) return;
    image.src = imageSrc;
    lightbox.style.display = "flex";
}
document.addEventListener("DOMContentLoaded", () => {
    const closeButton =
        document.getElementById("closeLightbox");
    const lightbox =
        document.getElementById("lightbox");
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            lightbox.style.display = "none";
        });
    }
    if (lightbox) {
        lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }
    // Load guest from URL
    const params =
        new URLSearchParams(window.location.search);
    const guest =
        params.get("guest");
    if (guest) {
        const guestBox =
            document.getElementById("guestName");
        if (guestBox) {
            guestBox.value = guest;
        }
    }
    // Countdown
    updateCountdown();
    setInterval(updateCountdown, 60000);
});