function saveClientInfoAndNavigate() {

    const clientInfo = {
        firstName: document.getElementById('first-name').value,
    };

    localStorage.setItem('clientInfo', JSON.stringify(clientInfo));
    window.location.href = 'confirmation.html';
}