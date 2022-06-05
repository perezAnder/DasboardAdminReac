import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='contenedornb'>          
        <div className='search'>          
           <input type="item" placeholder='Buscar'/>
           <SearchIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <AccountCircleIcon className='icon'/>
            <h3>nameuser</h3>
          </div>
          <div className="item">
              <img src="https://static1.abc.es/media/MM/2021/11/10/PaulRudd-k2bE--1296x900@abc.jpg"
               alt=""
               className='avatar' />
          </div>
          <div className="item">
            <ArrowDropDownIcon className='icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar