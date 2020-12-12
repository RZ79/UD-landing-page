/*
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Define Global Variables
var sections = document.querySelectorAll('section');
var navbarList = document.querySelector('ul');

// build the nav
for (let n = 1; n <= 4; n++) {
    let listItem = document.createElement('li');
    let listLink = document.createElement('a');
    listLink.innerHTML = `section${n}`;
    navbarList.appendChild(listItem);
    listItem.appendChild(listLink);
    listLink.classList.add('link');
    listLink.setAttribute('data-nav', `section${n}`);
    listLink.classList.add('menu__link');
}

// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
var links = document.querySelectorAll(".link");
links.forEach((link)=> {
  link.addEventListener('click', () => {
    let linkName = link.getAttribute(`data-nav`);
    let anchor = document.getElementById(linkName);
     anchor.scrollIntoView({
       behavior: 'smooth',
       block: 'start'
      });
    })
  })
    
 // Main Function
 // Add class 'active' to section when near top of viewport
 const requiredSection = () => {
   for (let i = 0; i < sections.length; i++) {
     let section = sections[i];
     let link = links[i];
     let offsetTop = section.offsetTop;
     let offsetHeight = section.offsetHeight;
     if (offsetTop <= scrollY + 100 && offsetTop + offsetHeight > scrollY + 100) {
       section.classList.add('your-active-class');
       link.classList.add('active');
      } else {
        section.classList.remove('your-active-class');
        link.classList.remove('active');
      }
    }
  }

   window.addEventListener('scroll', requiredSection);