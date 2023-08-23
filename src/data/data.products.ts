import { Product } from 'src/interfaces/product/product.interface';

export const Productos: Product[] = [
  {
    id: '4d4778cb-ae75-4cfa-8754-8ec0a2dfb84d',
    name: 'Tenis Superstar XLG',
    price: 649950,
    discount: 10,
    description: 'Zapato para niño de alta calidad',
    image: [
      'https://placehold.co/720x720/black/white?text=Imagen+1',
      'https://placehold.co/720x720/black/white?text=Imagen+2',
      'https://placehold.co/720x720/black/white?text=Imagen+3',
      'https://placehold.co/720x720/black/white?text=Imagen+4',
    ],
    categories: ['niño'],
    tags: ['zapatos', 'niño'],
    calification: 4.5,
    stock: 10,
  },
];
