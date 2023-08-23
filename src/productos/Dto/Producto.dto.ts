import { ApiProperty } from '@nestjs/swagger';

export class CreateProduct {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  discount: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  categories: string[];
  @ApiProperty()
  tags: string[];
  @ApiProperty()
  calification: number;
  @ApiProperty()
  stock: number;
}
