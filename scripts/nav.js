const sections = document.querySelectorAll(".cont section");
const navLi = document.querySelectorAll("nav .container ul li a");

window.addEventListener("scroll", ()=> {
    let current = "";

    sections.forEach( section => {
        const sectionTop = section.offsetTop ;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= (sectionTop - (sectionHeight / 3))) {
            current = section.getAttribute("id");
        }
    })

    navLi.forEach(li => {
        li.classList.remove('active');
        const href = li.getAttribute('href').substring(1);
        if (href === current) {
            li.classList.add('active');
        }
    });
})