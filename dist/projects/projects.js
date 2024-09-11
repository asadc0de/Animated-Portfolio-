window.addEventListener('load', function() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/src/input.css';
    document.head.appendChild(link);
});
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

// Project Text Animation
function projectText() {
    let text = document.querySelector('.proj-text');
    let tl = gsap.timeline();
    tl.to('.proj-text', {
        opacity: 1,
        duration: 1,
        y: 0,
    }, 'anime1');
    // Project Section Animation
    tl.to('.proj-section-row1', {
        y: 0,
        duration: 1,
        opacity: 1,
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
    gsap.to('.proj-section-row6', {
        y: 0,
        duration: 1,
        opacity: 1,
        delay: .6,
        scrollTrigger: {
            scroller: '.main',
            trigger: '.proj-section-row6',
            start: 'top 98%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.to('.proj-section-row2', {
        y: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            scroller: '.main',
            trigger: '.proj-section-row2',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.to('.proj-section-row3', {
        y: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            scroller: '.main',
            trigger: '.proj-section-row3',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.to('.proj-section-row4', {
        y: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            scroller: '.main',
            trigger: '.proj-section-row4',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.to('.proj-section-row5', {
        y: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            scroller: '.main',
            trigger: '.proj-section-row5',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.to('.proj-section-row7', {
        y: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            scroller: '.main',
            trigger: '.proj-section-row7',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.to('.proj-section-row8', {
        y: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            scroller: '.main',
            trigger: '.proj-section-row8',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.to('.proj-section-row9', {
        y: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            scroller: '.main',
            trigger: '.proj-section-row9',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.to('.proj-section-row10', {
        y: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            scroller: '.main',
            trigger: '.proj-section-row10',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.to('.proj-section-row11', {
        y: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            scroller: '.main',
            trigger: '.proj-section-row11',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
    gsap.to('.proj-section-row12', {
        y: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            scroller: '.main',
            trigger: '.proj-section-row12',
            start: 'top 96%',
            end: 'top 40%',
            // markers: true
        }
    });
}
projectSection();

// Website Visit Links
let webVisitParent = document.querySelectorAll('.webVisitParent');
webVisitParent.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        let webVisitLink = e.target.querySelector('.webVisitLinks');
        gsap.to(webVisitLink, {
            y: 0,
            duration: 0.5,
            opacity: 1,
        });
    });

    element.addEventListener('mouseleave', (e) => {
        let webVisitLink = e.target.querySelector('.webVisitLinks');
        gsap.to(webVisitLink, {
            y: 100,
            duration: 0.5,
            opacity: 0,
        });
    });
});
