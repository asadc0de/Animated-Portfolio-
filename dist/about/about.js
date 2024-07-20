// Main Text + Images Animation
function mainTextandImage() {

    let tl = gsap.timeline();
    tl.from('.row1-text', {
        y: '250%',
        duration: .8,
        stagger: .4,
        transform: 'rotate(3deg)'
    }, 'anime');

    tl.from('.row1-img', {
        x: '101%',
    });

    tl.from('.row3-img', {
        width: '0'
    });

    tl.from('.and', {
        opacity: 0
    });
}
mainTextandImage();

// Project Text Animation
function projectText() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            scroller: '.main',
            trigger: '.proj-text',
            // markers: true,
            start: 'top 96%',
            end: 'top 40%',
        }
    });
    let text = document.querySelector('.proj-text');
    tl.from('.proj-text', {
        opacity: 0,
        duration: 1,
        y: 25
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
        gsap.to('.svg', {
            y: '20%',
            duration: .4,
            ease: 'none'
        });
    });
    text.addEventListener('mouseleave', function () {
        gsap.to('.svg', {
            y: '0',
            duration: .4,
            ease: 'none'
        });
    });

}
projectText();

// Section1 Text Animation
function section1Text() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            scroller: '.main',
            trigger: '.text-section1-line1',
            // markers: true,
            start: 'top 96%',
            end: 'top 40%',
        }
    });

    tl.from('.text-section1-line1', {
        y: '100%',
        duration: .8,
        rotation: 2,
    })
        .from('.text-section1-line2', {
            y: '100%',
            duration: .8,
            rotation: 2,
        }, "<")
        .from('.text-section1-line3', {
            y: '100%',
            duration: .8,
            rotation: 2,
        }, "<")
        .from('.text-section1-line4', {
            y: '100%',
            duration: .8,
            rotation: 2,
        }, "<");

}
section1Text();

// Section1 Text Animation
function section2Text() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            scroller: '.main',
            trigger: '.text-section2-line1',
            // markers: true,
            start: 'top 96%',
            end: 'top 40%',
        }
    });

    tl.from('.text-section2-line1', {
        y: '100%',
        duration: .8,
        rotation: 2,
    })
        .from('.text-section2-line2', {
            y: '100%',
            duration: .8,
            rotation: 2,
        }, "<")
        .from('.text-section2-line3', {
            y: '100%',
            duration: .8,
            rotation: 2,
        }, "<");

}
section2Text();

// Frontend Skills Animation
function section1() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            scroller: '.main',
            trigger: '.sec1',
            // markers: true,
            start: 'top 96%',
            end: 'top 40%',
        }
    });
    tl.from('.sec1', {
        opacity: 0,
        duration: .7,
        stagger: .5,
        y: 20,
    });
}
section1();
// Backend Skills Animation
function section2() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            scroller: '.main',
            trigger: '.sec2',
            // markers: true,
            start: 'top 96%',
            end: 'top 40%',
        }
    });
    tl.from('.sec2', {
        opacity: 0,
        duration: .7,
        stagger: .5,
        y: 20,
    });
}
section2();
// Miscellaneous Skills Animation
function section3() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            scroller: '.main',
            trigger: '.sec3',
            // markers: true,
            start: 'top 96%',
            end: 'top 40%',
        }
    });
    tl.from('.sec3', {
        opacity: 0,
        duration: .7,
        y: 20,
    });
}
section3();

//  Philosophy Paragraph Animation
function footerText() {
    let tl = gsap.timeline();
    tl.to('.text6', {
        onStart: function () {
            tl.to('#footerText1 h1', {
                y: '0%',
                duration: .5
            }, 'anime10').to('#footerText2 h1', {
                y: '0%',
                duration: .5
            }, 'anime10')
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
