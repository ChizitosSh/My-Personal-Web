// Scroll Reveal

const navbar = document.getElementById('navbar');

const scroll = ScrollReveal ({
    origin: 'top',
    distance: '50px',
    duration: 1800, // milisegundos -> 2.5s
    delay: 200, // delay -> retraso, para que no aparezca de golpe
    reset: true, // para que se vuelva a ejecutar la animación
})

scroll.reveal(`.navbar-brand, .navbar-toggle, navbar-nav,.col-sm-12, .scroll-top`)

scroll.reveal(`.scroll-right`, {origin: 'right'})

scroll.reveal(`.scroll-left`, {origin: 'left'})
