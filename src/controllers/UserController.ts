import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import UserRepository from '../repositories/UserRepository'



class UserController {

    async create(request: Request, response:Response) {
        const userRepository = getCustomRepository(UserRepository)

        const { name, nick, password } = request.body;

        const existUser = await userRepository.findOne({nick})

        if(existUser) {
            return response.status(400).json({message: "user already exists"})
        }

        const passwordHashed = await hash(password, 8)

        const user = userRepository.create({
            name,
            nick,
            password: passwordHashed,
        })

        await userRepository.save(user)

        //para que o response não mostre a senha já que "delete user.password" estava dando erro e não queria ignorar
        const userShow = {
            name: user.name,
            nick: user.nick,
            id: user.id,
            created_at: user.created_at,
        }

         return response.status(201).json(userShow)
    }
}

export default new UserController