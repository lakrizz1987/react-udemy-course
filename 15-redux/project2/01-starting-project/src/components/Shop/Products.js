import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
  { id: 'p1', title: 'My first Book', price: 6, description: 'This is first book I wrote' },
  { id: 'p2', title: 'My second Book', price: 5, description: 'This is second book I wrote' }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(x => <ProductItem
          title={x.title}
          price={x.price}
          description={x.description}
        />)}

      </ul>
    </section>
  );
};

export default Products;
