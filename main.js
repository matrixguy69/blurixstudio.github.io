function goWhatsApp(){
  window.open("https://wa.me/YOURNUMBER","_blank");
}

/* FAQ ACCORDION */
document.querySelectorAll(".faq").forEach(item=>{
  item.addEventListener("click",()=>{
    item.classList.toggle("open");
  });
});
