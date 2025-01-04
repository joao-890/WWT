let isDyslexicMode = false;

function dyslexic() {
    let prices = document.querySelector('#prices');
    let contacts = document.querySelector('#contact');
    isDyslexicMode = !isDyslexicMode;
    console.log(isDyslexicMode); // Log the current state
    if (isDyslexicMode) {
        document.body.style.fontFamily = 'var(--dyslexic)';
        console.log('Dyslexic mode enabled');
        prices.classList.add('dyslexic-mode');
        contacts.classList.add('dyslexic-mode1');
    } else {
        document.body.style.fontFamily = 'var(--normal)';
        prices.classList.remove('dyslexic-mode');
        contacts.classList.remove('dyslexic-mode1');
    }
}