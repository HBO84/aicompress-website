document.addEventListener('DOMContentLoaded', function() {
    
    // Effet "sticky" pour la barre de navigation
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 1)'; // Opacité complète au scroll
        } else {
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.85)'; // Opacité initiale
        }
    });

    // Optionnel: Défilement doux pour tous les liens internes
    // Le 'scroll-behavior: smooth;' en CSS fait déjà le travail pour la plupart des navigateurs modernes.
    // Ce script est une surcouche pour une compatibilité plus large si nécessaire.
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
