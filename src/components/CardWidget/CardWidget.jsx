import { useContext } from "react";
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import styles from './CardWidget.module.css'
import { CartContext } from '../../context/CartContext'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export const CardWidget = () => {
    const { totalProducts } = useContext(CartContext);
    return (
        <>
            <div className={styles.CardWidgetBody}>
                <IconButton aria-label="cart" href="/cart">
                    <StyledBadge badgeContent={totalProducts} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </div>
        </>
    )
}