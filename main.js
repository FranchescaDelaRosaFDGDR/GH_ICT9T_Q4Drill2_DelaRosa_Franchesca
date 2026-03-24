// Heat Index Checker
function heat_index() {
    let temperature = Number(document.getElementById('temperature').value);
    let humidity = Number(document.getElementById('humidity').value);
    
    // Validate inputs
    if (isNaN(temperature) || isNaN(humidity)) {
        window.alert('Please enter valid numbers for both temperature and humidity');
        return;
    }
    
    let heatIndex = temperature + (0.33 * humidity) - 4;

    switch (true) {
        case (heatIndex <= 27): 
            window.alert('Heat Index: ' + heatIndex.toFixed(2) + ' (comfortable/cool)');
            break;
        case (heatIndex <= 32): 
            window.alert('Heat Index: ' + heatIndex.toFixed(2) + ' (warm)');
            break;
        case (heatIndex <= 37): 
            window.alert('Heat Index: ' + heatIndex.toFixed(2) + ' (hot)');
            break;
        case (heatIndex <= 41): 
            window.alert('Heat Index: ' + heatIndex.toFixed(2) + ' (very hot/caution)');
            break;
        case (heatIndex >= 42): 
            window.alert('Heat Index: ' + heatIndex.toFixed(2) + ' (extreme heat/danger)');
            break;
    }
}

// Instructions
function toggle_instructions() {
    document.getElementById('toggle').innerHTML = 'Input the value of the temperature (°C) and humidity (%). After, click the button to see the heat index and the status.';
}