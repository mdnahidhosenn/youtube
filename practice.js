// let manubutton =document.querySelectorAll(".manu-button");
// manubutton.forEach(button => {
//   button.addEventListener('click',() => {
//     document.body.classList.toggle('sidebar-hidden')
//   })
// })
// const screenOverlay = document.querySelector(".main-layout .screen-overlay");
// screenOverlay.addEventListener("click", () => {
//   document.body.classList.toggle("sidebar-hidden");
// });
// if (window.innerWidth >= 768) {
//   document.body.classList.remove("sidebar-hidden");
// }
const menuButtons = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".main-layout .screen-overlay");


// Toggle sidebar visibility when menu buttons are clicked
menuButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });
});

// Toggle sidebar visibility when screen overlay is clicked
screenOverlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hidden");
});

// Initialize dark mode based on localStorage


// Toggle dark mode when theme button is clicked


// Show sidebar on large screens by default
if (window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hidden");
}