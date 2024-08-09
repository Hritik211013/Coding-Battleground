document.getElementById('contestForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        description: formData.get('description'),
        start_time: formData.get('start-time'),
        end_time: formData.get('end-time'),
    };

    fetch('/api/createContest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Contest created successfully!');
        // Optionally redirect to another page or reset the form
    })
    .catch(error => {
        console.error('Error creating contest:', error);
    });
});
