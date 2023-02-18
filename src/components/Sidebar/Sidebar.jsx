import React from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css';
import { UilEstate } from '@iconscout/react-unicons';

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>

        <div className="menu">
          <div className="menuItem">
            <div>
                <UilEstate />
            </div>
            <span>Dashboard</span>
          </div>
          <div className="menuItem">
            <div>
                <UilEstate />
            </div>
            <span>Dashboard</span>
          </div>
          <div className="menuItem">
            <div>
                <UilEstate />
            </div>
            <span>Dashboard</span>
          </div>
          <div className="menuItem">
            <div>
                <UilEstate />
            </div>
            <span>Dashboard</span>
          </div>
          <div className="menuItem">
            <div>
                <UilEstate />
            </div>
            <span>Dashboard</span>
          </div>
          <div className="menuItem">
            <div>
                <UilEstate />
            </div>
            <span>Dashboard</span>
          </div>
        </div>
    </div>
  )
}

export default Sidebar