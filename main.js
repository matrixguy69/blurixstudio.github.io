function goWhatsApp(){
  window.open("https://wa.me/YOURNUMBER","_blank");
}

/* DISCORD */
function goDiscord(){
  window.open("https://discord.gg/YOURSERVER","_blank");
}

/* FAQ TOGGLE */
document.querySelectorAll(".faq").forEach(el=>{
  el.addEventListener("click",()=>{
    el.classList.toggle("active");
  });
});

/* COUNTERS */
const counters = document.querySelectorAll("[data-count]");
counters.forEach(counter=>{
  let target = +counter.dataset.count;
  let current = 0;

  let interval = setInterval(()=>{
    current += Math.ceil(target/60);
    counter.innerText = current;
    if(current >= target) clearInterval(interval);
  },20);
});

/* PARTICLES BACKGROUND */
const canvas = document.createElement("canvas");
canvas.id = "particles";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
let w,h;

function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

const particles = Array.from({length:80},()=>({
  x:Math.random()*w,
  y:Math.random()*h,
  r:Math.random()*2,
  vx:(Math.random()-0.5)*0.5,
  vy:(Math.random()-0.5)*0.5
}));

function animate(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle="rgba(0,255,136,0.5)";
  particles.forEach(p=>{
    p.x+=p.vx;
    p.y+=p.vy;

    if(p.x<0||p.x>w)p.vx*=-1;
    if(p.y<0||p.y>h)p.vy*=-1;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
