/* menu nav show */
const nav = document.querySelector('.header nav')
const toggle = document.querySelector('nav .toggle')

toggle.addEventListener('click', () => {
  nav.classList.toggle('show')
})

//esconder menu ao clicar nos links
const links = document.querySelectorAll('nav ul li a')
for ( const link of links ) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

/* mudar background nav ao rolar página */
const header = document.querySelector('#home')
const headerHeight = header.offsetHeight

console.log(headerHeight)

function changeBackgroundNav() {
  if (window.scrollY >= 560) {
    nav.classList.add('bg-yellow')
  } else {
    nav.classList.remove('bg-yellow')
  }
}

/* back to top */

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', () => {
  changeBackgroundNav()
  backToTop()
})

