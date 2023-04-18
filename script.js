const header = 'https://'

function openLink() {
    let url = document.getElementById('url').value
    if(url.slice(0, header.length - 1) === header) url = header + url;
    window.open(url, '_self');
}

document.addEventListener('keydown', ev => {
    if(ev.key !== 'Enter') return;
    openLink()
});

document.getElementById('input').focus();