import { useProduct } from '../hooks/useProducts';
import { createContext } from 'react';

import styles from '../styles/styles.module.css';
import { ProductsContextProps, ProductsCardProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductsContextProps); // el as sirve tambien 
const { Provider } = ProductContext;


//? este es el product PADRE
export const ProductCard = ({ children, product }: ProductsCardProps) => {

  const { increaseBy, counter } = useProduct();
  
  return (
    <Provider value={{ counter, increaseBy, product }}>

      <div className={styles.productCard}>
        {
          children
        }
      </div>

    </Provider>

  )
}


