import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product/product.interface';
import { Productos } from 'src/data/data.products';
import { CreateProduct } from './Dto/Producto.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductosService {
  getAllProducts(): Product[] {
    return Productos;
  }
  getOneProduct(id: string): Product {
    return Productos.find((producto) => producto.id === id);
  }

  createProduct(producto: CreateProduct): string {
    const newProduct = {
      id: uuidv4(),
      image: [
        'https://placehold.co/720x720/black/white?text=Imagen+1',
        'https://placehold.co/720x720/black/white?text=Imagen+2',
        'https://placehold.co/720x720/black/white?text=Imagen+3',
        'https://placehold.co/720x720/black/white?text=Imagen+4',
      ],
      ...producto,
    };
    Productos.push(newProduct);
    return newProduct.id;
  }
  getProductById(id: string): Product {
    return Productos.find((producto) => producto.id === id);
  }
}
