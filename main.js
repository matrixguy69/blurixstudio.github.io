function goWhatsApp(){
  window.open("https://wa.me/YOURNUMBER","_blank");
}

function goDiscord(){
  window.open("https://discord.gg/YOURSERVER","_blank");
}

/* LOADER */
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

/* CURSOR GLOW */
const cursor = document.createElement("div");
cursor.id = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", e=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* SCROLL REVEAL */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});

/* SIMPLE FAQ */
document.querySelectorAll(".faq").forEach(q=>{
  q.onclick = ()=>q.classList.toggle("open");
});
