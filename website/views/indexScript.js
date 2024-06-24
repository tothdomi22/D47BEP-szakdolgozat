document.addEventListener('DOMContentLoaded', function(){
    fetch('http://localhost:3000/api/data')
    .then(response => response.json())
    .then(data => {
        document.getElementById('temperature').innerText = `Temperature: ${data.temperature}`;
        document.getElementById('humidity').innerText = `Humidity: ${data.humidity}`;
        document.getElementById('moisture').innerText = `Moisture: ${data.moisture}`;
        document.getElementById('waterLevel').innerText = `waterLevel: ${data.waterLevel}`;
        document.getElementById('light').innerText = `light: ${data.light}`;
        document.getElementById('createdAt').innerText = `Last update: ${data.createdAt}`;
    })
    .catch(error => console.error('error fetching data:', error));
});