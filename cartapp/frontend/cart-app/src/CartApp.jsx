import { ProductView } from "./components/ProductView"
import { CartView } from "./components/CartView"
import { useItemsCart } from "./hooks/useItemsCart"
import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "./components/Navbar"

const CartApp = () => {
    const { products, handlerAddProductCart, handlerDeleteProductCart, cartItems, total, isLoading } = useItemsCart()
    return (
        <>
            <Navbar />
            <div className="container">
                <h3>Cart App</h3>
                <Routes>
                    <Route path="catalog" element={<ProductView handlerAddProductCart={handlerAddProductCart} products={products} isLoading={isLoading} />} />
                    <Route path="cart" element={(
                        cartItems?.length ? (<div className="my-4 w-50">
                            <CartView cartItems={cartItems} handlerDeleteProductCart={handlerDeleteProductCart} total={total} />
                        </div>) : <p className="text-white fw-bold fs-3 mt-5">Agrega Productos al carrito</p>
                    )} />

                    <Route path="/" element={<Navigate to='catalog' />} />
                </Routes>
            </div>
        </>
    )
}

export default CartApp