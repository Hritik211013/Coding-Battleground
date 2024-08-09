function loadLeaderboard() {
    fetch('/api/getLeaderboard')
        .then(response => response.json())
        .then(leaderboard => {
            const leaderboardTable = document.querySelector('#leaderboard tbody');
            leaderboardTable.innerHTML = ''; // Clear existing leaderboard data

            leaderboard.forEach((entry, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${entry.user_id}</td>
                    <td>${entry.score}</td>
                `;
                leaderboardTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching leaderboard:', error);
        });
}

document.addEventListener('DOMContentLoaded', loadLeaderboard);
