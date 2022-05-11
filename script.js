function onScroll() {
  let header = document.getElementById('header');
  if (scrollY > 0) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

function openMenu(){
  document.body.classList.add("menu-expanded");
}

function closeMenu(){
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
	origin: "top",
	distance: "30px",
	duration: 700,
}).reveal("#home, #home .stat, #services header, #services .service-item, #about header, #about .content, #about .content img, #contact header, #contact .content, #contact .content img, footer")