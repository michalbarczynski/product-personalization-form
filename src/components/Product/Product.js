import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = ({name, title, basePrice, colors, sizes}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  const getPrice = () => {
    let extraPrice = sizes.find(elem => elem.name === currentSize.name);
    return basePrice + extraPrice.additionalPrice;
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('============');
    console.log('Name:', name);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize.name);
    console.log('Color:', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm handleSubmit={handleSubmit} sizes={sizes} colors={colors} currentSize={currentSize} currentColor={currentColor} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} getPrice={getPrice}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  name : PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrize: PropTypes.number,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func,
};

export default Product;

