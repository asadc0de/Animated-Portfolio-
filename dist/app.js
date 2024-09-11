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
gsap.to('.name, .menuIcon', {
    opacity:1,
    duration:1,
    delay:4.5
});
// Function to set data-scroll-speed based on screen width
function setScrollSpeed() {
    const mainSection = document.querySelector('.mainSection');
    if (window.innerWidth <= 500) {
        mainSection.setAttribute('data-scroll-speed', '3');
    } else {
        mainSection.setAttribute('data-scroll-speed', '6');
    }
}
setScrollSpeed();
window.addEventListener('resize', setScrollSpeed);

// Create Animation
function createAnim() {
    let animate = document.getElementById('animateme');
    animate.addEventListener('mouseenter', () => {
        let tl = gsap.timeline();
        tl.from(animate, {
            scale: 1.0777,
            ease: "sine.inOut",
            duration: .7
        });
    });
}
createAnim();

// Main Text Animation
function mainTextAnim() {
    let tl = gsap.timeline();
    tl.from('.WE-2 h1', {
        y: '100%',
        duration: .8,
        delay: 3.8,
    }, 'anime3').from('.MEMORABLE-2 h1', {
        y: '100%',
        duration: .8,
        delay: 4.2,
    }, 'anime3').from('.WEBSITES-2 h1', {
        y: '100%',
        duration: .8,
        delay: 4.6,
    }, 'anime3').from('#animateme', {
        scale: .7,
        duration: .8,
        delay: 4,
        opacity: 0
    }, 'anime3').from('.Create', {
        y: 130,
        duration: .9,
        delay: 4,
    }, 'anime3').from('.video-circle', {
        y: 40,
        duration: .7,
        opacity: 0,
    });
}
mainTextAnim();

// Video Circle Animation
function videoCircleAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    let tl;

    function updateAnimation() {
        const screenWidth = window.innerWidth;
        let startPercentage = '90%'; // Default start percentage
        let animationDuration = 1; // Default animation duration
        let initialWidth = '37vw';
        let initialheight = '37vw';
        let initialheightAnime = '37vw';

        if (screenWidth <= 1432) {
            startPercentage = '70%'; // Change start percentage for screen width <= 1432px
        }
        if (screenWidth <= 1232) {
            startPercentage = '80%'; // Change start percentage for screen width <= 1432px
        }
        if (screenWidth <= 954) {
            startPercentage = '30%'; // Change start percentage for screen width <= 954px
        }
        if (screenWidth <= 720) {
            startPercentage = '20%';
        }
        if (screenWidth <= 640) {
            startPercentage = '40%';
            initialWidth = '50vw';
            initialheight = '50vw';
            initialheightAnime = '50vw';
        }

        // Kill previous timeline to avoid stacking animations
        if (tl) {
            tl.kill();
        }

        // Create a new timeline with updated parameters
        tl = gsap.timeline({
            scrollTrigger: {
                scroller: '.main',
                trigger: '.video-circle',
                start: `top ${startPercentage}`, // Dynamically set start percentage
                end: 'top 5%',
                scrub: true,
                // markers: true
            }
        });
        tl.set('.video-circle', { width: initialWidth, height: initialheight });
        tl.to('.video-circle', {
            width: '100%',
            borderRadius: '500px',
            height: `${initialheightAnime}`,
            duration: animationDuration,
            ease: "power4.out",
        }, 'anime5');
    }

    // Initial call to set up the animation
    updateAnimation();

    // Listen for window resize events to dynamically update the animation
    window.addEventListener('resize', updateAnimation);
}
videoCircleAnimation();

// Line Grow Animation
function lineGrowAnim() {
    gsap.to('.line1', {
        transform: 'translateX(0%)',
        duration: 1.5,
         ease: "power2.inOut",
        ease: "power2.inOut",
        scrollTrigger: {
            // markers: true,
            scroller: '.main',
            trigger: '.line1',
            start: 'top 90%',
            end: 'top 0',
        }
    });
    gsap.to('.line3', {
        transform: 'translateX(0%)',
        duration: 1.5,
         ease: "power2.inOut",
        scrollTrigger: {
            // markers: true,
            scroller: '.main',
            trigger: '.line3',
            start: 'top 96%',
            end: 'top 0',
        }
    });
    gsap.to('.line4', {
        transform: 'translateX(0%)',
        duration: 1.5,
         ease: "power2.inOut",
        scrollTrigger: {
            // markers: true,
            scroller: '.main',
            trigger: '.line4',
            start: 'top 96%',
            end: 'top 0',
        }
    });
}
lineGrowAnim();

// Video Text Animation
function videoTextAnim() {
    let tl = gsap.timeline();
    tl.to('.text', {
        onStart: function () {
            tl.to('#videoText1 h1', {
                y: '0%',
                duration: .6,
                transform: 'rotate(0)'
            }, 'anime6').to('#videoText2 h1', {
                y: '0%',
                duration: .8,
                transform: 'rotate(0)'
            }, 'anime6').to('#videoText3 h1', {
                y: '0%',
                duration: 1,
                transform: 'rotate(0)'
            }, 'anime6').to('#videoText4 h1', {
                y: '0%',
                duration: 1.2,
                transform: 'rotate(0)'
            }, 'anime6');
        },
        scrollTrigger: {
            trigger: '.text',
            // markers: true,
            scroller: '.main',
            start: 'top 87%',
            end: 'top 50%',
        }
    });
}
videoTextAnim();

// Design Text Animation
function designText() {
    let tl = gsap.timeline();
    tl.to('.text2', {
        onStart: function () {
            tl.to('#designText1 h1', {
                y: '0%',
                transform: 'rotate(0)',
                duration: .6,
            }, 'anime7').to('#designText2 h1', {
                y: '0%',
                transform: 'rotate(0)',
                duration: .8,
            }, 'anime7').to('#designText3 h1', {
                y: '0%',
                transform: 'rotate(0)',
                duration: 1,
            }, 'anime7');
        },
        scrollTrigger: {
            trigger: '.text2',
            scroller: '.main',
            // markers: true,
            start: 'top 96%',
            end: 'top 70%',
        }
    });

    const videoContainer = document.querySelector('.video-container');
    const innerContainer = document.querySelector('.creative-design');

    if (videoContainer && innerContainer) {
        for (let i = 0; i < 3; i++) {
            const clone = innerContainer.cloneNode(true);
            videoContainer.appendChild(clone);
        }
    }
}
designText();

// Development Text Animation
function developmentText() {
    let tl = gsap.timeline();
    tl.to('.text3', {
        onStart: function () {
            tl.to('#devText1 h1', {
                y: '0%',
                transform: 'rotate(0)',
                duration: .6
            }, 'anime8').to('#devText2 h1', {
                y: '0%',
                transform: 'rotate(0)',
                duration: .8
            }, 'anime8').to('#devText3 h1', {
                y: '0%',
                transform: 'rotate(0)',
                duration: 1
            }, 'anime8');
        },
        scrollTrigger: {
            trigger: '.text3',
            // markers: true,
            scroller: '.main',
            start: 'top 96%',
            end: 'top 70%',
        }
    });
}
developmentText();

// Philosophy Text Animation
function philosophyText() {
    let tl = gsap.timeline();
    tl.to('.text4', {
        onStart: function () {
            tl.to('#philosophyText1 h1', {
                y: '0%',
                duration: .5
            }, 'anime9').to('.phyVideo', {
                opacity: 1,
                scale: 1,
                duration: .6,
                delay: .6
            }, 'anime9').to('#philosophyText2 h1', {
                y: '0%',
                duration: 1
            }, 'anime9');
        },
        scrollTrigger: {
            trigger: '.text4',
            scroller: '.main',
            // markers: true,
            start: 'top 95%',
            end: 'top 70%',
        }
    });
}
philosophyText();

// Philosophy Paragraph Animation
function philosophyPara() {
    let tl = gsap.timeline();
    tl.to('.text5', {
        onStart: function () {
            tl.to('#philosophyPara1 h2', {
                y: '0%',
                duration: .5,
                transform: 'rotate(0)'
            }, 'anime9').to('#philosophyPara2 h2', {
                y: '0%',
                duration: .7,
                transform: 'rotate(0)'
            }, 'anime9').to('#philosophyPara3 h2', {
                y: '0%',
                duration: .9,
                transform: 'rotate(0)'
            }, 'anime9').to('#philosophyPara4 h2', {
                y: '0%',
                duration: 1,
                transform: 'rotate(0)'
            }, 'anime9')
        },
        scrollTrigger: {
            trigger: '.text5',
            scroller: '.main',
            // markers: true,
            start: 'top 99%',
            end: 'top 70%',
        }
    });
}
philosophyPara();