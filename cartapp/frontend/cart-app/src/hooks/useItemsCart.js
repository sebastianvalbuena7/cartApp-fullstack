import { useState, useEffect, useReducer } from "react"
import { itemsReducer } from "../reducer/itemsReducer"
import { AddProductCart, DeleteProductCart, UpdateProductCart } from "../reducer/itemsActions"
import { getProducts } from "../services/productService"

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) ?? []

export const useItemsCart = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems)

    useEffect(() => {
        const asyncProds = async () => {
            setIsLoading(true)
            const prods = await getProducts()
            setProducts(prods)
            setIsLoading(false)
        }
        asyncProds()
    }, [])

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])


    useEffect(() => {
        if (cartItems.length > 0) {
            setTotal(cartItems.reduce((acc, itr) => acc + (itr.product.price * itr.quantity), 0))
        }
    }, [cartItems])


    const handlerAddProductCart = product => {
        const hasItem = cartItems.find(p => p.product.id === product.id)
        if (hasItem) {
            dispatch({
                type: UpdateProductCart,
                payload: product
            })
        } else {
            dispatch({
                type: AddProductCart,
                payload: product
            })
        }
    }

    const handlerDeleteProductCart = id => {
        dispatch(
            {
                type: DeleteProductCart,
                payload: id
            }
        )
    }
    return {
        cartItems, 
        handlerAddProductCart,
        handlerDeleteProductCart,
        total,
        products,
        isLoading
    }
}