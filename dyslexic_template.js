let isDyslexicMode = false;

function dyslexic() {
    
    isDyslexicMode = !isDyslexicMode;
    console.log(isDyslexicMode); // Log the current state
    if (isDyslexicMode) {

        document.body.style.fontFamily = 'var(--dyslexic) !important';
        
        console.log('Dyslexic mode enabled');
      
    } else {
        document.body.style.fontFamily = 'var(--normal)';
        console.log('Dyslexic mode not enabled');
        document.body.style.lineHeight = 'auto';
    }
}