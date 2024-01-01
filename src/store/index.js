import { configureStore } from "@reduxjs/toolkit";
import myFoodReducer from "./modules/foodStore"

const store = configureStore({
  reducer: {
    foodList: myFoodReducer,
    activeIndex: myFoodReducer,
    cartList: myFoodReducer
  }
})

export default store