document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const cardsContainer = document.querySelector(".cards-container");

    toggleButton.addEventListener("click", function () {
        cardsContainer.classList.toggle("hidden");
    });
});
