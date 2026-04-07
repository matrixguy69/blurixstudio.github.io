// SCROLL PROGRESS BAR
const bar=document.createElement("div");
bar.className="scrollbar";
document.body.appendChild(bar);

window.onscroll=()=>{
  let h=document.documentElement;
  let scrolled=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;
  bar.style.width=scrolled+"%";
};

// MOBILE NAV
function toggleMenu(){
  document.querySelector(".links").classList.toggle("active");
}

// THEME TOGGLE (FIXED)
function toggleTheme(){
  document.body.classList.toggle("light");
}

// CURSOR GLOW (OPTIONAL)
const cursor=document.createElement("div");
cursor.style.cssText=`
position:fixed;width:20px;height:20px;
background:#00ff88;border-radius:50%;
filter:blur(12px);pointer-events:none;
transform:translate(-50%,-50%);
z-index:9999;
`;
document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});
