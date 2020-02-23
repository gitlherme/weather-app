let city = document.querySelector('#city-name'),
    search = document.querySelector('#search-city'),
    cardResult = document.querySelector('.card-result')

const apiKey = '4d8fb5b93d4af21d66a2948710284366'

function getIcon(id) {
  return `http://openweathermap.org/img/wn/${id}@2x.png`
}

function clearElement(element) {
  element.innerHTML = ''
}

search.addEventListener('click', () => {
  clearElement(cardResult)
  const base_url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`
  fetch(base_url)
  .then(response => response.json())
  .then(data => {
    const { main, name, sys, weather } = data
    const icon = getIcon(weather[0].icon)
    const newContent = document.createElement('div')
    newContent.classList.add('card-content')
    const markup = `
      <div class="header-card">
        <h3> ${city.value} </h3>
        <img src="${icon}">
      </div>
      <div class="text-card">
        <span id="temp"> ${main.temp.toFixed(0)}º </span>
        <div class="description">
          <span id="condition"> ${weather[0].main} </span>
          <span id="text-description"> ${weather[0].description} </span>
        </div>
      </div>
    `
    newContent.innerHTML = markup
    cardResult.appendChild(newContent)  
    console.log(data)
  })
})