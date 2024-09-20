import { createSlice } from '@reduxjs/toolkit'

const initialState=[]


export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    getcart:(state,action)=>{

      
        state.push(action.payload);
     
    }
    
  }
})

export const {getcart} = cartSlice.actions
export default cartSlice.reducer
