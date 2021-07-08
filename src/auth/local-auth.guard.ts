//_____Common_____//
import { Injectable } from '@nestjs/common';

//_____Guard_____//
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}