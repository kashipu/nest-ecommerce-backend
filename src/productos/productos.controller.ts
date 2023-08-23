import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProduct } from './Dto/Producto.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@Controller('productos')
@ApiTags('Productos del ecommerce')
export class ProductosController {
  constructor(private productosService: ProductosService) {}
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Todos los productos de la base de datos',
  })
  getAllProducts() {
    return this.productosService.getAllProducts();
  }
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Un producto de la base de datos',
  })
  getOneProduct(@Param('id') id: string) {
    return this.productosService.getProductById(id);
  }
  @Post()
  createProduct(@Body() newProduct: CreateProduct) {
    return this.productosService.createProduct(newProduct);
  }
}
