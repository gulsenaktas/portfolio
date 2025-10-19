const key = "zpka_17523a0fa5fe4164a8c4d991be0fc58e_ae9c986e";

const getWeather = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const url = `${base}${id}`;

    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${key}`
        }
    });

    const data = await response.json();
    return data[0];
}

const getCity = async (city) => {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const url = `${base}?q=${encodeURIComponent(city)}`;

    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${key}`
        }
    });

    const data = await response.json();
    return data[0];
}
