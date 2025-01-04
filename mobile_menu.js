document.addEventListener('DOMContentLoaded', function () {
    const destinationButton_mobile = document.getElementById('destination_button_mobile');
    const homeButton_mobile = document.getElementById('home_button_mobile');
    const hotelButton_mobile = document.getElementById('hotel_button_mobile');
    const pricesButton_mobile = document.getElementById('prices_button_mobile');
    const contactsButton_mobile = document.getElementById('contacts_button_mobile');

    const destinations_mobile = document.getElementById('destinations');
    const home_mobile = document.getElementById('home');
    const hotels_mobile = document.getElementById('hotels');
    const prices_mobile = document.getElementById('prices');
    const contacts_mobile = document.getElementById('contact');

    if (destinationButton_mobile && destinations_mobile) {
        destinationButton_mobile.addEventListener('click', () => {
            destinations_mobile.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (homeButton_mobile && home_mobile) {
        homeButton_mobile.addEventListener('click', () => {
            home_mobile.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (hotelButton_mobile && hotels_mobile) {
        hotelButton_mobile.addEventListener('click', () => {
            hotels_mobile.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (pricesButton_mobile && prices_mobile) {
        pricesButton_mobile.addEventListener('click', () => {
            prices_mobile.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (contactsButton_mobile && contacts_mobile) {
        contactsButton_mobile.addEventListener('click', () => {
            contacts_mobile.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const observerOptions = {
        root: null,
        threshold: 0.6
    };

    

    if (destinations_mobile) observer.observe(destinations_mobile);
    if (home_mobile) observer.observe(home_mobile);
    if (hotels_mobile) observer.observe(hotels_mobile);
    if (prices_mobile) observer.observe(prices_mobile);
    if (contacts_mobile) observer.observe(contacts_mobile);
});
