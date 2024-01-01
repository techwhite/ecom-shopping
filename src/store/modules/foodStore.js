import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const foodStore = createSlice({
  name: 'foods',
  initialState: {
    foodList: [],
    activeIndex: 0,
    cartList: []
  },
  reducers: {
    setFoodList(state, action) {
      state.foodList = action.payload
    },
    setActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    addCartList(state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id)
      if (item) {
        item.count++
      } else {
        state.cartList.push(action.payload)
      }
    },
    increaseCartCount(state, action) {
      const item = state.cartList.find(item => item.id === action.payload)
      item.count++
    },
    decreaseCartCount(state, action) {
      const item = state.cartList.find(item => item.id === action.payload)
      if (item.count > 0) {
        item.count--  
      }
    },
    clearCartList(state) {
      state.cartList = []
    }
  }
})

const {setFoodList, setActiveIndex, addCartList, increaseCartCount, decreaseCartCount, clearCartList} = foodStore.actions

// sync function wrapper
const fetchFoodList = () => {
  // return async function
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway')
    // should always use dispatch when interacting with store
    dispatch(setFoodList(res.data))
  }
}

// named export
export {fetchFoodList, setActiveIndex, addCartList, increaseCartCount, decreaseCartCount, clearCartList}

// default export
const reducer = foodStore.reducer
export default reducer

// reference: default export vs. named export 
// https://www.colin.fun/blog/named-export-vs-default-export