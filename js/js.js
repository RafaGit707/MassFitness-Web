document.addEventListener("DOMContentLoaded", function () {
    
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const triggerHeight = window.innerHeight - header.offsetHeight;


    function checkScroll() {
        if (window.scrollY > triggerHeight) {
            header.classList.add("header-fixed");
            main.classList.add("padding-active");
        } else {
            header.classList.remove("header-fixed");
            main.classList.remove("padding-active");
        }
    }

    window.addEventListener("scroll", checkScroll);
});
