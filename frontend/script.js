const axios = require('axios').default


const link = 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/lugusfe?api_key=RGAPI-4be01106-a2e8-42b4-b7aa-ec17f183b2c5'
function request(){
    axios.get(link).then(response =>{return response.data})
}
console.log(request())

function summonerIcon(iconId){

    const urlIcon = `http://ddragon.leagueoflegends.com/cdn/11.6.1/img/profileicon/${iconId}.png` 
    const userIcon = document.getElementById('summonerIcon')

    userIcon.style.backgroundImage = `url(${urlIcon})`
}

summonerIcon(4392)