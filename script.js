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
                navbar.style.backgroundColor = '#1f1c2c'; // Dark purple from section1 gradient
                break;
            case 'section2':
                navbar.style.backgroundColor = '#4e4376'; // Deep purple from section2 gradient
                break;
            case 'section3':
                navbar.style.backgroundColor = '#16222a'; // Dark blue-green from section3 gradient
                break;
            case 'section4':
                navbar.style.backgroundColor = '#ff7e5f'; // Light coral from new section4 gradient
                break;
            default:
                navbar.style.backgroundColor = '#fff'; // White
        }
    }
});
