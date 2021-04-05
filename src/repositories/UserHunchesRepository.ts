import { EntityRepository, Repository } from "typeorm";
import UserHunches from "../models/UserHunches";

@EntityRepository(UserHunches)
class UserHunchesRepository extends Repository<UserHunches>{}

export default UserHunchesRepository