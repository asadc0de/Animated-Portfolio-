// Navigation Bar Animation
function navBarAnimation() {
    let navBarLinks = document.querySelectorAll('.navBarLinks');

    navBarLinks.forEach((link) => {
        link.addEventListener('mouseenter', () => {
            // console.log(link.firstElementChild);
            let tl = gsap.timeline();
            tl.to(link, { // target the specific link being hovered over
                transform: 'translateY(-52.5%)',
                duration: 0.5
            }, 'anime12');
            tl.from(link.firstElementChild, {
                // target the li elements inside the hovered link
                duration: 0.5
            }, 'anime12');
        });

        link.addEventListener('mouseleave', () => {
            let tl = gsap.timeline();
            tl.to(link, { // target the specific link being hovered over
                transform: 'translateY(2.5%)',
                duration: 0.5
            }, 'anime13');
            tl.from(link.lastElementChild, { // target the li elements inside the hovered link
                duration: 0.5
            }, 'anime13');
        });
    });
}
navBarAnimation();

// Menu Icon Animation
function menuIconAnimation() {
    const menuContainer = document.querySelector('.icon-container');
    const menuIcon = document.querySelector('.menuIcon');
    const navBAR = document.querySelector('.navBAR');

    let flag = false;
    menuIcon.addEventListener('click', () => {
        let tl = gsap.timeline();
        if (flag === false) {
            tl.to(menuContainer.firstElementChild, {
                transform: 'rotate(45deg)',
                duration: 0.5,
                backgroundColor: '#000',
            }, 'anime14')
                .to(menuContainer.lastElementChild, {
                    transform: 'rotate(-45deg)',
                    duration: 0.5,
                    top: '49%',
                    backgroundColor: '#000'
                }, 'anime14')
                .to(navBAR, {
                    transform: 'translateX(0%)',
                    right: '0%'
                }, 'anime14')
                .to('.navBAR2', {
                    opacity: 1,
                    duration: .4
                }, 'anime14')
                .from('.navBarLinksMain1', {
                    opacity: 0,
                    transform: 'translateX(60%)',
                    duration: .5,
                    stagger: .1
                }, 'anime14')
                .from('.navBarLinksMain', {
                    opacity: 0,
                    transform: 'translateX(40%)',
                    duration: .3,
                    stagger: .1
                }, 'anime14');
            flag = true;
        } else {
            tl.to(menuContainer.firstElementChild, {
                transform: 'rotate(0deg)',
                duration: 0.5,
                backgroundColor: '#fff'
            }, 'anime14')
                .to(menuContainer.lastElementChild, {
                    transform: 'rotate(0deg)',
                    duration: 0.5,
                    top: '5px',
                    backgroundColor: '#fff'
                }, 'anime14')
                .to(navBAR, {
                    right: '-100%',
                    duration: 0.5,
                }, 'anime14')
                .to('.navBAR2', {
                    opacity: 0,
                    duration: .3
                }, 'anime14');
            flag = false;
        }
    });
}
menuIconAnimation();

// Project Text Animation
function projectText() {
    let text = document.querySelector('.proj-text');
    let tl = gsap.timeline();
    tl.from('.proj-text', {
        opacity: 0,
        duration: 1,
        y: 25
    }, 'anime1');
    // Project Section Animation
    tl.from('.proj-section-row1', {
        y: 30,
        duration: 1,
        opacity: 0,
        delay: .4
    }, 'anime1');
    // Function to handle mouseenter event
    function handleMouseEnter() {
        gsap.to('.proj-line', {
            x: '100%',
            duration: 0.4,
            ease: 'none'
        });
    }
    // Function to handle mouseleave event
    function handleMouseLeave() {
        gsap.set('.proj-line', { x: '-100%' });
        gsap.to('.proj-line', {
            x: '0%',
            duration: 0.4,
            ease: 'none'
        });
    }
    // Adding event listeners
    document.querySelector('.proj-line').addEventListener('mouseenter', handleMouseEnter);
    document.querySelector('.proj-line').addEventListener('mouseleave', handleMouseLeave);
    // Add event listeners for mouseenter and mouseleave
    text.addEventListener('mouseenter', handleMouseEnter);
    text.addEventListener('mouseleave', handleMouseLeave);

    text.addEventListener('mouseenter', function () {
        gsap.to('svg', {
            y: '20%',
            duration: .4,
            ease: 'none'
        });
    });
    text.addEventListener('mouseleave', function () {
        gsap.to('svg', {
            y: '0',
            duration: .4,
            ease: 'none'
        });
    });

}
projectText();

// Project Section Animation
function projectSection() {
    gsap.from('.proj-section-row6', {
        y: 40,
        duration: 1,
        opacity: 0,
        delay:.5,
        scrollTrigger: {
            scroller: 'body',
            trigger: '.proj-section-row6',
            start: 'top 98%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.from('.proj-section-row2', {
        y: 40,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            scroller: 'body',
            trigger: '.proj-section-row2',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.from('.proj-section-row3', {
        y: 40,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            scroller: 'body',
            trigger: '.proj-section-row3',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.from('.proj-section-row4', {
        y: 40,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            scroller: 'body',
            trigger: '.proj-section-row4',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.from('.proj-section-row5', {
        y: 40,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            scroller: 'body',
            trigger: '.proj-section-row5',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
}
projectSection();

