(function () {
    'use strict'
    console.log('reading js');

    const myWork = document.querySelector('#work');
    const aboutMe = document.querySelector('#about');
    const contact = document.querySelector('#contact')

    const workLink = document.querySelector('#work-link');
    const aboutLink = document.querySelector('#about-link');
    const contactLink = document.querySelector('#contact-link');

    workLink.addEventListener('click', function () {
        if (myWork.classList.contains('hidden')) {
            changePage(workLink, myWork);
        }
    })

    aboutLink.addEventListener('click', function () {
        if (aboutMe.classList.contains('hidden')) {
            changePage(aboutLink, aboutMe);
        }
    })

    contactLink.addEventListener('click', function () {
        if (contact.classList.contains('hidden')) {
            changePage(contactLink, contact);
        }
    })
    

    // function changePage(link, page) {
    //     document.querySelector('.showing').className = 'hidden';
    //     document.querySelector('.selected').className = 'unselected';
    //     page.className = 'showing'
    //     link.className = 'selected';
    // }
    
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