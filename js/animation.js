//ScrollReveal().reveal('.hero-content');

const animation =ScrollReveal({
  distance :'30px',
  duration:1500,
  delay:400,
  reset:true
})

animation.reveal('.hero-content, .heroimage, .service-content, .contact-section ',{
  delay:200,
  origin:'bottom',
})
animation.reveal('.stats-section ',{
  delay:300,
  origin:'right',
})
animation.reveal('.about-section ',{
  delay:300,
  origin:'left',
})