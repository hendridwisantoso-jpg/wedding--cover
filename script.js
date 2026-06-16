const params =
new URLSearchParams(window.location.search);

const guest =
params.get("to") || "Tamu Undangan";

document.getElementById("guestName")
.textContent = guest;

document
.getElementById("openInvitation")
.addEventListener("click",()=>{

window.location.href =
"https://myinvitaiontrial.my.canva.site/undangankita";

});