// JavaScript for the update functionality
function showUpdateSlide() {
    document.getElementById("updateSlide").style.display = "flex";
}

function hideUpdateSlide() {
    document.getElementById("updateSlide").style.display = "none";
}
function showdeleteSlide(){
    document.getElementById("deleteSlide").style.display="flex";
}
function hidedeleteSlide(){
     document.getElementById("deleteSlide").style.display="none"
}
function deleteInformation(){
    hidedeleteSlide();
}

function updateInformation() {
   hideUpdateSlide();
}


function logout() {
    // Add your logout logic here
    console.log("User logged out");
}
