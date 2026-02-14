import React from 'react'
import './ExploreMenu.css'
import { menu_list, food_list, assets } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Explore Our Menu at KFD Express: The Genuine Taste from China. Located in the heart of Banani, our menu features a wide array of mouthwatering dishes that capture the true essence of Chinese cuisine.</p>
      <div className="explore-menu-scanner">
        <img src={assets.menuScanner} alt="Scan QR code to view menu" />
        <p>Scan to view menu</p>
      </div>
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
      <div className="explore-menu-food-names">
        <div className="explore-menu-names-column">
          <h3>Dumplings</h3>
          <ul>
            {food_list.filter(f=>f.category==="Dumplings").map(f=>(
              <li key={f._id} onClick={()=>setCategory("Dumplings")}>{f.name}</li>
            ))}
          </ul>
        </div>
        <div className="explore-menu-names-column">
          <h3>Fried Items</h3>
          <ul>
            {food_list.filter(f=>f.category==="Fried Items").map(f=>(
              <li key={f._id} onClick={()=>setCategory("Fried Items")}>{f.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
