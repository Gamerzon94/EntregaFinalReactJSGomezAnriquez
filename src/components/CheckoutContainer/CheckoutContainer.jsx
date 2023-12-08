import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import { CheckoutDetail } from "../CheckoutDetail/CheckoutDetail";

export const CheckoutContainer = () =>{
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    const getOrderDB = async  (id) => {
        const orderRef = doc(db, "orders", id);
        try {
            const docSnap = await getDoc(orderRef);
            if (docSnap.exists()) {
                const orderData = { id: docSnap.id, ...docSnap.data() };
                setOrder(orderData);
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
        getOrderDB(id);
    }, [id])

  return(
    <>
        {loading && <><Alert variant="filled" severity="info">Cargando checkout</Alert><LinearProgress /></>}
        {error && <Alert variant="filled" severity="error">No se encuentra el checkout</Alert>}
        {order && <div><CheckoutDetail {...order}/></div> }
    </>
  )
}