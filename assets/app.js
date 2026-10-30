const music = document.getElementById("bgMusic");
function showPage(pageId){
document.querySelectorAll(".page")
.forEach(page => page.classList.remove("active"));
document.getElementById(pageId)
.classList.add("active");
}
function openInvitation(){
const guest =
document.getElementById("guestName").value ||
"Honored Guest";
localStorage.setItem("guest", guest);
document
.getElementById("envelope")
.classList.add("open");
music.play().catch(()=>{});
setTimeout(() => {
document.getElementById("guestGreeting")
.innerHTML = `Welcome, ${guest}`;
typeWriter("Robert & Diana");
showPage("cover");
},1000);
}
function typeWriter(text){
const target =
document.getElementById("typedName");
target.innerHTML = "";
let i = 0;
const timer = setInterval(() => {
target.innerHTML += text.charAt(i);
i++;
if(i >= text.length){
clearInterval(timer);
}
},120);
}
function updateCountdown(){
const wedding =
new Date("2026-11-28T11:00:00");
const diff =
wedding - new Date();
if(diff <= 0) return;
const days =
Math.floor(diff / 86400000);
const hours =
Math.floor((diff % 86400000)/3600000);
const mins =
Math.floor((diff % 3600000)/60000);
document.getElementById("countdown")
.innerHTML =
`${days} Days ${hours} Hours ${mins} Minutes`;
}
setInterval(updateCountdown,1000);
function openLightbox(src){
document.getElementById("lightbox")
.style.display="flex";
document.getElementById("lightboxImage")
.src=src;
}
document
.getElementById("closeLightbox")
.addEventListener("click", () => {
document.getElementById("lightbox")
.style.display="none";
});
function submitRSVP(){
const name =
document.getElementById("rsvpName").value;
const mobile =
document.getElementById("rsvpMobile").value;
const attendance =
document.getElementById("attendance").value;
const guests =
document.getElementById("guestCount").value;
const message =
document.getElementById("message").value;
const csv =
`Name,Mobile,Attendance,Guests,Message
${name},${mobile},${attendance},${guests},${message}`;
const blob =
new Blob([csv],{type:"text/csv"});
const link =
document.createElement("a");
link.href =
URL.createObjectURL(blob);
link.download = "RSVP.csv";
link.click();
document.getElementById("thankYouName")
.innerText = name;
showPage("thanks");
}
/* particles /
for(let i=0;i<60;i++){
const particle =
document.createElement("div");
particle.className = "particle";
particle.style.left =
Math.random()100 + "vw";
particle.style.animationDuration =
(5 + Math.random()8) + "s";
document.body.appendChild(particle);
}
/* rose petals /
for(let i=0;i<20;i++){
const petal =
document.createElement("div");
petal.className = "petal";
petal.innerHTML = "🌹";
petal.style.left =
Math.random()100 + "vw";
petal.style.fontSize =
(18 + Math.random()15) + "px";
petal.style.animationDuration =
(10 + Math.random()10) + "s";
document.body.appendChild(petal);
}
updateCountdown();