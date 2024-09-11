// Footer Text Animation
function footerText() {
    let tl = gsap.timeline();
    tl.to('.text6', {
        onStart: function () {
            tl.to('#footerText1 h1', {
                y: '0%',
                duration: .5
            }, 'anime10').to('#footerText2 h1', {
                y: '0%',
                duration: .8
            }, 'anime10').to('.footerVideo', {
                opacity: 1,
                scale: 1,
                duration: .6,
                delay: .6
            }, 'anime10');
        },
        scrollTrigger: {
            trigger: '.text6',
            scroller: '.main',
            // markers: true,
            start: 'top 94%',
            end: 'top 70%',
        }
    });
}
footerText();

// Footer Heading Animation
function footerHeading() {
    let tl = gsap.timeline();
    tl.to('.text7', {
        onStart: function () {
            tl.to('#footerHeading1 h1', {
                y: '0%',
                duration: .5
            }, 'anime11').to('#footerHeading2 h1', {
                y: '0%',
                duration: .7
            }, 'anime11')
        },
        scrollTrigger: {
            trigger: '.text7',
            scroller: '.main',
            // markers: true,
            start: 'top 86%',
            end: 'top 60%',
        }
    });
}
footerHeading();

// Create Animation Footer
function createAnimFooter() {
    let animate = document.getElementById('animateme2');
    animate.addEventListener('mouseenter', () => {
        let tl = gsap.timeline();
        tl.to(animate, {
            scale: 1.0777,
            ease: 'linear',
            duration: .2
        });
        tl.from(animate, {
            scale: 1.0777,
            ease: 'linear',
            duration: .2
        });
    });
}
createAnimFooter();

// Footer Last Heading Animation
function footerLastHeading() {
    let tl = gsap.timeline();
    tl.to('.text9', {
        onStart: function () {
            tl.from('#animateme2', {
                scale: .7,
                duration: .8
            }, 'anime3');
        },
        scrollTrigger: {
            trigger: '.text9',
            scroller: '.main',
            // markers: true,
            start: 'top 99%',
            end: 'top 60%',
        }
    });
}
footerLastHeading();

// Footer Dynamic Date
function getDate() {
    let footerdate = document.querySelector('.date');
    let date = new Date();
    footerdate.innerHTML = date.getFullYear();
}
getDate();

// Footer Links Animation
function footerLinks() {
    gsap.to('.footer-links', {
        y: 0,
        duration: 1,
        stagger: .2,
        opacity: 1,
        scrollTrigger: {
            trigger: '.footer-links',
            scroller: '.main',
            // markers: true,
            start: 'top 90%',
            end: 'top 10%'
        }
    });
    gsap.from('.footerLastLinks', {
        // y:10,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: '.footerLastLinks',
            scroller: '.main',
            // markers: true,
            start: 'top 90%',
            end: 'top 10%'
        }
    });
}
footerLinks();