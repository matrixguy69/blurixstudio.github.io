// DISCORD
function goDiscord() {
  window.open("https://discord.gg/YOURDISCORD", "_blank");
}

// THEME
document.getElementById("themeToggle").onclick = () =>
  document.body.classList.toggle("light");

// MOBILE NAV
const mobileNav = document.getElementById("mobileNav");
document.getElementById("menuToggle").onclick = () =>
  mobileNav.classList.toggle("active");

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
},{threshold:0.2});
reveals.forEach(r => observer.observe(r));

// COUNT UP STATS
document.querySelectorAll("[data-count]").forEach(el => {
  let target = +el.dataset.count;
  let count = 0;
  let step = target / 60;
  const interval = setInterval(() => {
    count += step;
    el.textContent = Math.floor(count);
    if (count >= target) {
      el.textContent = target;
      clearInterval(interval);
    }
  }, 20);
});

// PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let w, h, particles;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.onresize = resize;
resize();

particles = Array.from({length:80},()=>({
  x:Math.random()*w,
  y:Math.random()*h,
  r:Math.random()*2+1,
  vx:(Math.random()-.5)*0.4,
  vy:(Math.random()-.5)*0.4
}));

function animate() {
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle="rgba(127,92,255,.6)";
  particles.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>w) p.vx*=-1;
    if(p.y<0||p.y>h) p.vy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
