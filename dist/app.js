// Mouse Follower + Magnet Animation
function mouseFollower() {
    document.addEventListener('DOMContentLoaded', function () {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 500;
        if (!isMobile) {
            Shery.makeMagnet(".menuIcon, .project-ms, .navBarLinksMain", {
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                duration: 1,
            });
        }
    });
}
mouseFollower();

// Preloader
function preloader() {
    let tl = gsap.timeline();
    tl.from('#We h1', {
        y: '100%',
        duration: .4,
        ease: Power2
    }).from('#Create h1', {
        y: '100%',
        duration: .5,
        ease: Power2
    }, 'anime2').from('#Memorable h1', {
        y: '100%',
        duration: .6,
        ease: Power2
    }, 'anime2').from('#Websites', {
        y: '100%',
        duration: .7,
        ease: Power2
    }, 'anime2').from('#counter', {
        y: '100%',
        duration: .8,
        ease: 'power2.out'
    }, 'anime2').to('#counter', {
        onStart: function () {
            let counter = document.getElementById('counter');
            let count = 0;
            setInterval(() => {
                if (count <= 100) {
                    counter.innerHTML = `${count++}%`;
                }
            }, 18);
        }
    }, 'anim');


    tl.to('#We', {
        left: "7%",
        duration: 1
    }, 'anim')
        .to('#We', {
            top: "21.3%",
            duration: 1
        });
    tl.to('#Create', {
        left: "25%"
    }, 'anim');
    tl.to('#Memorable', {
        left: "15%",
        duration: 1.7
    }, 'anim');
    tl.to('#Websites', {
        left: "5%",
        duration: 1.9
    }, 'anim')
        .to('#We h1', {
            y: '-100%',
            ease: Power2,
            duration: 1
        }, 'anime3').to('#Create h1', {
            y: '-100%',
            ease: Power2,
            duration: .9
        }, 'anime3').to('#Memorable h1', {
            y: '-100%',
            ease: Power2,
            duration: .8
        }, 'anime3').to('#Websites', {
            y: '-100%',
            ease: Power2,
            duration: .6
        }, 'anime3').to('#counter', {
            y: '-100%',
            ease: 'power2.out',
            duration: .4
        }, 'anime3').to('#counter', {
            onStart: function () {
                let counter = document.getElementById('counter');
                let count = 0;
                setInterval(() => {
                    if (count <= 100) {
                        counter.innerHTML = `${count++}%`;
                    }
                }, 18);
            }
        }).to('#Preloader-section', {
            display: 'none'
        });
}
// preloader();

// Create Animation
function createAnim() {
    let animate = document.getElementById('animateme');
    animate.addEventListener('mouseenter', () => {
        let tl = gsap.timeline();
        tl.to(animate, {
            scale: 1.0777,
            ease: 'linear',
            duration: .3
        });
        tl.from(animate, {
            scale: 1.0777,
            ease: 'linear',
            duration: .2
        });
    });
}
createAnim();

// Main Text Animation
function mainTextAnim() {
    let tl = gsap.timeline();
    tl.from('.WE-2 h1', {
        y: '100%',
        duration: .6
    }, 'anime3').from('.MEMORABLE-2 h1', {
        y: '100%',
        duration: .8
    }, 'anime3').from('.WEBSITES-2 h1', {
        y: '100%',
        duration: 1,
    }, 'anime3').from('#animateme', {
        scale: .7,
        duration: .8
    }, 'anime3').from('.Create', {
        y: 130,
        duration: .9
    }, 'anime3');
}
mainTextAnim();

// Video Circle Animation
function videoCircleAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    let tl;

    function updateAnimation() {
        const screenWidth = window.innerWidth;
        let startPercentage = '60%'; // Default start percentage
        let animationDuration = 4; // Default animation duration
        let initialWidth = '37vw';
        let initialheight = '37vw';
        let initialheightAnime = '37vw';

        if (screenWidth <= 1432) {
            startPercentage = '40%'; // Change start percentage for screen width <= 1432px
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
            ease: 'power2.out',
            borderRadius: '500px',
            height: `${initialheightAnime}`,
            duration: animationDuration,
        }, 'anime5')
            .to('.mainSection', {
                y: '-60%',
                ease: 'power2.out',
                scrub: true,
                duration: animationDuration,
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
        ease: 'in-out',
        scrollTrigger: {
            // markers: true,
            scroller: '.main',
            trigger: '.line1',
            start: 'top 90%',
            end: 'top 0',
        }
    });
    gsap.to('.line2', {
        transform: 'translateX(0%)',
        duration: 1.5,
        ease: 'in-out',
        scrollTrigger: {
            // markers: true,
            scroller: '.main',
            trigger: '.line2',
            start: 'top 96%',
            end: 'top 0',
        }
    });
    gsap.to('.line3', {
        transform: 'translateX(0%)',
        duration: 1.5,
        ease: 'in-out',
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
        ease: 'in-out',
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
                duration: .5,
                transform: 'rotate(0)'
            }, 'anime6').to('#videoText2 h1', {
                y: '0%',
                duration: .6,
                transform: 'rotate(0)'
            }, 'anime6').to('#videoText3 h1', {
                y: '0%',
                duration: .7,
                transform: 'rotate(0)'
            }, 'anime6').to('#videoText4 h1', {
                y: '0%',
                duration: .8,
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
                duration: .5
            }, 'anime7').to('#designText2 h1', {
                y: '0%',
                transform: 'rotate(0)',
                duration: .7
            }, 'anime7').to('#designText3 h1', {
                y: '0%',
                transform: 'rotate(0)',
                duration: .9
            }, 'anime7').to('#designText4 h1', {
                y: '0%',
                transform: 'rotate(0)',
                duration: 1
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
                duration: .5
            }, 'anime8').to('#devText2 h1', {
                y: '0%',
                transform: 'rotate(0)',
                duration: .7
            }, 'anime8').to('#devText3 h1', {
                y: '0%',
                transform: 'rotate(0)',
                duration: .9
            }, 'anime8');
        },
        scrollTrigger: {
            trigger: '.text3',
            // markers: true,
            scroller: '.main',
            start: 'top 70%',
            end: 'top 90%',
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
            }, 'anime9').to('#philosophyText2 h1', {
                y: '0%',
                duration: .7
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

// Philosophy Paragraph Animation
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

// Footer Dynamic Date
function getDate() {
    let footerdate = document.querySelector('.date');
    let date = new Date();
    footerdate.innerHTML = date.getFullYear();
}
getDate();

