import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { getProducts } from "../../async-mocks";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';


export const ItemListContainer = ({ message }) => {
    const { category } = useParams();

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setNoResults(false);
        getProducts()
            .then((resp) => {
                if(category) {
                    const productsFilter = resp.filter(product => product.category === category);
                    setProducts(productsFilter);
                    setIsLoading(false);
                    if (productsFilter.length === 0) {
                        setNoResults(true);
                    }
                } else {
                    setProducts(resp);
                    setIsLoading(false);
                }
            })
            .catch((error) => console.log(error));
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