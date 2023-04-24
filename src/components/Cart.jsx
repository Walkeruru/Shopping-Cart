import { useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const Cart = (props) => {
    let totalPrice = 0;
    return (
        <div className="App">
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <header className="text-center">
                            <h1 className="text-xl font-bold sm:text-3xl">Your Cart</h1>
                        </header>

                        <div className="mt-8">
                            {props.carrito.length==0 && <div
  role="alert"
  className="rounded border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:border-yellow-600 dark:bg-yellow-900"
>
  <p className="mt-2 text-sm text-yellow-700 dark:text-yellow-200">
    No hay nada en tu carrito, <Link to={'/shop'}>regresa a la tienda.</Link>
  </p>
</div>
}
                            <ul className="space-y-4">
                                {props.carrito.map(articulo => {
                                    totalPrice += articulo.price*articulo.cantidad;
                                    return <li className="flex items-center gap-4" key={articulo.id}>
                                    <Link
                                    to={`/shop/${articulo.id}`} className='flex gap-2'>
                                    <img
                                        src={articulo.image}
                                        alt={articulo.title}
                                        className="h-16 w-16 rounded object-cover"
                                    />

                                    <div>
                                        <h3 className="text-sm">{articulo.title}</h3>
                                    </div>
                                    </Link>
                                    <div className="flex flex-1 items-center justify-end gap-2">
                                        <form>
                                            <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                                            <input
                                                readOnly
                                                type="number"
                                                min="1"
                                                defaultValue={articulo.cantidad}
                                                id="Line1Qty"
                                                className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                            />
                                        </form>

                                        <button className="text-gray-600 transition hover:text-red-600" onClick={props.handleDelete}>
                                            <span className="sr-only">Remove item</span>

                                            <svg
                                                id={articulo.id}
                                                data-cantidad={articulo.cantidad}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                id={articulo.id}
                                                data-cantidad={articulo.cantidad}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                                })}
                            </ul>

                            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                <div className="w-screen max-w-lg space-y-4">
                                    <dl className="space-y-0.5 text-sm">
                                        <div className="flex justify-between !text-base font-medium">
                                            <dt>Total</dt>
                                            <dd>${totalPrice}</dd>
                                        </div>
                                    </dl>
                                    <div className="flex justify-end">
                                        <Link
                                            to={'/buy'}
                                            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                            onClick={props.handleBuy}
                                        >
                                            Checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Cart