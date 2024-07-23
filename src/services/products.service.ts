import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
import { Product } from 'src/entities/Product.entity';

@Injectable()
export class ProductsService {
  private counterId = 3;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stock: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      stock: 20,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      stock: 30,
      image: 'https://via.placeholder.com/150',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const productFound = this.findOne(id);
    if (productFound) {
      const index = this.products.findIndex((product) => product.id === id);
      this.products[index] = {
        ...productFound,
        ...payload,
        id,
      };
      return this.products[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }

  // insertProduct(title: string, desc: string, price: number) {
  //   const prodId = new Date().toString();
  //   const newProduct = { id: prodId, title, desc, price };
  //   this.products.push(newProduct);
  //   return prodId;
  // }

  // getProducts() {
  //   return [...this.products];
  // }

  // getSingleProduct(productId: string) {
  //   const product = this.products.find((prod) => prod.id === productId);
  //   if (!product) {
  //     throw new Error('Could not find product.');
  //   }
  //   return { ...product };
  // }
}
