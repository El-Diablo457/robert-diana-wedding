function openInvitation() {
    // Play background music safely
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
        bgMusic.play().catch(error => {
            console.log("Audio play blocked or failed:", error);
        });
    }

    // Hide the landing page
    const landing = document.getElementById("landing");
    if (landing) {
        landing.style.display = "none";
    }

    // Reveal the continuous scrollable invitation container
    const content = document.getElementById("invitationContent");
    if (content) {
        content.style.display = "block";
    }

    // Smooth scroll to the top of the invitation
    window.scrollTo({ top: 0, behavior: 'smooth' });
}