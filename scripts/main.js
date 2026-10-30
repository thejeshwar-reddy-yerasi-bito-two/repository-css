document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".cta-button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Button clicked!");
        });
    });

    const cards = document.querySelectorAll(".service-card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            card.style.backgroundColor = "#e0e0e0";
        });
        card.addEventListener("mouseleave", function() {
            card.style.backgroundColor = "";
        });
    });
});
