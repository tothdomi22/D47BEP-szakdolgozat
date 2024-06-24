document.addEventListener("DOMContentLoaded", () => {
        
    const wateringSlider = document.getElementById("wateringDuration");
    const wateringValue = document.getElementById("wateringValue")
    const percentSlider = document.getElementById("wateringPercent");
    const percentValue = document.getElementById("wateringPercentValue");
    const tankValue = document.getElementById("tankDepthValue");
    const tankSlider = document.getElementById("tankDepth");
    let id;
    
    fetch("http://localhost:3000/api/control-panel/data")
    .then(response => response.json())
    .then(data => {
        wateringSlider.value = data.wateringDuration,
        percentSlider.value = data.wateringPercent,
        tankSlider.value = data.tankDepth
        percentValue.innerText = `${data.wateringPercent} %`;
        wateringValue.innerText = `${data.wateringDuration} s`;
        tankValue.innerText = `${data.tankDepth} cm`,
        id = data.id
    })
    
    document.getElementById('update-form').addEventListener('submit', function(event) {
        event.preventDefault()
        let formData = {
            wateringDuration: document.getElementById('wateringDuration').value,
            wateringPercent: document.getElementById('wateringPercent').value,
            tankDepth: document.getElementById('tankDepth').value,
            id: id,
        };
        fetch("http://localhost:3000/api/control-panel/update", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('errortext').innerText = data.message;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
    })
    
    
    
    
    percentSlider.addEventListener("input", () => {
        percentValue.innerText = `${percentSlider.value} %`;
    })
    
    wateringSlider.addEventListener("input",() => {
        wateringValue.innerText = `${wateringSlider.value} s`;
    })
    
    tankSlider.addEventListener("input", () => {
        tankValue.innerText = `${tankSlider.value} cm`
    })
    
})