document.getElementById('contestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        startTime: document.getElementById('start-time').value,
        endTime: document.getElementById('end-time').value
    };

    // Send form data to backend
    fetch('/api/contests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Contest Created Successfully!');
            document.getElementById('contestForm').reset(); // Clear the form
        } else {
            alert('Failed to create contest. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
