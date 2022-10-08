// API Key: f494ff866ab5a116ce6f96dd0a77330d


const API_KEY = `f494ff866ab5a116ce6f96dd0a77330d`;

let cityInp = document.getElementById('city-name');
let searchBtn = document.getElementById('search-button');

// add Event Listner
searchBtn.addEventListener('click', ()=> {
    let cityName = cityInp.value; 
    console.log(cityName);
    let lat;
    let lon;
    // api url
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},%7Bstate%20code%7D&appid=${API_KEY}`;
    console.log(apiURL);

    // fetch url
    fetch(apiURL)
        .then((res) => res.json())
        .then((data) => {

            // console.log(data);
            // console.log(data.name);
            // console.log(data.weather[0].main);
            // console.log(data.main.temp);

        // city name 
        city.innerText = data.name; 
        // temperature 
        temperature.innerText = Math.round(data.main.temp-273.15) + '°' +'C';
        // lead / condition
        condition.innerText = data.weather[0].main;
        }) .catch(()=>{
            if(cityName == null){
                alert('please enter a city name!');
            } else{
                alert('Invalid city name!!');
            }
        })
})


















// Advanced
// const searchTemperature = ()=>{
//     const city = document.getElementById('city-name').value;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayTemperature(data));

// }

// const setInnerText = (id, text) => {
//     document.getElementById(id).innerText = text;
// }

// const displayTemperature = temperature =>{
//     setInnerText('city', temperature.name);
//     setInnerText('temperature', temperature.main.temp);
//     setInnerText('condition',temperature.weather[0],main);
//     // set weather Icon
//     const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
//     const imgIcon = document.getElementById('weather-icon');
//     imgIcon.setAttribute('src', url);
// }