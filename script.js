function mostrarCard(opcion) {
    var card = opcion.querySelector('.card');
    card.style.display = 'block';
}

function ocultarCard() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.style.display = 'none';
    });
}
