import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import axios from 'axios'
import UserRepository from '../repositories/UserRepository'
 
class RiotApiController {
    create( request:Request, response:Response){
        console.log('chamando ta')
        const { nick } = request.body

        const userRepository = getCustomRepository(UserRepository)

        const nickExists = userRepository.findOne({nick})
       
        
        if (!nickExists){
            return response.status(400).json({message: "nick is not registered"})
        }
        
        
        const nickEdit = nick.toLowerCase().replace(/ /g,"")

        

        const link =`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickEdit}?api_key=`
        const encode = encodeURI(link)    
             
        const result = axios.get(encode).then( response =>{return response.data} )


        return response.json(result)
    }
}

export default new RiotApiController 
