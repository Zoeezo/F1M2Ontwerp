const image = document.getElementById('image');

image.addEventListener('click', () => {
    var win = window.open('https://www.bodyworlds.nl/', '_blank');
    win.focus();
});