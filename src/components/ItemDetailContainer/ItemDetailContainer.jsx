import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './ItemDetailContainer.module.css';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { id } = useParams();

    const getItemDB = async  (id) => {
        const itemRef = doc(db, "items", id);
        try {
            const docSnap = await getDoc(itemRef);
            if (docSnap.exists()) {
                const itemData = { id: docSnap.id, ...docSnap.data() };
                setProduct(itemData);
                setLoading(false);
            } else {
                setError(true);
                setLoading(false);
            }
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    useEffect( () => { 
        setLoading(true);
        setError(null);
        getItemDB(id);
    }, [id])
    return (
        <div>
            {loading && <><Alert variant="filled" severity="info">Cargando producto</Alert><LinearProgress /></>}
            {error && <Alert variant="filled" severity="error">No se encuentra el producto</Alert>}
            { product && <div className={styles.CardWidgetBody}><ItemDetail {...product} /></div> }
        </div>
    )
}