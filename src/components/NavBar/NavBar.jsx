import * as React from 'react';
import { Button } from '@mui/material';
import { CardWidget } from '../CardWidget/CardWidget';
import styles from './NavBar.module.css'
import { Link } from "react-router-dom";

export const NavBar = () => {
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
                    <Link to={"/category/oficina"}>
                        <Button variant="contained">Articulos de Oficina</Button>
                    </Link>
                    <Link to={"/category/transporte"}>
                        <Button variant="contained">Servicios de Transporte</Button>
                    </Link>
                    <Link to={"/category/espacio"}>
                        <Button variant="contained">Servicios Espaciales</Button>
                    </Link>
                    <Link to={"/category/dron"}>
                        <Button variant="contained">Drones</Button>
                    </Link>
                </div>
                <CardWidget/>
            </div>
        </nav>
    )
}