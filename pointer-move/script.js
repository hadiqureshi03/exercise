document.addEventListener('pointermove', (e) => {
    const lightness = (e.clientX / window.innerWidth) * 100;
    document.documentElement.style.setProperty('--lightness', lightness + '%');
});
