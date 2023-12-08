import {Box, Button, Typography, CssBaseline, Container, TextField  } from "@mui/material";
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "../../config/firebaseConfig";

export const Cart = () => {
    const { cart, total, removeProduct, borrarCart, totalProducts } = useContext(CartContext);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
      confirmarEmail: '',
    });

    const [emailError, setEmailError] = useState('');

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  
      if (name === 'confirmarEmail') {
        setEmailError(formData.email !== value ? 'Los emails no coinciden' : '');
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (emailError) {
        alert('Los emails no coinciden');
        return;
      }

      try {
        const orderData = {
          nombre: formData.nombre,
          apellido: formData.apellido,
          telefono: formData.telefono,
          email: formData.email,
          estado: 'generada',
          fecha: serverTimestamp(),
          items: cart,
          total: total,
          totalProducts: totalProducts,
        };
  
        const docRef = await addDoc(collection(db, 'orders'), orderData);
        console.log('Documento creado con ID: ', docRef.id);
        navigate('/checkout/'+docRef.id);
        borrarCart();
        setFormData({
          nombre: '',
          apellido: '',
          telefono: '',
          email: '',
          confirmarEmail: '',
        });
      } catch (error) {
        console.error('Error creando documento: ', error);
      }
    };

    return (
        <>
          <CssBaseline />
          <Container fixed>
          <Box margin={4} padding={4} sx={{ bgcolor: 'white', borderRadius: 2, }}>
            <Typography fontSize={25}>Carrito</Typography>
            <Box display="flex" flexDirection="row" flexWrap="wrap">
              {cart.map((item) => (
                <Box key={item.id} margin={1} border={1} borderColor={"gray"} bgcolor={"#7bc8e3"} borderRadius={2} padding={3} width={380} boxShadow={3} 
                flexBasis="calc(33.33% - 16px)" flexGrow={1} flexShrink={0} boxSizing="border-box">
                  <Typography>Nombre: {item.name} </Typography>
                  <Typography>Precio Unitario: {item.price} </Typography>
                  <Typography>Cantidad: {item.quantity} </Typography>
                  <Typography>Sub total: {item.subTotal} </Typography>
                  <Button variant="contained" color="error" onClick={() => removeProduct(item.id)}>
                    Eliminar
                  </Button>
                </Box>
              ))}
            </Box>
            <Typography> Total de la compra ${total} </Typography>
          </Box>
          <Box margin={4} padding={4} sx={{ bgcolor: 'white', borderRadius: 2, }}>
            <Typography fontSize={25}>Completar Orden</Typography>
            <form onSubmit={handleSubmit}>
              <TextField id="nombre" name="nombre" label="Nombre" value={formData.nombre} onChange={handleChange} fullWidth margin="normal" variant="outlined" required/>
              <TextField id="apellido" name="apellido" label="Apellido" value={formData.apellido} onChange={handleChange} fullWidth margin="normal" variant="outlined" required/>
              <TextField id="telefono" name="telefono" label="Teléfono" value={formData.telefono} onChange={handleChange} fullWidth margin="normal" variant="outlined" required/>
              <TextField id="email" type={"email"} name="email" label="Correo electrónico" value={formData.email} onChange={handleChange} fullWidth margin="normal" variant="outlined" required/>
              {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
              <TextField id="confirmarEmail" type={"email"} name="confirmarEmail" label="Confirmar correo electrónico" value={formData.confirmarEmail} onChange={handleChange} fullWidth margin="normal" variant="outlined" required/>
              <Button variant="contained" type="submit" disabled={totalProducts === 0}>Realizar Compra</Button>
            </form>
          </Box>
          </Container>
        </>
        )
    }