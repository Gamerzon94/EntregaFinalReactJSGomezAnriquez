import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { useCount } from '../../hooks';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ( {id, description, price, stock, name, img, imageDescription} ) => {

    const { increment, decrement, count } = useCount(0, stock);

    const { addProductCart } = useContext(CartContext);
    const { cart, total, removeProduct } = useContext(CartContext);



    return (
        <>
        <Card key={id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={img}
                alt={imageDescription}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Precio: ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Stock: {stock}
                </Typography>
                </CardContent>
            </CardActionArea>
            <Box display="flex">
                    <Button onClick={increment}>+</Button>
                    <Typography> {count} </Typography>
                    <Button onClick={decrement}>-</Button>
                </Box>
            <CardActions>
                <Button size="small" color="primary" onClick={() => addProductCart( {id, name, price}, count )}>
                    Comprar
                </Button>
            </CardActions>
        </Card>
        </>
    )
    }