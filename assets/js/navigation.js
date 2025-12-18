// Détection de la section active au scroll
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section-block');
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

// Gestion du sélecteur de study cases
document.addEventListener('DOMContentLoaded', function() {
  const selector = document.getElementById('case-selector');
  
  if (selector) {
    selector.addEventListener('change', function() {
      // Cacher tous les contenus
      const allCases = document.querySelectorAll('.case-content');
      allCases.forEach(c => c.classList.remove('active'));
      
      // Afficher le contenu sélectionné
      const selectedCase = document.getElementById(this.value);
      if (selectedCase) {
        selectedCase.classList.add('active');
      }
    });
    
    // Afficher le premier case par défaut
    const firstCase = document.querySelector('.case-content');
    if (firstCase) {
      firstCase.classList.add('active');
    }
  }
});

// Gestion des épingles sur la carte
  const mapPins = document.querySelectorAll('.map-pin');
  
  mapPins.forEach(pin => {
    pin.addEventListener('click', function() {
      const caseId = this.getAttribute('data-case');
      
      // Retirer la classe active de toutes les épingles
      mapPins.forEach(p => p.classList.remove('active'));
      
      // Ajouter la classe active à l'épingle cliquée
      this.classList.add('active');
      
      // Cacher tous les contenus
      const allCases = document.querySelectorAll('.case-content');
      allCases.forEach(c => c.classList.remove('active'));
      
      // Afficher le contenu correspondant
      const selectedCase = document.getElementById(caseId);
      if (selectedCase) {
        selectedCase.classList.add('active');
        
        // Scroll smooth vers le contenu
        selectedCase.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });
  
  // Activer la première épingle par défaut
  if (mapPins.length > 0) {
    mapPins[0].click();
  }
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