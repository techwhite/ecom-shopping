import classNames from 'classnames'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveIndex } from '../../store/modules/foodStore'

const Menu = () => {
  const dispatch = useDispatch()
  const { foodList, activeIndex } = useSelector(state => state.foodList)

  const menus = foodList.map(item => ({ tag: item.tag, name: item.name }))

  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {/* let index = 0 */}
      {
        // index is the built-in member in array and can be used as key. But it's better to make it by yourself
        menus.map((item, index) => {

        return (
          <div
            key={item.tag}
            className={
              classNames(
                'list-menu-item', 
                activeIndex === index && 'active'
                )}
            onClick={() => dispatch(setActiveIndex(index))}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
