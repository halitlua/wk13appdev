document.addEventListener("DOMContentLoaded", () => {
  // --- 🌍 COUNTRY SEARCH ---
  const countryInput = document.getElementById("countryInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultDiv = document.getElementById("result");

  if (searchBtn) {
    searchBtn.addEventListener("click", async () => {
      const countryName = countryInput.value.trim();

      if (!countryName) {
        resultDiv.innerHTML = "<p>Please enter a country name.</p>";
        return;
      }

      resultDiv.innerHTML = "<p>🔍 Searching...</p>";

      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();

        if (response.ok && data.length > 0) {
          const country = data[0];
          resultDiv.innerHTML = `
            <h3>${country.name.common} (${country.cca2})</h3>
            <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" />
            <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
          `;
        } else {
          resultDiv.innerHTML = "<p>❌ Country not found.</p>";
        }
      } catch (error) {
        resultDiv.innerHTML = "<p>⚠️ Error fetching country data.</p>";
      }
    });
  }

  // --- 📬 CONTACT FORM ---
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = "⚠️ Please fill in all fields.";
        return;
      }

      formStatus.textContent = "✅ Thank you for your message!";
      contactForm.reset();
    });
  }
});
