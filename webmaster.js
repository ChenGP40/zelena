function triggerDropdown1() {
    let nav1 = document.getElementById("1");
    let nav2 = document.getElementById("2");
    let nav3 = document.getElementById("3");
    nav1.classList.add("show");
    nav2.classList.remove("show");
    nav3.classList.remove("show");
}
function triggerDropdown2() {
    let nav1 = document.getElementById("1");
    let nav2 = document.getElementById("2");
    let nav3 = document.getElementById("3");
    nav1.classList.remove("show");
    nav2.classList.add("show");
    nav3.classList.remove("show");
}
function triggerDropdown3() {
    let nav1 = document.getElementById("1");
    let nav2 = document.getElementById("2");
    let nav3 = document.getElementById("3");
    nav1.classList.remove("show");
    nav2.classList.remove("show");
    nav3.classList.add("show");
}
function closeDropdowns() {
    let nav1 = document.getElementById("1");
    let nav2 = document.getElementById("2");
    let nav3 = document.getElementById("3");
    nav1.classList.remove("show");
    nav2.classList.remove("show");
    nav3.classList.remove("show");
}

function toDatabase() {
    location.href="./info.html";
    location.reload;
}
function modalPopup() {
    setTimeout(modalTrigger, 3000);

}
function modalTrigger() {
    let modal = document.getElementById("newsletterModal");
    let overlay = document.getElementById("newsletterOverlay");
    modal.classList.add("show");
    overlay.classList.add("show");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
function closeModal() {
    let modal = document.getElementById("newsletterModal");
    let overlay = document.getElementById("newsletterOverlay");
    modal.classList.remove("show");
    overlay.classList.remove("show");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}