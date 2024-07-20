document.querySelectorAll('nav a').forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('scroll', function() {
    document.querySelectorAll('.skill-level').forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        if (skillTop < window.innerHeight) {
            skill.style.width = skill.getAttribute('data-skill-level') + '%';
        }
    });
});
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});
