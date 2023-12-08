import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { Button } from '@mui/material';
import { CardWidget } from '../CardWidget/CardWidget';
import styles from './NavBar.module.css'
import { Link } from "react-router-dom";

export const NavBar = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        const myCategories =  query(collection(db, "categories"));
            
        getDocs(myCategories).then((resp) =>{ 
            const categoriesList = resp.docs.map( doc => ( { id: doc.id, ...doc.data() } ) )
            setCategories(categoriesList);
        });
        
    };

    useEffect(() => {
        getCategories();
    },[]);

    return (
        <nav>
            <div className={styles.navBarBody}> 
                <div className={styles.navBarButtons}>
                    <div className={styles.navBarImg}>
                        <Link to={'/'}><img src="/JC_Jenson_Logo.png" alt="JCJenson Logo" /></Link>
                    </div>
                    <Link to={"/"}>
                        <Button variant="contained">Inicio</Button>
                    </Link>
                    {categories.map((categorie) => (
                        <Link to={`/category/${categorie.name}`}  key={categorie.id}>
                            <Button variant="contained">{categorie.description}</Button>
                        </Link> ))
                    }
                </div>
                <CardWidget/>
            </div>
        </nav>
    )
}