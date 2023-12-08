import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import Typography from '@mui/material/Typography';
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';


export const ItemListContainer = ({ message }) => {
    const { category } = useParams();
    console.log(category);

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [noResults, setNoResults] = useState(false);

    const getItemsDB = (category) => {
        const myItems = category
            ? query(collection(db, "items"), where("category","==", category))
            : query(collection(db, "items"));
            
        getDocs(myItems).then((resp) =>{ 
            const itemsList = resp.docs.map( doc => ( { id: doc.id, ...doc.data() } ) )
            if(itemsList.length === 0){
                setNoResults(true);
                setIsLoading(false);
            }else{
                setProducts(itemsList);
                setIsLoading(false);
            }
        });
        
    };

    useEffect(() => {
        setIsLoading(true);
        setNoResults(false);
        getItemsDB(category);
    }, [category]);


    return (
        <>
            <Typography variant="subtitle1">
                {message}
            </Typography>
            { isLoading ? (<><Alert variant="filled" severity="info">Cargando Productos</Alert><LinearProgress /></>) : (
                <>
                    {noResults ? (
                        <Alert variant="filled" severity="error">No existen productos con la categoria seleccionada</Alert>
                    ) : (
                        <ItemList products={products} />
                    )}
                </>
            ) }
        </>
    )
}