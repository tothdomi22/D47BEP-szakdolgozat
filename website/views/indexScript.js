document.addEventListener('DOMContentLoaded', function(){
    fetch('http://localhost:3000/api/data')
    .then(response => response.json())
    .then(data => {
        document.getElementById('temperature').innerText = `${data.temperature}°C`;
        document.getElementById('humidity').innerText = `${data.humidity}%`;
        document.getElementById('moisture').innerText = `${data.moisture}%`;
        document.getElementById('waterLevel').innerText = `${data.waterLevel}cm`;
        document.getElementById('light').innerText = `${data.light}lum`;
        document.getElementById('createdAt').innerText = `${data.createdAt}`;
    })
    .catch(error => console.error('error fetching data:', error));
});