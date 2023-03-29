import React from 'react'
import '../styles/MenuScreen.css'
import menuList from '../components/menuList.json'

import MenuList from '../components/MenuList'
import MenuHeader from '../components/MenuHeader'
import MenuItem from '../components/MenuItem'

const MenuScreen = () => { 
  return (
    <div className='menuScreen' >
      <MenuHeader />
      <div className='menuScreen__container' >
        <div className='menuScreen__left' >
          <MenuList />
        </div>

        <div className='menuScreen__right' >
          <h1>Menu</h1>

          <div className='menuScreen__category' >
            <h2>Drinks</h2>
            <div className='menuScreen__items' >
              { menuList.map((menuListCategory) => 
              menuListCategory.drinks.map(({ type, path, image }) => (
                <MenuItem type={type} image={image} />
              ))) }
            </div>
          </div>

          <div className='menuScreen__category' >
            <h2>Food</h2>
            <div className='menuScreen__items' >
              { menuList.map((menuListCategory) => 
              menuListCategory.food.map(({ type, path, image }) => (
                <MenuItem type={type} image={image} />
              ))) }
            </div>
          </div>

          <div className='menuScreen__category' >
            <h2>At Home Coffee</h2>
            <div className='menuScreen__items' >
              { menuList.map((menuListCategory) => 
              menuListCategory.atHomeCoffee.map(({ type, path, image }) => (
                <MenuItem type={type} image={image} />
              ))) }
            </div>
          </div>

          <div className='menuScreen__category' >
            <h2>Merchandise</h2>
            <div className='menuScreen__items' >
              { menuList.map((menuListCategory) => 
              menuListCategory.merchandise.map(({ type, path, image }) => (
                <MenuItem type={type} image={image} />
              ))) }
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MenuScreen