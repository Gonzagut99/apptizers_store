import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './controllers/orders.controller';
import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { BrandsController } from './controllers/brands.controller';
import { ProductsController } from './controllers/products.controller';
//import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    OrdersController,
    CustomersController,
    UsersController,
    BrandsController,
    ProductsController,
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
