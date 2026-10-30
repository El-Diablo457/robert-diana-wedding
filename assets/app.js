// Function triggered when "Open Invitation" is clicked
function openInvitation() {
    // 1. Play background music safely
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
        bgMusic.play().catch(error => {
            console.log("Autoplay prevented or audio error:", error);
        });
    }

    // 2. Hide landing page and show the cover/invitation sequence
    showPage('cover'); // or 'invitation' if you prefer skipping straight to the card
}

// Universal page switcher function
function showPage(pageId) {
    // Hide all sections
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the requested section
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Scroll back to top smoothly when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
}