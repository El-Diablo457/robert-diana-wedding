// Background music & page transition handler
function openInvitation() {
    try {
        // 1. Attempt to play background music safely
        const bgMusic = document.getElementById("bgMusic");
        if (bgMusic) {
            bgMusic.play().catch(error => {
                console.log("Audio autoplay prevented by browser:", error);
            });
        }

        // 2. Hide landing cover page
        const landing = document.getElementById("landing");
        if (landing) {
            landing.style.display = "none";
        }

        // 3. Show the continuous scrollable invitation content
        const content = document.getElementById("invitationContent");
        if (content) {
            content.style.display = "flex";
        }

        // 4. Scroll smoothly to the top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
        console.error("Error opening invitation:", err);
    }
}

// RSVP Form Submission Handler
function submitRSVP() {
    const nameInput = document.getElementById("rsvpName");
    const thankYouName = document.getElementById("thankYouName");

    if (nameInput && thankYouName) {
        const guestName = nameInput.value.trim();
        if (guestName !== "") {
            thankYouName.textContent = `Thank you, ${guestName}!`;
        } else {
            thankYouName.textContent = "Thank you!";
        }
    }

    // Scroll down slightly to show the thank you message
    window.scrollBy({ top: 400, behavior: 'smooth' });
}