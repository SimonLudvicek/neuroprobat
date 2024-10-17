  const partnerLogos = document.querySelector('.partners');
    let scrollAmount = 0;
  let scrollStep = 1; // Množství, o které se posune za jeden krok
  let scrollDirection = 1; // 1 = dopředu, -1 = zpět
  
  function autoScroll() {
    const partnerLogos = document.querySelector('.partners');
    
    if (window.innerWidth <= 768) {
      scrollAmount += scrollStep * scrollDirection;
  
      // Detekce konců a změna směru
      if (scrollAmount >= partnerLogos.scrollWidth - partnerLogos.clientWidth || scrollAmount <= 0) {
        scrollDirection *= -1;
      }
  
      partnerLogos.scrollLeft = scrollAmount;
    }
  }
  
  // Spustí autoScroll každých 20 ms
  setInterval(autoScroll, 15);

  function smoothScrollToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = startPosition - targetPosition;
    const duration = 600;
    let start = null;
  
    window.requestAnimationFrame(step);
  
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const currentPosition = Math.max(startPosition - (progress / duration) * distance, 0);
        window.scrollTo(0, currentPosition);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }
  }

  const hamburger = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const contentWrapper = document.querySelector('.content-wrapper'); // Obalový kontejner
  
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
  
      if (mobileMenu.classList.contains('active')) {
          const navbarHeight = document.querySelector('.mobile-menu').offsetHeight; // Získání výšky navbaru
          contentWrapper.style.marginTop = `${navbarHeight}px`; // Posunutí obsahu stránky dolů
      } else {
          contentWrapper.style.marginTop = '0'; // Obnovení při zavření menu
      }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const alertBox = document.getElementById('alert-box');
    const closeAlertBtn = document.getElementById('close-alert');

    // Zavření alertu při kliknutí na křížek
    closeAlertBtn.addEventListener('click', () => {
        alertBox.classList.add('hidden');
    });
});