import axios from "axios"

class RiotApi {
    name: string
    constructor(nick: string){
        this.name = nick
    } 
    async dataUser(){

        const nickEdit = this.name.toLowerCase().replace(/ /g,"")

        //LEMBRA DE COLOCAR A KEY QUANDO FOR LIGAR O LUGUSFE
        const link =`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickEdit}?api_key=`
        const encode = encodeURI(link)    
        
        const result = await axios.get(encode).then( response =>{return response.data} )
        
        
        return result
    }
   
}

export default RiotApi 