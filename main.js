// SCROLL BAR
const bar=document.createElement("div");
bar.id="bar";
document.body.appendChild(bar);

window.onscroll=()=>{
  let h=document.documentElement;
  let p=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;
  bar.style.width=p+"%";
};

// CURSOR GLOW
const cursor=document.createElement("div");
cursor.style.cssText=`
position:fixed;width:18px;height:18px;
background:#00ff88;border-radius:50%;
filter:blur(10px);
pointer-events:none;
transform:translate(-50%,-50%);
z-index:9999;
`;
document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});

// MOBILE MENU (safe fallback)
function toggleMenu(){
  document.querySelector(".links").classList.toggle("active");
}
