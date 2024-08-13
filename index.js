const loveMeter = document.getElementById('love-meter');
const resultText = document.getElementById('result-text');
const name1 = document.getElementById("YourName");
const name2 = document.getElementById("YourPartnerName");

//Buttons as input
const calculateButton = document.getElementById('calculate-button');
const resetButton = document.getElementById('reset-button');

// Function to update the meter value
function updateMeter(event) {
    event.preventDefault(); 
    console.log("updateMeter function called");

    if (name1.value && name2.value) {
        console.log("Input values:", name1.value, name2.value);
        const loveResult = Math.floor(Math.random() * 100);
        console.log("Love result:", loveResult);

        // Update the progress bar and result text
        loveMeter.value = loveResult;
        resultText.textContent = `Your love result is ${loveResult}%`;
    } else {
        resultText.textContent = "Enter the Names";
    }
}

// Function to reset the meter and result
function resetMeter() {
    loveMeter.value = 0;
    resultText.textContent = "Enter the Names";
    name1.value = '';
    name2.value = '';
}

//Event listeners
calculateButton.addEventListener('click', updateMeter);
resetButton.addEventListener('click', resetMeter);

calculateButton.addEventListener('click', updateMeter);
