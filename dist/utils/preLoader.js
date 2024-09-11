// Preloader
function preloader() {
    document.body.classList.add('no-scroll');

    let tl = gsap.timeline({
        onComplete: hidePreloader // Hide preloader after animations complete
    });

    tl.to('#We h1', {
        y: '0%',
        duration: 0.4,
        ease: 'power2.out'
    }).to('#Create h1', {
        y: '0%',
        duration: 0.5,
        ease: 'power2.out'
    }, 'anime2').to('#Memorable h1', {
        y: '0%',
        duration: 0.6,
        ease: 'power2.out'
    }, 'anime2').to('#Websites', {
        y: '0%',
        duration: 0.7,
        ease: 'power2.out'
    }, 'anime2').to('#counter', {
        y: '0%',
        duration: 0.8,
        ease: 'power2.out'
    }, 'anime2').to('#counter', {
        onStart: function () {
            let counter = document.getElementById('counter');
            let count = 0;
            let interval = setInterval(() => {
                if (count <= 100) {
                    counter.innerHTML = `${count++}%`;
                } else {
                    clearInterval(interval);
                }
            }, 18);
        }
    }, 'anim');

    tl.to('#We', {
        left: "7%",
        duration: 1
    }, 'anim')
        .to('#We', {
            top: "10vw",
            duration: 1
        })
        .to('#Create', {
            left: "25%"
        }, 'anim')
        .to('#Memorable', {
            left: "15%",
            duration: 1.7
        }, 'anim')
        .to('#Websites', {
            left: "7%",
            duration: 1.9
        }, 'anim')
        .to('#We h1', {
            y: '-100%',
            ease: 'power2.out',
            duration: 1
        }, 'anime3')
        .to('#Create h1', {
            y: '-100%',
            ease: 'power2.out',
            duration: 0.9
        }, 'anime3')
        .to('#Memorable h1', {
            y: '-100%',
            ease: 'power2.out',
            duration: 0.8
        }, 'anime3')
        .to('#Websites', {
            y: '-100%',
            ease: 'power2.out',
            duration: 0.6
        }, 'anime3')
        .to('#counter', {
            y: '-100%',
            ease: 'power2.out',
            duration: 0.4
        }, 'anime3');

    // Hide preloader after the timeline completes
    function hidePreloader() {
        document.body.classList.remove('no-scroll');
        gsap.set('#Preloader', { display: 'none' });
    }
}
preloader();