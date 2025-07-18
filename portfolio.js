// ------------function for open tab of about--------
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
     for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");


}

var sideMenu= document.getElementById("sidemenu");

function openmenu(){
    sideMenu.style.right="0";

}
function closemenu(){
    sideMenu.style.right="-200px";

}


// --------------send email--------



function sendEmail(){
    const templateParams={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        message:document.querySelector("#message").value,
    };
    emailjs.send("service_rwdn12p","template_4h426b9", templateParams)
    .then(() => alert("Email sent!!").catch(() => alert("Email not sent!!")));

}





