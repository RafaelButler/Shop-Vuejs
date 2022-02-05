export interface propsProdcut {
  id: Number;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
  qtdy: number;
}

export interface Products {
  products: propsProdcut[];
}

export interface ProductStoreState {
  products: propsProdcut[];
  arraySize: number;
}
