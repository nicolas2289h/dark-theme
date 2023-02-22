const body = document.querySelector('body')
const toggle = document.querySelector('#toggle')

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active')
    body.classList.toggle('active')
})