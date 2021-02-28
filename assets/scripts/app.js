const cities = document.getElementById('cities')
const container = document.getElementsByClassName('container')
const img = document.querySelector('img')
const city = document.querySelector('h1')
const temp = document.querySelector('h2')
const weatherType = document.querySelector('h3')



cities.addEventListener('click', ()=> {
    const cityKey = cities.value
    console.log(cityKey);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityKey}&units=metric&lang=az&appid=05226a82d2a5c63681728732342c1b25`).then((response) => {
        console.log(response)
        city.innerText = response.data.name
        temp.innerText = response.data.main.temp
        weatherType.innerText = response.data.weather[0].main
        console.log(response.data.weather[0].icon);
        img.src = `http://openweathermap.org/img/wn//${response.data.weather[0].icon}@2x.png`


    }).catch((error) => {
        console.log(error);
    })


})

//1 axios olacaq `${city}` ile deyis seheri her defe cilick olunanda
