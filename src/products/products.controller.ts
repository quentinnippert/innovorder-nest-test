//_____Common_____//
import { Controller, Get, Param, UseGuards } from "@nestjs/common";

//_____Service_____//
import { ProductsService } from './products.services';

//_____Guard_____//
import { JwtAuthGuard } from './../auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }
    
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        let products = this.productsService.getSingleProduct(prodId);        
        return products;
    }
}