const menubutton =document.querySelectorAll('.menu-button');
// menubutton.addEventListener('click',()=> {
//  document.body.classList.toggle('sidebar-hidden')
// })
menubutton.forEach(button=>{
 button.addEventListener('click',()=>{
  document.body.classList.toggle('sidebar-hidden')
 })
})