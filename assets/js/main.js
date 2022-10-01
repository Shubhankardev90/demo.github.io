let menuBg=document.getElementById('menuBg')
let menuTrigger=document.getElementById('menuTrigger')
let menuContainer=document.getElementById('menuContainer')

menuTrigger.addEventListener('click',()=>{
    menuBg.style.left="0"
    menuContainer.style.left="0"
})
menuBg.addEventListener('click',()=>{
    menuBg.style.left="-100vw"
    menuContainer.style.left="-100vw"
})
