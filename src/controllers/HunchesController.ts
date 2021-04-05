import { compare } from 'bcryptjs'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import UserHunchesRepository from '../repositories/UserHunchesRepository'
import UserRepository from '../repositories/UserRepository'


class HunchesController {
    async create(request:Request, response:Response){
        const { nick, password, group_a, group_b, group_c } = request.body
        

        const hunchesRepository = getCustomRepository(UserHunchesRepository)
        const userRepository = getCustomRepository(UserRepository)

        
        const nickExists = await userRepository.findOne({nick})
        if (!nickExists){
            return response.status(400).json({message: "nick is not registered"})
        }

        const hunchExists = await hunchesRepository.findOne({nick})
        if (hunchExists){
            return response.status(400).json({message: "guess already realized"})
        }
        
        const hunch = hunchesRepository.create({
            nick,
            group_a,
            group_b,
            group_c,
        })

        return response.status(201).json(hunch)
        
        
    }
}

export default new HunchesController