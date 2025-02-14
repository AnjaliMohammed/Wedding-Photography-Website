document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        alert('Your message has been sent! Thank you for contacting us.');
        form.reset();
    });
});
