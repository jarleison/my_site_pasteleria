document.addEventListener("DOMContentLoaded", function () {
    // Desplazamiento suave al hacer clic en los enlaces de la barra de navegación
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    function smoothScroll(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Ajusta según el diseño de tu barra de navegación
        behavior: 'smooth'
      });
    }
  
    // Resaltar la sección actual en la barra de navegación al desplazarse
    window.addEventListener('scroll', highlightCurrentSection);
  
    function highlightCurrentSection() {
      const scrollPosition = window.scrollY;
  
      links.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (
          targetElement.offsetTop - 60 <= scrollPosition &&
          targetElement.offsetTop + targetElement.offsetHeight > scrollPosition
        ) {
          links.forEach(link => link.classList.remove('current'));
          link.classList.add('current');
        } else {
          link.classList.remove('current');
        }
      });
    }
  
    // Mostrar/Ocultar menú en dispositivos móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', toggleMobileMenu);
  
    function toggleMobileMenu() {
      navLinks.classList.toggle('show');
    }
  });
  