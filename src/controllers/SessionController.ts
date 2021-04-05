import { compare } from 'bcryptjs'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { sign } from 'jsonwebtoken'
import UserRepository from '../repositories/UserRepository'
import RiotApi from '../services/RiotApi'
import RiotApiController from './RiotApiController'
import axios from 'axios'

 class SessionController{
     async create(request: Request, response: Response){
         const { nick, password } = request.body
         

         const userRepository = getCustomRepository(UserRepository)

         const user = await userRepository.findOne({ nick })

         if(!user){
             return response.status(400).json({error:"user not found"})
         }

         const matchPassword = await compare(password, user.password)

         if(!matchPassword){
            return response.status(400).json({error:"Incorrect nick or password"})
         }

         //msiSapo
         const token = sign({}, '89f363f8b42e10c5b221a1d43068e4fb',{
             subject: user.id,
             expiresIn: '2d'
         })

        const result = await new RiotApi(nick).dataUser()

         
        return response.json({token, user, result})
     }

 }

 export default new SessionController