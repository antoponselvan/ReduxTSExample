
import { useTypedSelector } from "../store/store"

const Cart = () => {
  const cartState = useTypedSelector((state)=>state.cart.items)
  return (
    <div>
        <h3>Cart</h3>
        {cartState.map((product)=>(<p>{product.product.name}</p>))}
    </div>
  )
}

export default Cart