// document.addEventListener('DOMContentLoaded', function () {
//     const homeButton = document.getElementById('home_button');
//     const expectationsButton = document.getElementById('expectations_button');
//     const videoButton = document.getElementById('video_button');
//     const commentsButton = document.getElementById('comments_button');
//     const contactsButton = document.getElementById('contacts_button');

//     const homeSection = document.getElementById('home');
//     const expectationsSection = document.getElementById('marketing');
//     const videoSection = document.getElementById('video_publicity');
//     const commentsSection = document.getElementById('comments');
//     const contactsSection = document.getElementById('contact');

//     console.log('homeButton:', homeButton);
//     console.log('expectationsButton:', expectationsButton);
//     console.log('videoButton:', videoButton);
//     console.log('commentsButton:', commentsButton);
//     console.log('contactsButton:', contactsButton);

//     console.log('homeSection:', homeSection);
//     console.log('expectationsSection:', expectationsSection);
//     console.log('videoSection:', videoSection);
//     console.log('commentsSection:', commentsSection);
//     console.log('contactsSection:', contactsSection);

//     function scrollToSection(event, section) {
//         event.preventDefault();
//         section.scrollIntoView({ behavior: 'smooth' });
//         console.log(`${section.id} button ativado`);
//     }

//     if (homeButton && homeSection) {
//         homeButton.addEventListener('click', (event) => scrollToSection(event, homeSection));
//     }

//     if (expectationsButton && expectationsSection) {
//         expectationsButton.addEventListener('click', (event) => scrollToSection(event, expectationsSection));
//     }

//     if (videoButton && videoSection) {
//         videoButton.addEventListener('click', (event) => scrollToSection(event, videoSection));
//     }

//     if (commentsButton && commentsSection) {
//         commentsButton.addEventListener('click', (event) => scrollToSection(event, commentsSection));
//     }

//     if (contactsButton && contactsSection) {
//         contactsButton.addEventListener('click', (event) => scrollToSection(event, contactsSection));
//     }

//     const observerOptions = {
//         root: null,
//         threshold: 0.6
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 console.log(`${entry.target.id} is visible`);
//             }
//         });
//     }, observerOptions);

//     if (homeSection) observer.observe(homeSection);
//     if (expectationsSection) observer.observe(expectationsSection);
//     if (videoSection) observer.observe(videoSection);
//     if (commentsSection) observer.observe(commentsSection);
//     if (contactsSection) observer.observe(contactsSection);
// });