// const container = document.querySelector("#container")
// const newimg = document.createElement("img")

// newimg.src = "https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png"

// container.appendChild(newimg)
const container = document.querySelector("#container")

for (let i = 1; i < 151;  i++) {
    const pokemon = document.createElement("div")
    pokemon.classList.add('pokemon')

    const label = document.createElement("span")

    label.innerText = `#${i}`

    const newImg = document.createElement("img") 
    newImg.src = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/${i}.png`
    
    pokemon.appendChild(newImg)
    pokemon.appendChild(label)

    container.appendChild(pokemon)
}
