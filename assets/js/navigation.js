document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMapPins();
  initCollapsibles();
});

/* ============================
   NAVIGATION SCROLL + ACTIVE LINK
   ============================ */
function initNavigation() {
  const sections = document.querySelectorAll('.section-block');
  const navLinks = document.querySelectorAll('.fixed-nav a');

  if (!sections.length || !navLinks.length) return;

  function updateActiveLink() {
    let currentSection = '';

    sections.forEach(section => {
      if (window.pageYOffset >= section.offsetTop - 120) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      const target = link.getAttribute('href');
      link.classList.toggle('active', target === `#${currentSection}`);
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href')?.substring(1);
      const targetSection = document.getElementById(targetId);

      if (!targetSection) return;

      e.preventDefault();

      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: 'smooth'
      });
    });
  });
}

/* ============================
   INTERACTIVE MAP PINS
   ============================ */
function initMapPins() {
  const mapPins = document.querySelectorAll('.map-pin');
  const allCases = document.querySelectorAll('.case-content');

  if (!mapPins.length || !allCases.length) return;

  mapPins.forEach(pin => {
    pin.addEventListener('click', () => {
      const caseId = pin.dataset.case;
      const selectedCase = document.getElementById(caseId);

      if (!selectedCase) return;

      // Active pin
      mapPins.forEach(p => p.classList.remove('active'));
      pin.classList.add('active');

      // Active content
      allCases.forEach(c => c.classList.remove('active'));
      selectedCase.classList.add('active');

      // Smooth scroll to content
      selectedCase.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    });
  });

  // Activate first pin by default
  mapPins[0]?.click();
}

/* ============================
   COLLAPSIBLE BOXES
   ============================ */
function initCollapsibles() {
  const boxes = document.querySelectorAll('.box-collapsible');
  if (!boxes.length) return;

  boxes.forEach(box => {
    const toggle = box.querySelector('.box-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      box.classList.toggle('expanded');
    });
  });
}
