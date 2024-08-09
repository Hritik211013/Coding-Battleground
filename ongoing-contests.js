function loadContests() {
    fetch('/api/getContests')
        .then(response => response.json())
        .then(contests => {
            const contestDiv = document.getElementById('contests');
            contestDiv.innerHTML = ''; // Clear existing contests

            contests.forEach(contest => {
                const contestElement = document.createElement('div');
                contestElement.classList.add('contest-card');
                contestElement.innerHTML = `
                    <h3>${contest.name}</h3>
                    <p>${contest.description}</p>
                    <button onclick="joinContest(${contest.id})">Join</button>
                `;
                contestDiv.appendChild(contestElement);
            });
        })
        .catch(error => {
            console.error('Error fetching contests:', error);
        });
}

function joinContest(contestId) {
    fetch(`/api/joinContest/${contestId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: 1 }) // Example user ID, in a real app this would be dynamic
    })
    .then(response => response.json())
    .then(data => {
        alert('Successfully joined the contest!');
        // Additional logic like redirecting to the contest page or updating the UI can go here
    })
    .catch(error => {
        console.error('Error joining contest:', error);
    });
}

document.addEventListener('DOMContentLoaded', loadContests);
