//_____Modules_____//
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './../auth/auth.module';

//_____Controller_____//
import { UsersController } from './users.controller';

//_____Common_____//
import { forwardRef, Module } from '@nestjs/common';

//_____Service_____//
import { UsersService } from './users.service';

//_____Database_____//
import { User, UserSchema } from '../schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]), forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
