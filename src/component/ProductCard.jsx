import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cartContext';



const ProductCard = ({ product }) => {
  const { name, img, price } = product;
  const { addProduct } = useCartContext();

  const handleAddToCart = () => {
    addProduct(product, 1);
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
      </CardContent>
      <CardActions>

        <Link className='btn btn-primary' to={`/item/${product.id}`}>Ver detalles</Link>
        <button className='btn btn-success' onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;