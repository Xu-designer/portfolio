(function () {
    'use strict'
    console.log('reading js');

    const myWork = document.querySelector('#work');
    const aboutMe = document.querySelector('#about');
    const contact = document.querySelector('#contact');
    const pixel = document.querySelector('#pixel');
    const abw = document.querySelector('#abw');
    const bittersweet = document.querySelector('#bittersweet');
    const mindscape = document.querySelector('#mindscape');
    const axiable = document.querySelector('#axiable');

    const logos = document.querySelectorAll('.hx');
    const workLink = document.querySelector('#work-link');
    const aboutLink = document.querySelector('#about-link');
    const contactLink = document.querySelector('#contact-link');
    const pixelCover = document.querySelector('#pixel-cover');
    const abwCover = document.querySelector('#abw-cover');
    const bittersweetCover = document.querySelector('#bittersweet-cover');
    const mindscapeCover = document.querySelector('#mindscape-cover');
    const axiableCover = document.querySelector('#axiable-cover');

    // const backBtns = document.querySelectorAll('.back');
    const backBtn = document.querySelector('.back');

    if ('history' in window) {
        window.history.scrollRestoration = 'manual';
    }

    window.addEventListener('load', () => {
        const loader = document.querySelector('#loading');

        // Adds the class that triggers the CSS fade-out transition
        loader.classList.add("loader-hidden");
    });

    logos.forEach(logo => {
        logo.addEventListener('click', function () {
            changePage(workLink, myWork);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            backBtn.classList.add('hidden');
        })
    });

    workLink.addEventListener('click', function () {
        if (myWork.classList.contains('hidden')) {
            changePage(workLink, myWork);
            window.scrollTo({
                top: 600,
                behavior: 'smooth'
            });
            backBtn.classList.add('hidden');
        }
    })

    aboutLink.addEventListener('click', function () {
        if (aboutMe.classList.contains('hidden')) {
            changePage(aboutLink, aboutMe);
            window.scrollTo({
                top: 600,
                behavior: 'smooth'
            });
            backBtn.classList.add('hidden');
        }
    })

    contactLink.addEventListener('click', function () {
        if (contact.classList.contains('hidden')) {
            changePage(contactLink, contact);
            window.scrollTo({
                top: 600,
                behavior: 'smooth'
            });
            backBtn.classList.add('hidden');
        }
    })

    pixelCover.addEventListener('click', function () {
        changePage(pixelCover, pixel);
        backBtn.classList.remove('hidden');
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
        });
    })

    abwCover.addEventListener('click', function () {
        changePage(abwCover, abw);
        backBtn.classList.remove('hidden');
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
        });
    })

    bittersweetCover.addEventListener('click', function () {
        changePage(bittersweetCover, bittersweet);
        backBtn.classList.remove('hidden');
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
        });
    })

    mindscapeCover.addEventListener('click', function () {
        changePage(mindscapeCover, mindscape);
        backBtn.classList.remove('hidden');
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
        });
    })

    mindscapeCover.addEventListener('click', function () {
        changePage(mindscapeCover, mindscape);
        backBtn.classList.remove('hidden');
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
        });
    })

    axiableCover.addEventListener('click', function () {
        changePage(axiableCover, axiable);
        backBtn.classList.remove('hidden');
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
        });
    })

    backBtn.addEventListener('click', function () {
        changePage(workLink, myWork);
        backBtn.classList.add('hidden');
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
        });
    })

    // backBtns.forEach(element => {
    //     element.addEventListener('click', function(){
    //         changePage(workLink, myWork);
    //     })
    // });

    // Regular change page
    // function changePage(link, page) {
    //     document.querySelector('.showing').className = 'hidden';
    //     document.querySelector('.selected').className = 'unselected';
    //     page.className = 'showing'
    //     link.className = 'selected';
    // }


    // Fade in/out functionality
    function changePage(link, page) {
        fadeOut(document.querySelector('.showing'));
        document.querySelector('.selected').className = 'unselected';
        setTimeout(function () {
            fadeIn(page);
        }, 300);
        // fadeIn(page);
        link.className = 'selected';
    }

    function fadeOut(element) {
        element.style.animation = 'fadeout 0.3s ease-in'
        setTimeout(function () {
            element.classList.remove('showing');
            element.classList.add('hidden');
        }, 300)
    }

    function fadeIn(element) {
        element.classList.remove('hidden');
        element.classList.add('showing');
        element.offsetHeight;
        element.style.animation = 'fadein 0.3s ease-in';
        // element.style.animation = 'fadein 0.3s ease-in'
        // setTimeout(function () {
        //     element.className = 'showing';
        // }, 300)
    }

    particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 3.1508467900748314, "direction": "top", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

})()