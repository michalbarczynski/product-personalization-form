import styles from '../Product/Product.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';

const OptionSize = ({sizes, currentSize, setCurrentSize}) => {

    return (
    <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
            {sizes.map((size, i) => 
            <li key={shortid()}>
                <button type="button" className={clsx(size, size === currentSize && styles.active)} onClick={() => {
                    setCurrentSize(sizes[i])}}>{size.name}
                </button>
            </li>)}
        </ul>
    </div>
    )
};

export default OptionSize;



