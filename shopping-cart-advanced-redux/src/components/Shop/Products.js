import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Orange'
          price={10}
          description='This is an orange color orange!'
        />
      </ul>
    </section>
  );
};

export default Products;
