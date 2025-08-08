import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Explore Our Menu at KFD Express: The Genuine Taste from China

At KFD Express, we take pride in bringing the authentic flavors of China right to your table. Located in the heart of Banani and Uttara, our menu features a wide array of mouthwatering dishes that capture the true essence of Chinese cuisine.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return(
           <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
             <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
             <p>{item.menu_name}</p>
           </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
