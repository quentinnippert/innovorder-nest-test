//_____Modules_____//
import { Module, HttpModule } from "@nestjs/common";

//_____Controller_____//
import { ProductsController } from './products.controller';

//_____Service_____//
import { ProductsService } from './products.services';

@Module({ 
    imports: [HttpModule],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}