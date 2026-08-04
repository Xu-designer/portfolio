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

    workLink.addEventListener('click', function () {
        if (myWork.classList.contains('hidden')) {
            changePage(workLink, myWork);
            window.scrollTo({
                top: 300,
                behavior: 'smooth'
            });
            backBtn.classList.add('hidden');
        }
    })

    aboutLink.addEventListener('click', function () {
        if (aboutMe.classList.contains('hidden')) {
            changePage(aboutLink, aboutMe);
            window.scrollTo({
                top: 300,
                behavior: 'smooth'
            });
            backBtn.classList.add('hidden');
        }
    })

    contactLink.addEventListener('click', function () {
        if (contact.classList.contains('hidden')) {
            changePage(contactLink, contact);
            window.scrollTo({
                top: 300,
                behavior: 'smooth'
            });
            backBtn.classList.add('hidden');
        }
    })

    pixelCover.addEventListener('click', function () {
        changePage(pixelCover, pixel);
        backBtn.classList.remove('hidden');
        window.scrollTo({
            top: 300,
            behavior: 'smooth'
        });
    })

    abwCover.addEventListener('click', function () {
        changePage(abwCover, abw);
        backBtn.classList.remove('hidden');
        window.scrollTo({
            top: 300,
            behavior: 'smooth'
        });
    })

    bittersweetCover.addEventListener('click', function () {
        changePage(bittersweetCover, bittersweet);
        backBtn.classList.remove('hidden');
        window.scrollTo({
            top: 300,
            behavior: 'smooth'
        });
    })

    mindscapeCover.addEventListener('click', function () {
        changePage(mindscapeCover, mindscape);
        backBtn.classList.remove('hidden');
        window.scrollTo({
            top: 300,
            behavior: 'smooth'
        });
    })

    mindscapeCover.addEventListener('click', function () {
        changePage(mindscapeCover, mindscape);
        backBtn.classList.remove('hidden');
        window.scrollTo({
            top: 300,
            behavior: 'smooth'
        });
    })

    backBtn.addEventListener('click', function () {
        changePage(workLink, myWork);
        backBtn.classList.add('hidden');
        window.scrollTo({
            top: 0,
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

})()