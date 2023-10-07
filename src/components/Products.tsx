import { products } from "../dummyData"
import { addToCart } from "../store/features/cartSlice"
import { useTypedDispatch } from "../store/store"

const Products = () => {
  const dispatch = useTypedDispatch()
  return (
    <>
    <h3>Products</h3>
    {products.map((product)=>(
    <div key={product.id}>
        <p>{product.name}</p>
        <button onClick={()=>{dispatch(addToCart({product, qty:1}))}}>Add</button>
    </div>
    ))}
    </>
  )
}

export default Products