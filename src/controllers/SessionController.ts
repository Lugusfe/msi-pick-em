import { compare } from 'bcryptjs'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { sign } from 'jsonwebtoken'
import UserRepository from '../repositories/UserRepository'

 class SessionController{
     async create(request: Request, response: Response){
         const { nick, password } = request.body

         const userRepository = getCustomRepository(UserRepository)

         const user = await userRepository.findOne({ nick })

         if(!user){
             return response.status(400).json({error:"user not found"})
         }

         const matchPassword = await compare(password, user.password)

         if(matchPassword){
            return response.status(400).json({error:"Incorrect nick or password"})
         }

         //msiSapo
         const token = sign({}, '89f363f8b42e10c5b221a1d43068e4fb',{
             subject: user.id,
             expiresIn: '1d'
         })

         return response.json({token, user})
     }

 }

 export default new SessionController