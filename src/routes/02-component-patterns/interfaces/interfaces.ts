



export interface Products {
  id: string;
  title: string;
  img?: string;
};

export interface ProductsContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Products;
};