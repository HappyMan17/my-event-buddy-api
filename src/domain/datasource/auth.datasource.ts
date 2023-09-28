import { RegisterUserDto } from '../dtos/auth/register-user.dto'
import { UserEntity } from '../entities/user.entity'

export abstract class AuthDatasource {
  // abstract login (loginUserDto): Promise<UserEntity>
  abstract register (registerUserDto: RegisterUserDto): Promise<UserEntity>
}
