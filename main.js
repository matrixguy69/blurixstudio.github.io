// MOBILE MENU FIX
function toggleMenu(){
  document.querySelector(".nav-links").classList.toggle("active");
}

// SMOOTH PAGE LOAD FEEL
window.addEventListener("load", () => {
  document.body.style.opacity = 1;
});

// SIMPLE ANIMATION TRIGGER
document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("mouseenter", ()=>{
    card.style.boxShadow = "0 0 25px #00ff88";
  });
});
