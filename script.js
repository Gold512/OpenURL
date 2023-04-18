function openLink() {
    let url = document.getElementById('url').value
    window.open(new URL(url), '_self');
}

document.addEventListener('keydown', ev => {
    if(ev.key !== 'Enter') return;
    openLink()
});

document.getElementById('input').focus();