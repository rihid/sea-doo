function scrollActive() {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY;
  
    sections.forEach((current) => {
      const sectionHeight = current.clientHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');
  
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        const navLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
        if (navLink) {
          navLink.classList.add('active-link');
        }
      } else {
        const navLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
        if (navLink) {
          navLink.classList.remove('active-link');
        }
      }
    });
  }
  
  export default scrollActive;
  