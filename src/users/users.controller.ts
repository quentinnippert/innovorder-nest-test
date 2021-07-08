//_____Services_____//
import { AuthService } from './../auth/auth.service';
import { UsersService } from './users.service';

//_____Commons_____//
import { Controller, Post, UseGuards, Request, Body, Put } from "@nestjs/common";

//_____Guard_____//
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { LocalAuthGuard } from './../auth/local-auth.guard';

@Controller()
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private authService: AuthService,
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post('auth/sign-up')
    async signUp(@Body('username') username: string, @Body('email') email: string, @Body('password') password: string){
        return this.usersService.createOne(username, email, password);
    }

    @UseGuards(JwtAuthGuard)
    @Put('user/update')
    async updateUser(@Body('username') username: string, @Body('email') email: string, @Body('password') password: string) {
        return await this.usersService.updateOne(username, email, password)
    }

}