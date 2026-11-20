const stories = [
  {category:"WORLD AFFAIRS",date:"EDITORIAL PLACEHOLDER",title:"The forces behind the headlines",summary:"A sample editorial card demonstrating how the publication will connect events to the wider systems and incentives that shape them.",confidence:"FORMAT DEMONSTRATION",read:"4 MIN READ"},
  {category:"SCIENCE & TECHNOLOGY",date:"EDITORIAL PLACEHOLDER",title:"When discovery changes the map",summary:"A sample layout for research-led reporting, with clear links to original papers, institutions and supporting evidence.",confidence:"FORMAT DEMONSTRATION",read:"6 MIN READ"},
  {category:"OSINT",date:"EDITORIAL PLACEHOLDER",title:"Following the evidence trail",summary:"A sample investigative format showing how open-source material can be documented, cross-checked and presented with appropriate caveats.",confidence:"FORMAT DEMONSTRATION",read:"5 MIN READ"}
];
const grid=document.querySelector("#story-grid");
grid.innerHTML=stories.map(s=>`<article class="story-card"><div class="story-meta"><span>${s.category}</span><span>${s.date}</span></div><h3>${s.title}</h3><p>${s.summary}</p><div class="story-foot"><span class="tag">${s.confidence}</span><span>${s.read}</span></div></article>`).join("");
document.querySelector("#year").textContent=new Date().getFullYear();
const d=new Intl.DateTimeFormat("en-AU",{timeZone:"Australia/Perth",weekday:"short",day:"2-digit",month:"short",year:"numeric"}).format(new Date());
document.querySelector("#local-date").textContent=`PERTH · ${d.toUpperCase()}`;
document.querySelectorAll("[data-category]").forEach(link=>link.addEventListener("click",()=>{const label=link.dataset.category;const target=document.querySelector("#latest");target.querySelector(".section-note").textContent=`Selected section: ${label}. Topic filtering will be enabled when the live archive is connected.`;}));
