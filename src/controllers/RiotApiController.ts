import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import axios from 'axios'
import UserRepository from '../repositories/UserRepository'
 
class RiotApiController {
    async create( request:Request, response:Response){
        const { nick } = request.body

        const userRepository = getCustomRepository(UserRepository)

        const nickExists = await userRepository.findOne({nick})
       
        /*
        if (!nickExists){
            return response.status(400).json({message: "nick is not registered"})
        }
        */
        
        const nickEdit = nick.toLowerCase().replace(/ /g,"")

        

        const link =`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickEdit}?api_key=RGAPI-4be01106-a2e8-42b4-b7aa-ec17f183b2c5`
        const encode = encodeURI(link)    
             
        const result = await axios.get(encode).then( response =>{return response.data} )


        return response.json(result)
    }
}

export default new RiotApiController