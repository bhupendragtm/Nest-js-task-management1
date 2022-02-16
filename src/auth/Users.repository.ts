import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialsDto;

        const user = this.create({ username, password });

        try{
            await this.save(user);
        } catch (error) { 
            console.log(error.code);
            if (error.code === 23585){ // duplicate username
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException(); 
            }
            console.log(error.code);
        }
        await this.save(user);
    }
}