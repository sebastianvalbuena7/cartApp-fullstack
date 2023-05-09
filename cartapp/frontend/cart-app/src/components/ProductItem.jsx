import { useNavigate } from "react-router-dom"

export const ProductItem = ({p, handlerAddProductCart}) => {
    const navigate = useNavigate()
    const onAddProduct = product => {
        handlerAddProductCart(product)
        navigate('/cart')
    }
    return (
        <div className="col-4 my-2" key={p.id}>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description}</p>
                <p className="card-text">$ {p.price}</p>
                <button className="btn btn-primary" onClick={() => onAddProduct(p)}>Agregar</button>
            </div>
        </div>
    </div>
    )
}