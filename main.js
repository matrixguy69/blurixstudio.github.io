function goWhatsApp(){
  window.open("https://wa.me/YOURNUMBER","_blank");
}

/* COUNT UP */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll("[data-count]").forEach(el=>{
        let t=+el.dataset.count,c=0;
        let i=setInterval(()=>{
          c+=Math.ceil(t/60);
          el.textContent=c;
          if(c>=t){el.textContent=t;clearInterval(i);}
        },20);
      });
      obs.unobserve(e.target);
    }
  });
},{threshold:.4});

document.querySelectorAll(".hero").forEach(s=>obs.observe(s));

/* PARTICLES */
const c=document.getElementById("particles"),x=c.getContext("2d");
let w,h;
function r(){w=c.width=innerWidth;h=c.height=innerHeight}
r();onresize=r;
let p=[...Array(120)].map(()=>({
  x:Math.random()*w,
  y:Math.random()*h,
  r:Math.random()*2+1,
  vx:(Math.random()-.5)*.4,
  vy:(Math.random()-.5)*.4
}));
(function a(){
  x.clearRect(0,0,w,h);
  x.fillStyle="rgba(127,92,255,.6)";
  p.forEach(o=>{
    o.x+=o.vx;o.y+=o.vy;
    if(o.x<0||o.x>w)o.vx*=-1;
    if(o.y<0||o.y>h)o.vy*=-1;
    x.beginPath();
    x.arc(o.x,o.y,o.r,0,Math.PI*2);
    x.fill();
  });
  requestAnimationFrame(a);
})();

/* FAQ TOGGLE */
document.querySelectorAll(".faq-q").forEach(q=>{
  q.onclick=()=>{
    q.parentElement.classList.toggle("active");
  };
});
