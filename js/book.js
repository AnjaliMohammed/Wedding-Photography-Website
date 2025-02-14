function saveBookingAndNavigate() {
    
    const bookingInfo = {
        weddingDate: document.getElementById('wedding-date').value,
        timeRange: document.getElementById('time-range').value,
        weddingLocation: document.getElementById('wedding-location').value,
        selectedPackage: document.querySelector('input[name="package"]:checked')?.value,
    };

    localStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));
    window.location.href = 'clientInfo.html';
}