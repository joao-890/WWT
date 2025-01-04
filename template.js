function open_mobile() {
    var button = document.querySelector('#menu_burguer');
    var closed = "";
    var open = "";
    var mobile = document.querySelector('#mobile_menu');
    
    if (button.value == "closed") {
        mobile.style.display = "flex";
        button.value = "open";
        button.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg width="800px" height="800px" style="" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
        
        <title>cross</title>
        <desc>Created with Sketch Beta.</desc>
        <defs>
    
    </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
            <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-461.500000, -1034.000000)" fill="#8CC63F">
                <path id="cross" d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
        
    </path>
            </g>
        </g>
    </svg> `;
    }
    else {
        button.value = "closed";
        mobile.style.display = "none";
        button.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                <svg wth="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7H19" stroke="#8CC63F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 12L19 12" stroke="#8CC63F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 17L19 17" stroke="#8CC63F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
    }

    // if(button.innerHTML==)


}






const homeButton = document.getElementById('home_button');
const marketingButton = document.getElementById('marketing_button');
const videoButton = document.getElementById('video_button')
const commentsButton = document.getElementById('comments_button')
const contactsButton = document.getElementById('contacts_button')
const contacts = document.getElementById('contact');
const comments = document.getElementById('comments');
const marketing = document.getElementById('marketing');
const video = document.getElementById('video_publicity');
const home = document.getElementById('home');

marketingButton.addEventListener('click', () => {
    if (marketing) {
        marketing.scrollIntoView({ behavior: 'smooth' });
    }
});

homeButton.addEventListener('click', () => {
    if (home) {
        home.scrollIntoView({ behavior: 'smooth' });
    }
});


videoButton.addEventListener('click', () => {
    if (video) {
        video.scrollIntoView({ behavior: 'smooth' });
    }
});

commentsButton.addEventListener('click', () => {
    if (comments) {
        comments.scrollIntoView({ behavior: 'smooth' });
    }
});


contactsButton.addEventListener('click', () => {
    if (contact) {
        contact.scrollIntoView({ behavior: 'smooth' });
    }
});

const observerOptions = {
    root: null,
    threshold: 0.6
};


const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target === marketing) {
                marketingButton.classList.add('active');
                homeButton.classList.remove('active');
                videoButton.classList.remove('active');
                contactsButton.classList.remove('active');
                commentsButton.classList.remove('active');
            }
            else if (entry.target === home) {
                homeButton.classList.add('active');
                marketingButton.classList.remove('active');
                videoButton.classList.remove('active');
                contactsButton.classList.remove('active');
                commentsButton.classList.remove('active');

            }
            else if (entry.target === video) {
                homeButton.classList.remove('active');
                marketingButton.classList.remove('active');
                videoButton.classList.add('active');
                contactsButton.classList.remove('active');
                commentsButton.classList.remove('active');
            }
            else if (entry.target === comments) {
                homeButton.classList.remove('active');
                marketingButton.classList.remove('active');
                videoButton.classList.remove('active');
                contactsButton.classList.remove('active');
                commentsButton.classList.add('active');
            }
            else if (entry.target === contacts) {
                homeButton.classList.remove('active');
                marketingButton.classList.remove('active');
                videoButton.classList.remove('active');
                contactsButton.classList.add('active');
                commentsButton.classList.remove('active');
            }
        }
    });
};



const observer = new IntersectionObserver(observerCallback, observerOptions);


observer.observe(home);
observer.observe(marketing);
observer.observe(video);
observer.observe(comments);
observer.observe(contacts);

console.log('Observer added for:', marketing, home, video, comments, contacts);





const container = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    container.style.transform = `translateX(${offset}%)`;

}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const formElement = document.querySelector('.form-section');
    formElement.querySelectorAll('input, textarea').forEach(input => {
        input.value = '';
    });

    alert('Form submitted successfully!');
}


function openLanguages() {
    var languages = document.querySelector('#most-spoken-languages');
    if (languages.style.display == "none") {
        languages.style.display = "flex";
    }
    else {
        languages.style.display = "none";
    }
}