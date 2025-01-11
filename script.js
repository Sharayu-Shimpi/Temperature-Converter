function convertTemperature() {

    const temperature = document.getElementById('temperature').value;
    const conversionType = document.getElementById('conversionType').value;


    if (temperature === '') {
      alert('Please enter a temperature value!');
      return;
    }

    let result;
    if (conversionType === 'CtoF') {

      result = (temperature * 9/5) + 32 + '°F';
    } else if (conversionType === 'FtoC') {

      result = ((temperature - 32) * 5/9).toFixed(2) + '°C';
    }

    
    document.getElementById('result').innerHTML = `Converted Temperature: ${result}`;
  }
