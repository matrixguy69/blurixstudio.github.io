function goWhatsApp(){
window.open("https://wa.me/YOURNUMBER","_blank");
}

document.querySelectorAll(".faq-q").forEach(btn=>{
btn.addEventListener("click",()=>{
btn.parentElement.classList.toggle("active");
});
});

window.addEventListener("load",()=>{
if(window.gsap){
gsap.from(".reveal",{y:30,opacity:0,duration:1,stagger:0.2});
}
});
