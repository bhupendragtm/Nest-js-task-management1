import { Body, Controller, Post } from '@nestjs/common';
import { SingleEntryPlugin } from 'webpack';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
authService: any;

@Post('/signup')
signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
}
}
