import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../../async-mocks";
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

    useEffect( () => { 
        setLoading(true);
        setError(null);
        getProduct(id)
            .then( resp => {
                setProduct(resp);
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(err);
            });
    }, [product])
    return (
        <div>
            {loading && <><Alert variant="filled" severity="info">Cargando producto</Alert><LinearProgress /></>}
            {error && <Alert variant="filled" severity="error">No se encuentra el producto</Alert>}
            { product && <div className={styles.CardWidgetBody}><ItemDetail {...product} /></div> }
        </div>
    )
}