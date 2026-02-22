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

/* PARTICLES (SAFE) */
const canvas = document.getElementById("particles");

if (canvas) {
  const ctx = canvas.getContext("2d");
  let w, h;

  function resize() {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const particles = [...Array(120)].map(() => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2 + 1,
    vx: (Math.random() - .5) * .4,
    vy: (Math.random() - .5) * .4
  }));

  (function animate() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(127,92,255,.6)";
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  })();
}

/* FAQ TOGGLE */
document.querySelectorAll(".faq-q").forEach(q=>{
  q.onclick=()=>{
    q.parentElement.classList.toggle("active");
  };
});

