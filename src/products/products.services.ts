//_____Common_____//
import { HttpService, Injectable } from "@nestjs/common";

//____Opérators_____//
import { map } from 'rxjs/operators';

@Injectable()
export class ProductsService {
    constructor(private http: HttpService) { };

    getSingleProduct(prodId: string) {
        let products = this.http.get(`https://world.openfoodfacts.org/api/v0/product/${prodId}.json`);     
        return products.pipe(
            map(response => response.data)
        );
    }

}