import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export const CheckoutDetail = ( {id, nombre, apellido, telefono, email, total, estado, fecha, totalProducts, items} ) => {

    const date = new Date(fecha.seconds * 1000);
    const formattedDate = date.toLocaleDateString();

    return (
        <>
            <CssBaseline />
            <Container fixed>
                <Box margin={4} padding={4} sx={{ bgcolor: 'white', borderRadius: 2, }}>
                    <Typography variant="h2" gutterBottom>
                        Orden: {id}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Comprador: {apellido}, {nombre}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Teléfono: {telefono}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Correo electronico: {email}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Total cancelado: ${total}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Total de productos: {totalProducts}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Estado de la orden: {estado}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Fecha de compra: {formattedDate}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Productos: <ul>
                                        {items.map((item) => (
                                        <li key={item.id}>
                                            <p>Nombre: {item.name}</p>
                                            <p>Cantidad: {item.quantity}</p>
                                            <p>Precio Unitario: {item.price}</p>
                                            <p>Subtotal: {item.subTotal}</p>
                                        </li>
                                        ))}
                                    </ul>
                    </Typography>
                </Box>
            </Container>
        </>
    )
    }