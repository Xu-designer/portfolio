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

    const backBtns = document.querySelectorAll('.back');

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

    pixelCover.addEventListener('click', function(){
        changePage(pixelCover, pixel);
    })

    abwCover.addEventListener('click', function(){
        changePage(abwCover, abw);
    })

    bittersweetCover.addEventListener('click', function(){
        changePage(bittersweetCover, bittersweet);
    })
    
    mindscapeCover.addEventListener('click', function(){
        changePage(mindscapeCover, mindscape);
    })

    mindscapeCover.addEventListener('click', function(){
        changePage(mindscapeCover, mindscape);
    })

    backBtns.forEach(element => {
        element.addEventListener('click', function(){
            changePage(workLink, myWork);
        })
    });
    

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