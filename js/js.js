document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const containerHeader = document.querySelector(".container-header");

    function checkScroll() {

        const headerTop = header.getBoundingClientRect().top;
        // const initialHeaderTop = containerHeader.offsetTop;
        // const initialHeaderPosition = containerHeader.offsetTop + containerHeader.offsetHeight;
        const triggerHeight = window.innerHeight - header.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (headerTop <= 0) {
            header.classList.add("header-fixed");
        }
        if (scrollPosition <= triggerHeight) {
            header.classList.remove("header-fixed");
        }
    }

    window.addEventListener("scroll", checkScroll);
});