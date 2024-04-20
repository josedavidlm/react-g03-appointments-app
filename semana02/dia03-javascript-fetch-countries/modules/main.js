import fetchCountries from './services.js'
import { renderCountries } from './utils.js'

let countryData = []

const searchInput = document.querySelector('.app__input')

searchInput.addEventListener('input', (event) => {
  const value = event.target.value
  const loweredValue = value.toLowerCase()

  const filteredCountries = countryData.filter(country => {
    const loweredName = country.name.common.toLowerCase()

    // TODO: RETO 01 - Adicionalmente necesitamos filtrar los paises por su capital

    return loweredName.includes(loweredValue)
  })

  renderCountries(filteredCountries)
})

// TODO: RETO 02 - Filtrar los paises por su region usando el select. Usen el evento input también.

fetchCountries()
  .then(countries => {
    countryData = countries

    renderCountries(countries)
  })