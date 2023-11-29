document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const cardsContainer = document.querySelector(".cards-container");

    toggleButton.addEventListener("click", function () {
        cardsContainer.classList.toggle("hidden");
    });

    const toggleButton2 = document.getElementById("toggleButton2");
    const body = document.body;

    toggleButton2.addEventListener("click", function () {
        // Cambia entre el modo oscuro y el modo claro
        body.classList.toggle("dark-mode");
    });
});
