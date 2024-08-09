// Event listener for creating a new contest
document.getElementById('contestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const contestData = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        creator_id: 1 // Example user ID, in a real app this would be dynamic
    };

    fetch('/api/createContest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contestData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Contest created with ID: ' + data.id);
        loadContests(); // Reload contests after creation
    })
    .catch(error => {
        console.error('Error creating contest:', error);
    });
});
