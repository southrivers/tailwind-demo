const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

menuBtn.addEventListener('click', ()=> {
    // toggle的作用是有该类就移除，没有就添加
    menuBtn.classList.toggle('open')
    // 两个类分别进行移除和添加
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
})