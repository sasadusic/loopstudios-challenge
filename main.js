const hamburger = document.querySelector('#hamburger')
const links = document.querySelector('.links')
const header = document.querySelector('.header')
const navbar = document.querySelector('.navbar')

const linkS = document.querySelectorAll('.link')
const footerLinks = document.querySelectorAll('.footer-link')
hamburger.onclick = () => {
    hamburger.classList.toggle('close')
    links.classList.toggle('active-links')
    header.classList.toggle('active-header')
    navbar.classList.toggle('active-navbar')
}

linkS.forEach(link => {
    link.onclick = () => {
        linkS.forEach(l => {
            l.classList.remove('active-link')
        })
        link.classList.add('active-link')
    }
})
footerLinks.forEach(flink => {
    flink.onclick = () => {
        footerLinks.forEach(fl => {
            fl.classList.remove('active-f-link')
        })
        flink.classList.add('active-f-link')
    }
})