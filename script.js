function searchCountry() {
    const country = document.getElementById("countryInput").value.trim();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous result
  
    if (!country) {
      resultDiv.innerHTML = "<p>Please enter a country name.</p>";
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      if (!response.ok) throw new Error("Country not found");
      return response.json();
    })
    .then(data => {
      const countryData = data[0]; // take the first result
      const { name, capital, flags, currencies, population, region, area } = countryData;
      const currency = Object.values(currencies)[0];

      resultDiv.innerHTML = `
        <div class="country-card">
          <h2>${name.common}</h2>
          <img src="${flags.svg}" alt="Flag of ${name.common}" />
          <p><strong>Capital:</strong> ${capital}</p>
          <p><strong>Currency:</strong> ${currency.name} (${currency.symbol})</p>
          <p><strong>Population:</strong> ${population.toLocaleString()}</p>
          <p><strong>Region:</strong> ${region}</p>
          <p><strong>Area:</strong> ${area} km²</p>
        </div>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = `<p>${error.message}</p>`;
    });
}