window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navbar = document.querySelector('.navbar');
    let currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - navbar.clientHeight && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section;
        }
    });

    if (currentSection) {
        switch (currentSection.id) {
            case 'section1':
                navbar.style.backgroundColor = '#20b2aa';
                break;
            case 'section2':
                navbar.style.backgroundColor = '#dda0dd';
                break;
            case 'section3':
                navbar.style.backgroundColor = '#00ced1';
                break;
            case 'section4':
                navbar.style.backgroundColor = '#4682b4';
                break;
            default:
                navbar.style.backgroundColor = '#fff';
        }
    }
});
