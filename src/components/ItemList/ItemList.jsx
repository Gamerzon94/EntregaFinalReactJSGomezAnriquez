import { Item } from "../Item/Item";
import styles from './ItemList.module.css';

export const ItemList = ({ products }) => {
    return (
        <>
            <div className={styles.ItemListContainerBody}>
                {products.map((product) => (
                    <Item key={product.id} {...product} /> ))
                }
            </div>
        </>
    );
}