document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    console.log("Amadeus - okna");

    document.querySelector(".intro__mouse").addEventListener("click", (e) => {

        e.preventDefault();
        const href = document.querySelector(".intro__mouse").getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    });
})