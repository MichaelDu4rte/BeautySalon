/* -------- Menu --------

/* Abre e fecha menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
      nav.classList.toggle('show')
    })
}

/* Quando eu escolher um item dentro do menu, eu fecho o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}



/* -------- Carousel -------- */

// Carousel Swiper: efeito da imagem carousel
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})



/* -------- Scroll-Reveal -------- */

// ScrollReveal: efeito das postagens aparecendo

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
})

scrollReveal.reveal(`#home .image, #home .text, 
#about .image, #about .text, 
#services #header-fail, #services .card, 
#depositions #header-fail, #depositions .depositions, 
#contact .text, #contact .links,
footer .brand a, footer .brand p, footer .social`, { delay: 100})



/* -------- Functions --------

/* Mudar o header da pagina quando der scroll, adicionando uma sombra no header */
function changeHeaderWhenScroll() {

  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  }
  else {
    header.classList.remove('scroll')
  }
}

/* Back To Top */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 1200) {
    backToTopButton.classList.add('show')
  }
  else {
    backToTopButton.classList.remove('show')
  }
}

/* Section active menu */

const sections = document.querySelectorAll('main section[id]')
function activeMenuAtCurrentSection () {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    }
    else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* Add Functions in scroll event listener: 
Change Header and Back To Top */
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
  activeMenuAtCurrentSection()
})