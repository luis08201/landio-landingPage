let btnBurger = document.getElementById("btnBurger");

btnBurger.addEventListener("click", () => {
    btnBurger.classList.toggle("active");

    let nav = document.getElementById("nav");
    nav.classList.toggle("show");
})