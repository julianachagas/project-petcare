onScroll()
window.addEventListener('scroll', onScroll)

function onScroll() {
  changeHeaderStyleOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //define the target line, middle of the viewport
  const targetLine = scrollY + innerHeight / 2
  //get which section is active:
  //verify if the top of section is before the target line
  //verify if the bottom of the section is after the target line
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionBottom = sectionTop + sectionHeight
  const sectionId = section.getAttribute('id')
  //get the a element that has href = sectionId
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  //targetLine has to be between the top and bottom of the section
  if (sectionTop <= targetLine && sectionBottom >= targetLine) {
    menuElement.classList.add('active')    
  } else {
    menuElement.classList.remove('active')    
  }
}

function changeHeaderStyleOnScroll() {
  let header = document.getElementById('header')
  if (scrollY > 0) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  let backToTopButton = document.getElementById('backToTopButton')
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  '#home, #home .stat, #services header, #services .service-item, #about header, #about .content, #about img, #testimonials header, .testimonials-wrapper, #testimonials .banner, #contact header, #contact .content, #contact img, footer'
)

//Testimonials carousel/slider

const swiper = new Swiper('.swiper', {  
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      setWrapperSize: true,
      spaceBetween: 40,
    }
  }
}); 