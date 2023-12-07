import { Link } from "react-router-dom";
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export const Item = ({ id, name, img, description, imageDescription }) => {
    return (
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
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/item/${id}`}>
                    <Button size="small" color="primary">
                    Detalles
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};