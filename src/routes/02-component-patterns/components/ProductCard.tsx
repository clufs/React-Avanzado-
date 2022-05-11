import { useProduct } from '../hooks/useProducts';
import { createContext, ReactElement } from 'react';

import styles from '../styles/styles.module.css';
import { ProductsContextProps, Products } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductsContextProps); // el as sirve tambien 
const { Provider } = ProductContext;

export interface Props {
  product: Products;
  children?: ReactElement | ReactElement[];
  className?: string;
};


//? este es el product PADRE
export const ProductCard = ({ children, product, className }: Props) => {

  const { increaseBy, counter } = useProduct();
  
  return (
    <Provider value={{ counter, increaseBy, product }}>

      <div className={ `${styles.productCard} ${className}` }>
        {
          children
        }
      </div>

    </Provider>

  )
}


