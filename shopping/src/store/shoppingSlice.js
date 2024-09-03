import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const shoppingSlice =  createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    initData: (_,action) => {
      return action.payload
    },
    addItem: (state,action) => {
      state.push(action.payload)
    },
    removeItem: (state,action) => {
      const nState = state.filter(value=>{
        if(value.name !== action.payload) {
          return value
        }
      })
      return nState
    },
    editItem: (state,action) => {
      state[(action.payload.id)] = action.payload.item
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, editItem, initData } = shoppingSlice.actions

export default shoppingSlice.reducer