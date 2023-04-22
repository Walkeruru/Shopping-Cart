import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../App';
import Shop from "./Shop";
import StoreNavbar from "./Navbar";
import Iteminfo from './Iteminfo';
import CartPopUp from "./CartPopUp";

const RouterSwitch = () => {
    const [carrito, setCarrito] = useState(0);
    const [cantidadCompra, setCantidadCompra] = useState(1);
    const [articulosEnCarrito, setArticulosEnCarrito] = useState([]);
    let yaContenido
    const addBuy = (e) => {
        let item = JSON.parse(e.target.dataset.item);
        item.cantidad = cantidadCompra;
        if(articulosEnCarrito.length > 0){
            yaContenido = articulosEnCarrito.find(x => x.id == item.id);
            if(yaContenido == undefined){
                yaContenido = false;
            }
        }
        if(articulosEnCarrito.includes(yaContenido) && articulosEnCarrito.length > 0){
            yaContenido = '';
            articulosEnCarrito.find(element => element.id == item.id).cantidad += cantidadCompra;
            return setCarrito(carrito + cantidadCompra);
        }else{
        setArticulosEnCarrito(articulosEnCarrito.concat(item))
        setCarrito(carrito + cantidadCompra);
        }
    }

    const addCantidad = (e) => {
        setCantidadCompra(Number(e.target.value));
    }

    const handleDelete = (e) =>{
        let carritoActualizado = articulosEnCarrito.filter(articulo => articulo.id != e.target.id);
        setCarrito(carrito-e.target.dataset.cantidad);
        setArticulosEnCarrito(carritoActualizado);
    }

    return (
        <>
            <BrowserRouter>
                <StoreNavbar cantidad={carrito} cartPopUp={<CartPopUp articulos={articulosEnCarrito} cantidadCarrito={carrito} handleDelete={handleDelete} />}></StoreNavbar>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route path="/shop/:id" element={<Iteminfo handlePress={addBuy} handleChange={addCantidad} handleLoad={() => setCantidadCompra(1)}/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterSwitch;