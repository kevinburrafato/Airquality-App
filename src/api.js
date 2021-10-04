const apiKey = process.env.AQIN_API_KEY

export function geoLocation() {
  let long;
  let lat;
  
  navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;

    fetch(`https://api.waqi.info/feed/geo:${lat};${long}/?token=${apiKey}`)
      .then(response => {
        return response.json();
        })
      .then(data => {
        const { name } = data.data.city;
        const { aqi } = data.data;
        document.querySelector(".city").innerText = name;
        document.querySelector(".pm25").innerText = aqi;
        document.querySelector(".airQualityCard").classList.remove("loading");
      });
  });
};
  
export let airQuality = {
  fetchAirQuality: function (city) {
    fetch(`https://api.waqi.info/feed/${city}/?token=${apiKey}`)
      .then((response) => response.json())
      .then((data) => this.displayAirQuality(data));
    },
  displayAirQuality: function (data) {
    const { name } = data.data.city;
    const { aqi } = data.data;
    document.querySelector(".city").innerText = name;
    document.querySelector(".pm25").innerText = aqi;
    document.querySelector(".airQualityCard").classList.remove("loading");
  },
  search: function () {
    this.fetchAirQuality(document.querySelector('.search-bar').value);
  }
};

