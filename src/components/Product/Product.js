import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid'; 


const Product = ({id, name, title, basePrice, colors, sizes}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = () => {
    let extraPrice = sizes.find(elem => elem.name === currentSize.name);
    return basePrice + extraPrice.additionalPrice;
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={`${title} shirt`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size, i) => 
              <li key={shortid()}>
                <button type="button" 
                className={clsx(size, size === currentSize && styles.active)}
                onClick={() => {
                  setCurrentSize(sizes[i])}}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => <li key={shortid()}><button type="button" onClick= {() => {setCurrentColor(color)}} className={clsx(prepareColorClassName(color), currentColor === color && styles.active)}/></li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  name : PropTypes.string,
  title: PropTypes.string,
  basePrize: PropTypes.number,
  colors: PropTypes.array,
  sizes: PropTypes.array,
};

export default Product;

