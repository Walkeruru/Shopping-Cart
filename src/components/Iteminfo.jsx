import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@nextui-org/react";
import { Button, Text } from "@nextui-org/react";
import { Image } from '@nextui-org/react';
import '../App.css'
import { stringify } from "postcss";

const Iteminfo = (props) => {
    let params = useParams();

    const list = [
        {
            title: "iPhone 14 Pro Max",
            image: "/images/iPhone14-pro-max.jpg",
            price: "1550.50",
            id: 1,
        },
        {
            title: "Samsung Galaxy S23 Plus",
            image: "/images/samsung-galaxy-s23-plus.jpg",
            price: "1200.50",
            id: 2,
        },
        {
            title: "Pixel 7",
            image: "/images/pixel.jfif",
            price: "999.99",
            id: 3,
        },
        {
            title: "OnePlus 11R",
            image: "/images/OnePlus-11RI.webp",
            price: "400.00",
            id: 4,
        },
        {
            title: "Nothing phone",
            image: "/images/nothing.png",
            price: "600.00",
            id: 5,
        },
        {
            title: "iPhone 11 Pro Max",
            image: "/images/iPhone11.jpg",
            price: "699.00",
            id: 6,
        },
        {
            title: "Oppo A-17",
            image: "/images/Oppo-A17.jpg",
            price: "400.00",
            id: 7,
        },

    ];

    return (
        <div className="App">
            <Container>
                {list.filter(product => product.id == params.id).map(producto => {
                    {producto.cantidad = 1}
                   return <section key={producto.id} onLoad={props.handleLoad}>
                        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                                <Image src={producto.image} css={{borderRadius:'2em'}}></Image>
                                <div className="sticky top-0">
                                    <div className="mt-8 flex justify-between">
                                        <div className="max-w-[35ch] space-y-2">
                                            <Text h1 color="secondary">
                                                {producto.title}
                                            </Text>
                                        </div>

                                        <Text h4>${producto.price}</Text>
                                    </div>

                                    <div className="mt-4">
                                        <div className="prose max-w-none">
                                            <Text h4>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                                veniam dicta beatae eos ex error culpa delectus rem tenetur,
                                                architecto quam nesciunt, dolor veritatis nisi minus inventore,
                                                rerum at recusandae?
                                            </Text>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex gap-4">
                                        <div>
                                            <label htmlFor="quantity" className="sr-only">Qty</label>

                                            <input
                                                type="number"
                                                id="quantity"
                                                min="1"
                                                defaultValue={'1'}
                                                onChange={props.handleChange}
                                                className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                        </div>
                                        <Button icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>} shadow color="secondary" auto onPress={props.handlePress} data-item={JSON.stringify(producto)}> Add to Cart</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                })}

            </Container>
        </div>
    )
}

export default Iteminfo
