// Discord & WhatsApp
function goDiscord(){
  window.open("https://discord.gg/YOURDISCORD","_blank");
}
function goWhatsApp(){
  window.open("https://wa.me/YOURNUMBER","_blank");
}

// Theme toggle
document.getElementById("themeToggle").onclick=()=>{
  document.body.classList.toggle("light");
};

// Side menu toggle
const sideMenu=document.getElementById("sideMenu");
document.getElementById("menuToggle").onclick=()=>{
  sideMenu.classList.toggle("active");
};

// Reveal animations
const reveals=document.querySelectorAll(".reveal");
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add("visible");
  });
},{threshold:.2});
reveals.forEach(r=>obs.observe(r));

// Count-up stats
document.querySelectorAll("[data-count]").forEach(el=>{
  let target=+el.dataset.count,count=0;
  let step=target/60;
  let i=setInterval(()=>{
    count+=step;
    el.textContent=Math.floor(count);
    if(count>=target){el.textContent=target;clearInterval(i);}
  },20);
});

// Pricing toggle monthly/yearly
document.getElementById("billingSwitch").onchange=e=>{
  document.querySelectorAll(".price").forEach(p=>{
    p.textContent="PKR "+(e.target.checked?p.dataset.year:p.dataset.month);
  });
};

// FAQ toggle
document.querySelectorAll(".faq-item h4").forEach(h=>{
  h.onclick=()=>{
    h.parentElement.classList.toggle("active");
  };
});

// Particle background
const c=document.getElementById("particles"),x=c.getContext("2d");
let w,h,ps;
function resizeCanvas(){w=c.width=innerWidth;h=c.height=innerHeight;}
resizeCanvas();
window.onresize=resizeCanvas;

ps=Array.from({length:120},()=>({
  x:Math.random()*w,
  y:Math.random()*h,
  r:Math.random()*2+1,
  vx:(Math.random()-.5)*0.5,
  vy:(Math.random()-.5)*0.5
}));

(function anim(){
  x.clearRect(0,0,w,h);
  x.fillStyle="rgba(127,92,255,0.6)";
  ps.forEach(p=>{
    p.x+=p.vx;p.y+=p.vy;
    if(p.x<0||p.x>w)p.vx*=-1;
    if(p.y<0||p.y>h)p.vy*=-1;
    x.beginPath();
    x.arc(p.x,p.y,p.r,0,Math.PI*2);
    x.fill();
  });
  requestAnimationFrame(anim);
})();


