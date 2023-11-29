document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const cardsContainer = document.querySelector(".cards-container");
    const openYouTubeButton = document.getElementById("openYT");
    const toggleButton2 = document.getElementById("toggleButton2");
    const body = document.body;

    toggleButton.addEventListener("click", function () {
        cardsContainer.classList.toggle("hidden");
    });

    toggleButton2.addEventListener("click", function () {
        // Cambia entre el modo oscuro y el modo claro
        body.classList.toggle("dark-mode");
    });

    openYouTubeButton.addEventListener("click", function () {
        // Abre YouTube en una nueva ventana o pestaña
        window.open("https://www.youtube.com", "_blank");
});
});