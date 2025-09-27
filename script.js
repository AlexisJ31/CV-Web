// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== CARRUSEL MEJORADO (Swiper.js) =====
var swiper = new Swiper(".mySwiper", {
    // --- Cambios Clave ---
    effect: "coverflow", // 1. Activa el efecto de desvanecimiento
    coverflowEffect: {
        rotate: 40,
        stretch: 100,
        depth: 500,
        modifier: 1,
        slideShadows: false
    },

    // --- Configuraciones mantenidas y ajustadas ---
    slidesPerView: 1, // 2. Asegura que solo se vea una diapositiva a la vez
    spaceBetween: 50, // Puedes mantener o ajustar esto
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
