window.addEventListener('load', function () {
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
        y: 25,
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

// Main Text Animation
function mainTextAndVideos() {
    const tl = gsap.timeline();
    tl.to('.mainText p', {
        y: '0%',
        rotate: '0%',
        duration: 1,
        stagger: .3,
        z: 100,
    }, 'anime');
    tl.to('.bigVideo', {
        scale: 1,
        duration: 1,
        opacity: 1
    }, 'anime');
    tl.to('.smallImage', {
        scale: 1,
        opacity: 1,
        duration: .865,
        rotate: '0deg',
    });
}
mainTextAndVideos();

// Services section [1,2,3] Animation
function section1() {
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
section1();