import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCartContext } from '../context/cartContext';





const CartWidget = ({ product }) => {
  const { name, img, price, quantity } = product;
  const { removeProduct } = useCartContext();

  const handleRemoveClick = () => {
    removeProduct(product.id);
  };


  return (
    <Card sx={{ maxWidth: 500 }}>
    <CardMedia
      sx={{ height: 300 }}
      image={img}
      title={name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       Precio:$ {price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
          Cantidad: {quantity}
        </Typography>
    </CardContent>
    <CardActions>
      <Button className='btn' size="small">Comprar</Button>
      <Button className='btn' onClick={handleRemoveClick}><i className="fas fa-trash"></i></Button>
    </CardActions>
  </Card>
  );
}

export default CartWidget;