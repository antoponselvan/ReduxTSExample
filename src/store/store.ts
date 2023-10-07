import { CartSlice } from "./features/cartSlice";
import { configureStore } from "@reduxjs/toolkit"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"

export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export const useTypedDispatch : () => typeof store.dispatch = useDispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector