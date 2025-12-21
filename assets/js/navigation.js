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

// Study cases – carte interactive

// Gestion des épingles sur la carte pour study cases
document.addEventListener('DOMContentLoaded', function() {
  const mapPins = document.querySelectorAll('.map-pin');
  
  if (mapPins.length > 0) {
    mapPins.forEach(pin => {
      pin.addEventListener('click', function() {
        const caseId = this.getAttribute('data-case');
        
        // Retirer la classe active de toutes les épingles
        mapPins.forEach(p => p.classList.remove('active'));
        
        // Ajouter la classe active à l'épingle cliquée
        this.classList.add('active');
        
        // Cacher tous les contenus spécifiques
        const allSpecificContents = document.querySelectorAll('.case-specific-content');
        allSpecificContents.forEach(c => c.classList.remove('active'));
        
        // Afficher le contenu spécifique correspondant
        const specificContents = document.querySelectorAll(`.case-specific-content[data-case="${caseId}"]`);
        specificContents.forEach(content => {
          content.classList.add('active');
        });
        
      });
    });
    
    // Activer la première épingle par défaut
    mapPins[0].click();
  }
  // Bouton retour à la carte
  const backToMapBtn = document.getElementById('back-to-map-btn');
  if (backToMapBtn) {
    backToMapBtn.addEventListener('click', function() {
      const mapContainer = document.querySelector('.case-map-container');
      if (mapContainer) {
        mapContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
});