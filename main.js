const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()



async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json()
  const ourTemperature = weatherData.properties.periods[0].temperature
  document.querySelector("#temperature-output").textContent = ourTemperature
}
start()

async function petsArea() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const petsData = await petsPromise.json()

  petsData.forEach((element) => {
    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent = element.name
    clone.querySelector(".pet-description").textContent = element.description
    clone.querySelector(".pet-age").textContent = createAgeText(element.birthYear)

    if (!element.photo) {
      element.photo = "images/fallback.jpg"
    }

    clone.querySelector(".pet-card-photo img").src = element.photo
    clone.querySelector(".pet-card-photo img").alt = `A ${element.species} named ${element.name}`


    wrapper.appendChild(clone)
  });
  document.querySelector(".list-of-pets").appendChild(wrapper);


}
petsArea()

function createAgeText(birthYear) {
  const currentYear = new Date().getFullYear()
  const age = currentYear - birthYear
  if (age > 1) {
    return `${age} years old`
  } else if (age == 1) {
    return `1 year old`
  } else {
    return `less than a year old`
  }
}

//pet filter button code
const allButtons = document.querySelectorAll(".pet-filter button")

allButtons.forEach(((element) => {
  element.addEventListener("click", handleButtonClick)
}))

function handleButtonClick(event) {
  //remove active class from any and all buttons
  allButtons.forEach(
    (element) => { element.classList.remove("active") }
  )
  //add active class to the specific button that just got clicked
  event.target.classList.add("active")

  //actually filter the pets below
}