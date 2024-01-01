import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import FoodsCategory from "./components/FoodsCategory";

import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFoodList } from "./store/modules/foodStore";


const App = () => {
  // used to interact with store
  const dispatch = useDispatch()

  // get remote data and update to store
  useEffect(() => {
    dispatch(fetchFoodList())
  }, [dispatch])

  // get latest data from store
  const { foodList, activeIndex } = useSelector(state => state.foodList)
  
  return (
    <div className="home">
      {/* 导航 */}
      <NavBar />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              {foodList && foodList.map((item, index) => {
                return (
                  activeIndex === index &&
                  <FoodsCategory
                    key={item.tag}
                    // 列表标题
                    name={item.name}
                    // 列表商品
                    foods={item.foods}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */}
      <Cart />
    </div>
  );
};
//手机端测试
export default App;
