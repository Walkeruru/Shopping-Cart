import { useEffect, useState } from "react"
import { Loading } from "@nextui-org/react";
import { Grid, Button, Card, Col, Row, Spacer, Text } from "@nextui-org/react";

const Shop = () => {
   const [products,setProducts] = useState([]);
   const [isLoading,setIsLoading] = useState(false);

   useEffect(() =>{
    fetchData();
   },[]);

   const list = [
    {
      name: "iPhone 14",
      image: "/images/Samsung-Galaxy-S23-Plus.avif",
      price: "1550.50",
      id:1,
    }
]

   const fetchData = () =>{
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> {
                setIsLoading(false);
                setProducts(data)
            });
   }
 return(
    <>
    {isLoading && <Loading css={{position:'fixed', top:'50%' , left:'50%'}}/>}
     <Grid.Container gap={4} justify="flex-start">
      {products.map((product)=> (
        <Grid xs={2}>
        <Card isPressable variant="bordered" css={{ w: "100%", h: "500px" }} href={`products/${product.id}`}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={product.image}
          objectFit="fill"
          width="100%"
          height="100%"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          p: "$8",
          bgBlur: "#ffffffcc",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row justify="space-between" align="top">
              <Col>
                <Text h3>{product.title}</Text>
                <Text
                  size={"$sm"}
                >
                  {'lorem ipsum'}
                </Text>
              </Col>
              <Col css={{ width: "auto" }}>
                <Text
                  css={{
                    color: "$accents7",
                    fontWeight: "$semibold",
                    fontSize: "$2xl",
                    pl: "$12",
                  }}
                >
                  ${product.price}
                </Text>
              </Col>
            </Row>
            <Spacer y={1} />
            <Button css={{ w: "100%" }}>Add to cart</Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
      </Grid>
      ))}
    </Grid.Container>
    </>
 )
}

export default Shop