import { geoLocation } from "./api";
import { airQuality } from "./api";

document.querySelector('button.here').addEventListener('click', (geoLocation));

document.querySelector('button.searchBtn').addEventListener('click', function () {
    airQuality.search();
  });
  
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter") {
        airQuality.search();
    }
});

