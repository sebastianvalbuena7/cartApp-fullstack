import { ProductItem } from "./ProductItem"

export const ProductView = ({ products, handlerAddProductCart, isLoading }) => {
    return (
        <>
            {isLoading ? <div className="alert alert-info">Cargando...</div> : (
                <div className="row">
                    {products.map(p => <ProductItem handlerAddProductCart={handlerAddProductCart} key={p.id} p={p} />)}
                </div>
            )}
        </>
    )
}