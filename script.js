const apiKey = "552dcabacc706c839ef07c731be8e690"; // yahan apni OpenWeatherMap key paste karo

async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const resultDiv = document.getElementById("result");

  if(city === ""){
    resultDiv.innerHTML = "Please enter city name";
    return;
  }

  resultDiv.innerHTML = "Loading...";

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    
    if(!response.ok){
      throw new Error("City not found");
    }

    const data = await response.json();
    
    resultDiv.innerHTML = `
      <h3>${data.name}</h3>
      <h1>${Math.round(data.main.temp)}°C</h1>
      <p>${data.weather[0].main}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind: ${data.wind.speed} km/h</p>
    `;

  } catch (error) {
    resultDiv.innerHTML = "City nahi mila! Sahi naam likho.";
  }
}