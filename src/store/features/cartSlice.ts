// import {createSelector} from "@reduxjs/toolkit"
import { PayloadAction, createSlice} from "@reduxjs/toolkit"

export interface Product {
    id: number,
    name: string,
    price: number
}

export interface CartItem {
    product: Product,
    qty: number
}

interface CartState {
    items: CartItem[]
}

const initialState: CartState = {
    items:[]
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload)
        }
    }
})

export default CartSlice.reducer
export const { addToCart} = CartSlice.actions
