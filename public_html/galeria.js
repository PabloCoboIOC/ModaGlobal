document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById("imatge-galeria");

    img.addEventListener("click", function () {
        // No funcionara per que hi hauria que afegir estils
        // A l'exercici es diu que no fa falta
        this.classList.toggle("gran");
    });
});
