import { Text, Container, Card, Col ,Grid, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";
import '../styles/shop.css'

const Shop = () => {

   const list = [
    {
      title: "iPhone 14 Pro Max",
      image: "/images/Iphone.webp",
      price: "1550.50",
      id:1,
    },
    {
      title: "Samsung Galaxy S23",
      image: "/images/Samsung.webp",
      price: "1200.50",
      id:2,
    },
    {
      title: "Pixel 7",
      image: "/images/pixel-2.webp",
      price: "999.99",
      id:3,
    },
    {
      title: "OnePlus 11R",
      image: "/images/OnePlus-11R.webp",
      price: "400.00",
      id:4,
    },
    {
      title: "Nothing phone",
      image: "/images/nothing.webp",
      price: "600.00",
      id:5,
    },
    {
      title: "iPhone 11 Pro Max",
      image: "/images/iPhone11-1.webp",
      price: "699.00",
      id:6,
    },
    {
      title: "Oppo A-17",
      image: "/images/Oppo-A17.avif",
      price: "400.00",
      id:7,
    },
    
];

 return(
    <div className="productos">
    <Container>
      <Text h1 style={{textAlign:"center"}}>Products</Text>
      <Grid.Container gap={1} justify="center">
      {list.map((product)=> (
        <Grid xs={12} sm={3} key={product.id}>
          <Link to={`/shop/${product.id}`}>
          <Card isPressable isHoverable>
          <Card.Image
            src={product.image}
            objectFit="cover"
            width="100%"
            height={340}
            alt="Card image background"
          />
          <Card.Footer css={{ zIndex: 1, top: 5 }}>
            <Col>
              <Text h4 color="white">
              {product.title}
              </Text>
              <Text size={18} weight="bold" transform="uppercase" color="hsl(272, 51.0%, 54.0%)">
              ${product.price}
              </Text>
            </Col>
          </Card.Footer>
        </Card>
        </Link>
        </Grid>
      ))}
      </Grid.Container>
    </Container>
    </div>
 )
}

export default Shop