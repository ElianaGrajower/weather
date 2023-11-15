import { getForcast } from "./functions.js";

const content = document.querySelector("#content");

const cityArr = ["eilat", "london", "new york", "alaska"];

const createColCard = (obj) => {
    const colEL = document.createElement("div");
    colEL.className = "col-md-4 p-1 m-4";
    const cardEl = document.createElement("div");
    cardEl.className = "card p-4 shadow m-1 py-4";
    cardEl.innerHTML = `
        <div class="d-flex justify-content-between">
            <div class="">
                <img class="w-100" src="https://api.openweathermap.org/img/w/${obj.weather[0].icon}.png" alt=${obj.weather[0].description} />
            </div>
            <div class="text-end">
                <h3 class="fw-bold">${obj.name}</h3>  
                <h6 class="fw-light">${obj.weather[0].description}</h6> 
            </div>
        </div>
        <div class="d-flex justify-content-between mt-3">
            <div class="text-center">
                <label for="humidity" class="mb-2">לחות</label>
                <h4 id="humidity">${obj.main.humidity}%</h4> 
            </div>
            <div class="text-center">
                <label for="feelsLike" class="mb-2">טמפ' מורגשת</label>
                <h4 id="feelsLike">${Math.round(obj.main.feels_like)}°C</h4> 
            </div>
            <div class="text-center">
                <label for="temp" class="mb-2">טמפ' נמדדת</label>
                <h4 id="temp">${Math.round(obj.main.temp)}°C</h4> 
            </div>
        </div>
    `;
    colEL.append(cardEl);
    return colEL;
};

const render = async (arr) => {
    const data = await getForcast(arr);
    console.log(data);
    content.append(createColCard(data));
};

cityArr.map((country) => {
    render(country);
});


