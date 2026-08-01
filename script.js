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
    

    function changePage(link, page) {
        document.querySelector('.showing').className = 'hidden';
        document.querySelector('.selected').className = 'unselected';
        page.className = 'showing'
        link.className = 'selected';
    }

})()