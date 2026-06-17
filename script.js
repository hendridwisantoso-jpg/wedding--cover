const params =
new URLSearchParams(window.location.search);

const nama =
params.get("nama") || "Tamu Undangan";

const instansi =
params.get("instansi") || "";

document.getElementById("guestName")
.textContent = nama;

if(instansi){
    document.getElementById("guestInstansi")
    .textContent = instansi;
}else{
    document.getElementById("guestInstansi")
    .style.display = "none";
}

document
.getElementById("openInvitation")
.addEventListener("click",()=>{

window.location.href =
"https://myinvitaiontrial.my.canva.site/undangankita";

});
