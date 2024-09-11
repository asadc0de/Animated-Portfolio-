// Mouse Follower + Magnet Animation
function shouldDisableAnimation() {
    const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth <= 500;
    return isMobileDevice || isSmallScreen;
}

if (!shouldDisableAnimation()) {
    Shery.mouseFollower();
    Shery.makeMagnet('.menuIcon, nav h4, .and, .frontend-skills, .backend-skills, .miscellaneous-skills, .bigVideo');
}
