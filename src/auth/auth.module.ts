//_____Modules_____//
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from './../users/users.module';
import { JwtModule } from '@nestjs/jwt';

//_____Services_____//
import { AuthService } from './auth.service';

//_____Guard_____//
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';

//_____Common_____//
import { Module, forwardRef } from '@nestjs/common';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}