//initialize dom classes and id
// Initialize functions when DOM is loaded
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const menu = document.querySelectorAll('.navbar-menu');
const burger = document.querySelector('.navbar-burger');
const close = document.querySelector('.navber-close');
const backdrop  = document.querySelector('.navber-backdrop ');
const mobileMenuLink = document.querySelectorAll('#mobile-menu a[href^="#"]');

document.addEventListener('DOMContentLoaded', () => {
     handleScroll();
     window.addEventListener('scroll', handleScroll);



     if(burger.length && menu.length){
      handleMobileMenuToggle(burger,menu)
     }
     if(close.length && backdrop.length && menu.length){
      handleMobileMenuClose(close, backdrop, menu)
       
     }
     if(mobileMenuLink.length && menu.length &&navLinks.length){
      handleMobileMenuLinkClick(mobileMenuLink , menu, navLinks)
     }
});
function setActivelink( section, navLinks){
  let index =section.length;
  while (--index && window.scrollY +50 <section[index].offsetTop) {}
  navLinks.forEach((link) => link.classList.remove('active'));
  if(navLinks[index]){
    navLinks[index].classList.add('active');
  }
    


}

function handleScroll(){
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  setActivelink(sections,navLinks)
}

function handleMobileMenuToggle (burger,menu){
  burger.forEach(burger => {
    burger.addEventListener('click', () => {
      menu.forEach(menu => menu.classList.toggle('hidden'));
   
    })
  })
}

function handleMobileMenuClose(close, backdrop, menu){
  close.forEach(close => {
    close.addEventListener('click', () => {
      menu.forEach(menu => menu.classList.toggle('hidden'));
    })
  })
  backdrop.forEach(b => {
    b.addEventListener('click', () => {
      menu.forEach(menu => menu.classList.toggle('hidden'));
    })
  })
}

function  handleMobileMenuLinkClick(mobileMenuLink , menu, navLinks){
 mobileMenuLink.forEach(anchor => {
  anchor.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'));

    const targetLink =document.querySelectorAll(`nav a[href="${this.getAttribute('href')}"]`);
    if(targetLink){
      targetLink.classList.add('active');
    }
    menu.forEach(menu => menu.classList.toggle('hidden'));
    
  })
   
 })
}

