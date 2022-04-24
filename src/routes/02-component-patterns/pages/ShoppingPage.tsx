import { ProductImage, ProductTitle, ProductBottons, ProductCard } from "../components"

const product = {
  id: '1',
  title: 'Hola wachin',
  img: './coffee-mug.png',
}


export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{display: 'flex',flexDirection: 'row',flexWrap: 'wrap',}}>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductBottons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductBottons />
        </ProductCard>

      </div>

    </div>
  )
}
