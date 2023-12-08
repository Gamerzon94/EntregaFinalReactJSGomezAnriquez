import { Item } from "../Item/Item";
import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import styles from './ItemList.module.css';

export const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        const myItems = query(collection(db, "items"));
        getDocs(myItems)
            .then( resp => {
                const itemsList = resp.docs.map( doc => ( { id: doc.id, ...doc.data() } ) )
                setProducts(itemsList);
            } )
            .catch(error => console.log(error));
    },[])
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