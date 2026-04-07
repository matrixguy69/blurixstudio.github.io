// THEME TOGGLE
function toggleTheme(){
  const t=document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme",t==="light"?"dark":"light");
}

// MOBILE MENU
function toggleMenu(){
  document.querySelector(".links").classList.toggle("active");
}

// SOUND HOVER (OPTIONAL)
const hoverSound=new Audio("https://assets.mixkit.co/sfx/preview/mixkit-interface-click-1126.mp3");

document.querySelectorAll(".card").forEach(c=>{
  c.addEventListener("mouseenter",()=>{
    hoverSound.play();
  });
});

// PAGE FADE
window.onload=()=>{
  document.body.classList.add("fade");
};

// MODAL SYSTEM
function openModal(text){
  document.getElementById("modal-text").innerText=text;
  document.getElementById("modal").style.display="flex";
}
function closeModal(){
  document.getElementById("modal").style.display="none";
}
