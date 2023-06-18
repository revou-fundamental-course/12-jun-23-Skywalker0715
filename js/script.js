const inputField = document.getElementById('inputField');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const reverseBtn = document.getElementById('reverseBtn');
const resultDiv = document.getElementById('result');
const logicDiv = document.getElementById('logic');

// Fungsi untuk mengkonversi suhu dari Celsius ke Fahrenheit
function convert() {
    const celsius = parseFloat(inputField.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        resultDiv.innerText = `${celsius} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`;
        logicDiv.innerText = `(${celsius} * 9/5) + 32 = ${fahrenheit.toFixed(2)}`;
    } else {
        resultDiv.innerText = 'Invalid input';
        logicDiv.innerText = '';
    }
}

// Fungsi untuk mereset input dan hasil
function reset() {
    inputField.value = '';
    resultDiv.innerText = '';
    logicDiv.innerText = '';
}

// Fungsi untuk membalikkan nilai input antara Celsius dan Fahrenheit
function reverse() {
    const celsius = parseFloat(inputField.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        inputField.value = fahrenheit.toFixed(2);
        resultDiv.innerText = `${fahrenheit.toFixed(2)} Fahrenheit`;
        logicDiv.innerText = '';
    } else {
        resultDiv.innerText = 'Invalid input';
        logicDiv.innerText = '';
    }
}
