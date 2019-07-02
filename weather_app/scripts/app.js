const form = document.querySelector(".change-location");
const details = document.querySelector(".details");
const card = document.querySelector(".card");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon img")

const updateUI = (data) => {
    const { cityData, weather } = data;

    console.log(weather);
    details.innerHTML = `
    <h5 class="my-3">${cityData.EnglishName}, ${cityData.Country.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`

    //Show card if hidden
    if (card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    //Day or Night
    if (weather.IsDayTime){
        time.setAttribute('src', 'img/day.svg');
    }
    else {
        time.setAttribute('src', 'img/night.svg');
    }
    

    icon.setAttribute('src', `img/icons/${weather.WeatherIcon}.svg`);
    icon.setAttribute('alt', weather.WeatherText);
};

const updateCity = async (cityName) => {
    const cityData = await getCity(cityName);
    const weather = await getWeather(cityData['Key']);

    return { cityData, weather };
}

form.addEventListener('submit', e => {
    e.preventDefault();
    
    //Get city value
    const city = form.city.value.trim();
    form.reset();

    //Update the UI
    updateCity(city)
        .then(data => {
            updateUI(data);
        })
        .catch(err => console.log(err));
})