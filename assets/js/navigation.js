// Détection de la section active au scroll
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section-block, .cover-page');
  const navLinks = document.querySelectorAll('.fixed-nav a');
  
  function updateActiveLink() {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 100) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }
  
  // Mettre à jour au scroll
  window.addEventListener('scroll', updateActiveLink);
  
  // Mettre à jour au chargement
  updateActiveLink();
  
  // Smooth scroll pour les liens
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Gestion des boxes dépliables
document.addEventListener('DOMContentLoaded', function() {
  const collapsibleBoxes = document.querySelectorAll('.box-collapsible');
  
  collapsibleBoxes.forEach(box => {
    const toggle = box.querySelector('.box-toggle');
    const content = box.querySelector('.box-content');
    
    if (toggle && content) {
      toggle.addEventListener('click', function() {
        box.classList.toggle('expanded');
      });
    }
  });
});

// ==============================
// Study cases – carte interactive
// ==============================
document.addEventListener('DOMContentLoaded', function () {
  const pins = document.querySelectorAll('.map-pin');
  const cases = document.querySelectorAll('.case-content');

  function hideAllCases() {
    cases.forEach(c => c.classList.remove('active'));
    pins.forEach(p => p.classList.remove('active'));
  }

  pins.forEach(pin => {
    pin.addEventListener('click', function () {
      const caseId = this.getAttribute('data-case');
      const targetCase = document.getElementById(caseId);

      if (!targetCase) return;

      // Reset
      hideAllCases();

      // Activate selected
      this.classList.add('active');
      targetCase.classList.add('active');

      // Scroll doux vers le contenu
      targetCase.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // OPTIONNEL : afficher le premier study case par défaut
  if (pins.length > 0) {
    pins[0].click();
  }
});