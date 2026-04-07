// MOBILE MENU
function toggleMenu(){
  document.querySelector(".nav-links").classList.toggle("active");
}

// FAQ TOGGLE
function toggleFAQ(el){
  el.classList.toggle("open");
}

// LEAD CAPTURE (CRM STYLE)
function sendLead(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let leads = JSON.parse(localStorage.getItem("leads") || "[]");
  leads.push({name,email});
  localStorage.setItem("leads", JSON.stringify(leads));

  alert("Lead saved!");
}
