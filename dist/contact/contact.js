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
// Main Text Animation
function mainTextAndContent() {
    const tl = gsap.timeline();
    tl.to('.mainText h1', {
        y: '0',
        duration: .7,
        stagger: .2,
        transform: 'rotate(0deg)'
    }, 'anime').to('.helloIcon', {
        opacity: 1,
        scale: 1,
        duration: .8,
    })
    tl.to('.mainContent', {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: .5,
    }, 'anime');
}
mainTextAndContent();

// Form SVG Animation
function svgAnimation(event) {
    let path;

    // Determine which field was clicked and select the corresponding SVG path
    switch (event.target.id) {
        case 'name':
            path = document.querySelector('#svgName path');
            break;
        case 'email':
            path = document.querySelector('#svgEmail path');
            break;
        case 'details':
            path = document.querySelector('#svgDetails path');
            break;
    }

    // If the path is found, run the animation
    if (path) {
        // Animation keyframes
        const wave1 = 'M 0 5 Q 250 .1 1228 5';
        const wave2 = 'M 0 5 Q 250 14 1228 5';
        const wave4 = 'M 0 5 Q 250 5 1228 5';

        // GSAP timeline for continuous wave animation
        const tl = gsap.timeline({ yoyo: true });

        tl.to(path, {
            attr: { d: wave1 },
            duration: 0.1,
            ease: 'sine.inOut'
        })
            .to(path, {
                attr: { d: wave2 },
                duration: 0.1,
                ease: 'sine.inOut'
            })
            .to(path, {
                attr: { d: wave4 },
                duration: 0.1,
                ease: 'sine.inOut'
            });
    }
}

const inputName = document.querySelector('#name');
const email = document.querySelector('#email');
const details = document.querySelector('#details');

inputName.addEventListener('click', svgAnimation);
email.addEventListener('click', svgAnimation);
details.addEventListener('click', svgAnimation);

// TextArea Handling
const detailsTextarea = document.querySelector('#details');
detailsTextarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = `${this.scrollHeight}px`;
});


// Initialize a Set to track unique selected texts
let selectedTexts = new Set();

document.querySelectorAll('.selectable').forEach(div => {
    div.addEventListener('click', function () {
        const overlay = this.querySelector('.overlay');
        overlay.classList.toggle('active');

        // Get all the span elements within the div
        const spans = this.querySelectorAll('span');

        if (spans.length > 0) {
            const firstSpanText = spans[0].innerText
                .replace(/\s+/g, ' ')  // Normalize whitespace
                .trim();  // Remove leading and trailing whitespace

            if (selectedTexts.has(firstSpanText)) {
                // If text is already in the Set, remove it
                selectedTexts.delete(firstSpanText);
            } else {
                // If text is not in the Set, add it
                selectedTexts.add(firstSpanText);
            }
        }

        // Convert Set to Array if needed
        var uniqueTextsArray = Array.from(selectedTexts);

    });
});


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get selected text array
    const selectedTextsArray = Array.from(selectedTexts);
    // Form data processing
    const formData = new FormData(form);
    formData.append('Interested', JSON.stringify(selectedTextsArray));
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Sending...";
  
    // GSAP animation for #result div
    gsap.fromTo('#result', {
      opacity: 0,
    }, {
      opacity: 1,
      duration: .5, // duration in seconds
    });
  
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
  
      // GSAP animation for #result div
      gsap.fromTo('#result', {
        opacity: 0,
      }, {
        opacity: 1,
        duration: .5, // duration in seconds
      });
  
    })
    .catch(error => {
      // Handle errors
      result.innerHTML = "Something went wrong!";
  
      // GSAP animation for #result div
      gsap.fromTo('#result', {
        opacity: 0,
      }, {
        opacity: 1,
        duration: .5, // duration in seconds
      });
    })
    .then(function() {
      // Reset form and hide result message after submission
      form.reset();
      setTimeout(() => {
        result.style.opacity = 0;
      }, 1500);
      
    });
  });
  
  