// Navigation Bar Animation
function navBarAnimation() {
    let navBarLinks = document.querySelectorAll('.navBarLinks');

    navBarLinks.forEach((link) => {
        link.addEventListener('mouseenter', () => {
            let tl = gsap.timeline();
            tl.to(link, { // target the specific link being hovered over
                transform: 'translateY(-52.5%)',
                duration: 0.5
            }, 'anime12');
        });

        link.addEventListener('mouseleave', () => {
            let tl = gsap.timeline();
            tl.to(link, { // target the specific link being hovered over
                transform: 'translateY(2.5%)',
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
                    right: '0%',
                    duration: 1.5,
                    ease: "expo.out",
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
                    duration: 1.5, // Shorten the duration for smoother closing
                    ease: "expo.inOut", // Use inOut for better visual consistency
                }, 'anime14');
            flag = false;
        }
    });
}
menuIconAnimation();