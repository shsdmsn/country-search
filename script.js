function searchCountry() {
    const country = document.getElementById("countryInput").value.trim();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous result
  
    if (!country) {
      resultDiv.innerHTML = "<p>Please enter a country name.</p>";
      return;
    }
