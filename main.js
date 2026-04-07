const routes = {
"/": home,
"/services": services,
"/pricing": pricing,
"/faq": faq,
"/contact": contact
};

function router() {
const path = window.location.pathname;
const view = routes[path] || home;
document.getElementById("app").innerHTML = view();
}

function nav(e){
if(e.target.matches("[data-link]")){
e.preventDefault();
history.pushState(null,null,e.target.href);
router();
}
}

window.addEventListener("popstate", router);
document.addEventListener("click", nav);

router();

// ---------------- PAGES ----------------

function home(){
return `
<section class="hero">
<h1>Build Faster <span>Grow Smarter</span></h1>
</section>
`;
}

function services(){
return `
<section class="section">
<h1>Services</h1>
<p>Web Design • Branding • Funnels</p>
</section>
`;
}

function pricing(){
return `
<section class="section">
<h1>Pricing</h1>
<div class="grid">
<div class="card">$49 Starter</div>
<div class="card">$99 Pro</div>
<div class="card">$199 Elite</div>
</div>
</section>
`;
}

function faq(){
return `
<section class="section">
<h1>FAQ</h1>
<p>Everything you need to know.</p>
</section>
`;
}

function contact(){
return `
<section class="section">
<h1>Contact</h1>
<p>DM us to get started.</p>
</section>
`;
}
