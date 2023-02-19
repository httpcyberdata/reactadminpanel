import React from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css';
import { SidebarData } from '../../Data/Data';
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
            {SidebarData .map((item, index) => {
              return (
                <div className="menuItem">
                    <item.icon />
                    <span>
                        {item.heading}
                    </span>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Sidebar