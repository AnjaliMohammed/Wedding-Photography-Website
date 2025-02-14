document.addEventListener('DOMContentLoaded', function() {

    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo')) || {};
    const clientInfo = JSON.parse(localStorage.getItem('clientInfo')) || {};
    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    document.getElementById('order-message').innerHTML = 
        `${clientInfo.firstName || 'Guest'}, your order <strong id="order-number">#${orderNumber}</strong> is confirmed!`;

    document.getElementById('order-date').textContent = bookingInfo.weddingDate || 'TBA';
    document.getElementById('order-time').textContent = bookingInfo.timeRange || 'TBA';
    document.getElementById('order-location').textContent = bookingInfo.weddingLocation || 'TBA';
    document.getElementById('package-link').textContent = `${bookingInfo.selectedPackage || 'No Package Selected'} Package`;
    
});