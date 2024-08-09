document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Your message has been sent successfully!');
        // Optionally reset the form or provide additional feedback
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
});
