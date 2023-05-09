import { useNavigate } from "react-router-dom"

export const CartView = ({ cartItems, handlerDeleteProductCart, total }) => {
    const onDeleteProduct = id => handlerDeleteProductCart(id)

    const navigate = useNavigate()

    const onCatalog = () => {
        navigate('/catalog')
    } 

    return (
        <>
            <h3 className="text-white">Carro de Compras</h3>
            <table className="table">
                <thead>
                    <tr className="text-white">
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {cartItems.map(item => (
                        <tr className="text-white" key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.product.price}</td>
                            <td><button className="btn btn-danger" onClick={() => onDeleteProduct(item.product.id)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr className="text-white">
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="fw-bold">{total}</td>
                    </tr>
                </tfoot>
            </table>
            <button className="btn btn-primary fw-bold" onClick={() => onCatalog()}>Seguir comprando</button>
        </>
    )
}