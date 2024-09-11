// Preview Animation
function preView() {
    gsap.to('.preView', {
        top: '-100%',
        duration: .8,
        delay: .4,
        borderRadius: '0 0 50% 50%',
    });
}
preView();

// Body's Background Color Animation
gsap.to('body', {
    backgroundColor: '#000000',
    duration: 3,
    scrollTrigger: {
        scrub: true,
        scroller: '.main',
        trigger: '.footerBG',
        // markers: true,
        start: 'top 40%',
        end: 'top 10%'
    }
});

// Main Text + Images Animation
function mainTextandImage() {
    let tl = gsap.timeline();
    tl.to('.row1-text', {
        y: '0%',
        duration: .8,
        stagger: .4,
        transform: 'rotate(0deg)',
    }, 'anime');

    tl.to('.row1-img', {
        x: '0%',
        opacity:1,
        duration:.6
    }, 'anime2');

    tl.to('.row3-img', {
        width: '100%',
        opacity: 1,
        duration:.6
    }, 'anime2');

    tl.to('.and', {
        opacity: 1
    });
    gsap.fromTo("#heart path",
        { scale: .9 },
        {
            scale: 1.0001,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        }
    );
}
mainTextandImage();

// Skills Text Animation
function skillsText() {
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
skillsText();

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

    tl.to('.text-section1-line1', {
        y: '0%',
        duration: .5,
        rotation: 0,
    })
        .to('.text-section1-line2', {
            y: '0%',
            duration: .7,
            rotation: 0,
        }, "<")
        .to('.text-section1-line3', {
            y: '0%',
            duration: .9,
            rotation: 0,
        }, "<")
        .to('.text-section1-line4', {
            y: '0%',
            duration: 1,
            rotation: 0,
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

    tl.to('.text-section2-line1', {
        y: '0%',
        duration: .5,
        rotation: 0,
    })
        .to('.text-section2-line2', {
            y: '0%',
            duration: .8,
            rotation: 0,
        }, "<")
        .to('.text-section2-line3', {
            y: '0%',
            duration: 1,
            rotation: 0,
        }, "<");

}
section2Text();

// Frontend Skills Animation
function frontendSkills() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            scroller: '.main',
            trigger: '.frontend-skills',
            // markers: true,
            start: 'top 96%',
            end: 'top 40%',
        }
    });
    tl.from('.frontend-skills', {
        opacity: 0,
        duration: .5,
        stagger: .2,
        y: 30,
    }, 'anime1');
    tl.from('.frontend-skills div div span', {
        opacity: 0,
        duration: .5,
        stagger: .1,
    }, 'anime1');
}
frontendSkills();

// Backend Skills Animation
function backendSkills() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            scroller: '.main',
            trigger: '.backend-skills',
            // markers: true,
            start: 'top 96%',
            end: 'top 40%',
        }
    });
    tl.from('.backend-skills', {
        opacity: 0,
        duration: .5,
        stagger: .2,
        y: 30,
    }, 'anime1');
    tl.from('.backend-skills div div span', {
        opacity: 0,
        duration: .5,
        stagger: .1,
    }, 'anime1');
}
backendSkills();

// Miscellaneous Skills Animation
function miscellaneousSkills() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            scroller: '.main',
            trigger: '.miscellaneous-skills',
            // markers: true,
            start: 'top 96%',
            end: 'top 40%',
        }
    });
    tl.from('.miscellaneous-skills', {
        opacity: 0,
        duration: .5,
        stagger: .2,
        y: 30,
    }, 'anime1');
    tl.from('.miscellaneous-skills div div span', {
        opacity: 0,
        duration: .5,
        stagger: .1,
    }, 'anime1');
}
miscellaneousSkills();