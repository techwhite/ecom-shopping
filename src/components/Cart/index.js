import classNames from 'classnames'
import Count from '../Count'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { clearCartList, decreaseCartCount, increaseCartCount } from '../../store/modules/foodStore'
import { useState } from 'react'

const Cart = () => {
  const [cartDisplay, setCartDisplay] = useState(false)
  const dispatch = useDispatch()
  // name should keep same with store's
  const { cartList } = useSelector(state => state.cartList ? state.cartList : [])
  let sum = cartList.reduce((a, i) => a + i.price * i.count, 0)
  // cartList.forEach(element => {
  //   sum += element.price * element.count
  // })

  return (
    <div className="cartContainer">
      {/* 遮罩层 添加visible类名可以显示出来 */}
      <div
        className={classNames('cartOverlay', cartDisplay && 'visible')}
        onClick={() => setCartDisplay(!cartDisplay)}
      />
      <div className="cart">
        {/* fill 添加fill类名可以切换购物车状态*/}
        {/* 购物车数量 */}
        <div 
          className={classNames('icon', cartList.length > 0 && 'fill')} 
          onClick={() => setCartDisplay(cartList.length > 0 && !cartDisplay)}
          >
          {cartList.length > 0 && <div className="cartCornerMark">{cartList.length}</div>}
        </div>
        {/* 购物车价格 */}
        <div className="main">
          <div className="price">
            <span className="payableAmount">
              <span className="payableAmountUnit">¥</span>
              {sum.toFixed(2)}
            </span>
          </div>
          <span className="text">预估另需配送费 ¥5</span>
        </div>
        {/* 结算 or 起送 */}
        {cartList.length > 0 ? (
          <div className="goToPreview">去结算</div>
        ) : (
          <div className="minFee">¥20起送</div>
        )}
      </div>
      {/* 添加visible类名 div会显示出来 */}
      <div className={classNames('cartPanel', cartDisplay && 'visible')}>
        <div className="header">
          <span className="text">购物车</span>
          <span className="clearCart" onClick={() => dispatch(clearCartList())}>
            清空购物车
          </span>
        </div>

        {/* 购物车列表 */}
        <div className="scrollArea">
          {cartList.map(item => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  <Count
                    onMinus={() => dispatch(decreaseCartCount(item.id))}
                    onPlus={() => dispatch(increaseCartCount(item.id))}
                    count={item.count}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
