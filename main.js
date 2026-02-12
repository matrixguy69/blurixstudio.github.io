// Discord
function goDiscord(){
  window.open("https://discord.gg/YOURDISCORD","_blank");
}

// Theme
document.getElementById("themeToggle").onclick=()=>{
  document.body.classList.toggle("light");
};

// Mobile nav
const mobileNav=document.getElementById("mobileNav");
document.getElementById("menuToggle").onclick=()=>{
  mobileNav.classList.toggle("active");
};

// Scroll reveal
const reveals=document.querySelectorAll(".reveal");
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add("visible");
  });
},{threshold:.2});
reveals.forEach(r=>obs.observe(r));

// Count up
document.querySelectorAll("[data-count]").forEach(el=>{
  let target=+el.dataset.count,count=0;
  let step=target/60;
  let i=setInterval(()=>{
    count+=step;
    el.textContent=Math.floor(count);
    if(count>=target){el.textContent=target;clearInterval(i);}
  },20);
});

// Billing toggle
document.getElementById("billingSwitch").onchange=e=>{
  document.querySelectorAll(".price").forEach(p=>{
    p.textContent="$"+(e.target.checked?p.dataset.year:p.dataset.month);
  });
};

// Particles
const c=document.getElementById("particles"),x=c.getContext("2d");
let w,h,ps;
function rs(){w=c.width=innerWidth;h=c.height=innerHeight}
rs();onresize=rs;
ps=Array.from({length:90},()=>({
  x:Math.random()*w,y:Math.random()*h,
  r:Math.random()*2+1,
  vx:(Math.random()-.5)*.4,
  vy:(Math.random()-.5)*.4
}));
(function anim(){
  x.clearRect(0,0,w,h);
  x.fillStyle="rgba(127,92,255,.6)";
  ps.forEach(p=>{
    p.x+=p.vx;p.y+=p.vy;
    if(p.x<0||p.x>w)p.vx*=-1;
    if(p.y<0||p.y>h)p.vy*=-1;
    x.beginPath();x.arc(p.x,p.y,p.r,0,Math.PI*2);x.fill();
  });
  requestAnimationFrame(anim);
})();
