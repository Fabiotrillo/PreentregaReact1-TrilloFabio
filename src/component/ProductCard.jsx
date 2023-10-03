import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'



const ProductCard = ({ product }) => {
  const { name, img, price } = product;

  return (
    <Card sx={{ maxWidth: 500 }}>
    <CardMedia
      sx={{ height: 200 }}
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
      <Button className='btn btn-warning' size="small">Comprar</Button>
      <Link className='btn btn-primary' to={`/item/${product.id}`}>Ver detalles</Link>
    </CardActions>
  </Card>
  );
}

export default ProductCard;