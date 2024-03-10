const url = 'https://api.chucknorris.io/jokes/random'

const joke = document.querySelector(".joke");
async function getData() {
    try{
        const response = await fetch(url)
        const data = await response.json()
        joke.innerText = data.value
        
    }catch(error) {
        console.log(`Fetch Error: ${error}`)
    }
    
}


