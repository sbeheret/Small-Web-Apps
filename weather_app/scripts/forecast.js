const key = "2fsKAEzq8FVPRN3sojHeagEfcaNOf9aF";

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

const getWeather = async (cityKey) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${cityKey}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};
