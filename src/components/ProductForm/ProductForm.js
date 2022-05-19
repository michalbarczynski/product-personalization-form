import styles from '../Product/Product.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';

const ProductForm = ({handleSubmit, sizes, colors, currentSize, currentColor, setCurrentColor, setCurrentSize}) => {


    return (
        <form onSubmit={handleSubmit}>
            <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
            <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor}/>
            <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )

};

export default ProductForm;