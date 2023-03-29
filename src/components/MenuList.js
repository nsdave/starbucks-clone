import React from 'react'
import { Link } from 'react-router-dom'
import menuList from '../components/menuList.json'

import '../styles/MenuList.css'

const MenuList = () => {
  return (
    <div className='menuList' >

      <div className='menuList__container' >
        <h4>Drinks</h4>
        <div className='menuList__items' >
          { menuList.map((menuListCategory)  => 
          menuListCategory.drinks.map((items) => (
            <Link>{items.type}</Link>
          ))) }
        </div>
      </div>

      <div className='menuList__container' >
        <h4>Food</h4>
        <div className='menuList__items' >
          { menuList.map((menuListCategory)  => 
          menuListCategory.food.map((items) => (
            <Link>{items.type}</Link>
          ))) }
        </div>
      </div>

      <div className='menuList__container' >
        <h4>At Home Drinks</h4>
        <div className='menuList__items' >
          { menuList.map((menuListCategory)  => 
          menuListCategory.atHomeCoffee.map((items) => (
            <Link>{items.type}</Link>
          ))) }
        </div>
      </div>

      <div className='menuList__container' >
        <h4>Merchandise</h4>
        <div className='menuList__items' >
          { menuList.map((menuListCategory)  => 
          menuListCategory.merchandise.map((items) => (
            <Link>{items.type}</Link>
          ))) }
        </div>
      </div>

    </div>
  )
}

export default MenuList