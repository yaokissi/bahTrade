
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

// Sélectionnez tous les éléments de navigation
let navItems = document.querySelectorAll('.menu a');
// Ajoutez un écouteur d'événement clic à chaque élément de navigation
navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // Fermez la fenêtre de navigation en supprimant la classe "open" du corps de la page
      body.classList.remove('open');
    });
  });
