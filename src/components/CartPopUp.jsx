import { Link } from "react-router-dom";

const CartPopUp = (props) => {
    return (
        <>
            <div
                className="relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
                aria-modal="true"
                role="dialog"
                tabIndex="-1"
            >
                

                <div className="mt-4 space-y-6">
                    <ul className="space-y-4">
                        {props.articulos.map(articulo => {
                            return <li className="flex items-center gap-4" key={articulo.id}>
                                <img
                                    src={articulo.image}
                                    alt={articulo.title}
                                    className="h-16 w-16 rounded object-cover"
                                />

                                <div>
                                    <h3 className="text-sm text-gray-900">{articulo.title}</h3>
                                </div>

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

                    <div className="space-y-4 text-center">
                        <Link
                            to={'/cart'}
                            className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                        >
                            View my cart ({props.cantidadCarrito})
                        </Link>

                        <Link
                            to={'/buy'}
                            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                            onClick={props.handleBuy}
                        >
                            Checkout
                        </Link>

                        <Link
                            to={'/shop'}
                            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                        >
                            Continue shopping
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartPopUp;