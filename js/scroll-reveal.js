function revealOnScroll() {

    const revealElements = document.querySelectorAll(".reveal");

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < window.innerHeight - revealPoint) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);