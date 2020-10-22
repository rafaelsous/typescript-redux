export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartITem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartITem[];
}