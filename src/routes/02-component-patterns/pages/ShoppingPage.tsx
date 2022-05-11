import { ProductImage, ProductTitle, ProductBottons, ProductCard } from "../components"
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Hola wachin',
  img: './coffee-mug.png',
};

const product2 = {
  id: '1',
  title: 'Hola puta',
};


export const ShoppingPage = () => {
  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />

      <div style={{display: 'flex',flexDirection: 'row',flexWrap: 'wrap',}}>

        <ProductCard product={product} className={'bg-dark'} > 
          <ProductImage />
          <ProductTitle />
          <ProductBottons />
        </ProductCard>

        <ProductCard product={product2} >
          <ProductImage />
          <ProductTitle />
          <ProductBottons />
        </ProductCard>

      </div>

    </div>
  )
}
