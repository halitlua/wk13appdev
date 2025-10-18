// 🌦️ Weather API Integration
async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const weatherDiv = document.getElementById('weatherResult');

  if (!city) {
    weatherDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const apiKey = "https://api.weatherapi.com/v1/current.json?key=fe4081a46e0d4e18b70173738242510&q="; // free demo key
  const response = await fetch(apiKey + city);
  const data = await response.json();

  if (data.error) {
    weatherDiv.innerHTML = `<p>City not found. Try again.</p>`;
  } else {
    weatherDiv.innerHTML = `
      <h3>${data.location.name}, ${data.location.country}</h3>
      <p>🌡️ Temperature: ${data.current.temp_c}°C</p>
      <p>☁️ Condition: ${data.current.condition.text}</p>
    `;
  }
}

// 📩 Contact Form Submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    document.getElementById("formResult").innerText =
      `Thank you, ${name}! We received your message: "${message}". We'll reply to ${email} soon.`;
    contactForm.reset();
  });
}
