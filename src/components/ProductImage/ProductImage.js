import styles from '../Product/Product.module.scss';

const ProductImage = ({name, title, currentColor}) => {
    return (
    <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={`${title} shirt`}  
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
    </div>
    )

};

export default ProductImage;