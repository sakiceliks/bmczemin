import React, { useEffect, useState } from 'react';
import { FaTh } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function MainMenu({ hanldeOffset }) {

    const menuItems = [
        { title: 'Anasayfa', path: '/', subMenu: [] },
        { title: 'Hakkımızda', path: '/about', subMenu: [] },
        {
          title: 'Pages',
          path: '',
          subMenu: [
            { title: 'team', path: '/team' },
            { title: 'faq', path: '/faq' },
            { title: 'projects', path: '/projects' },
          ],
        },
        { title: 'Hizmetlerimiz', path: '/services', subMenu: [] },
        { title: 'News', path: '/news', subMenu: [] },
        { title: 'İletişim', path: '/contact', subMenu: [] },
      ];
        

    const location = useLocation();
   
    const NavigationItem = ({ item }) => {
        const location = useLocation();
        const isActive = location.pathname === item.path;
      
        return (
          <li className={isActive ? 'activemenu' : ''}>
            <Link to={item.path}>{item.title}</Link>
            {item.subMenu.length > 0 && (
              <ul className="sub-menu">
                {item.subMenu.map((subItem) => (
                  <li key={subItem.path}>
                    <Link to={subItem.path}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      };
    return (
        <>
            <div className="main-menu-area">
                <div className="row align-center">
                    <div className="col-6 col-md-8 col-lg-10">
                        <div className="main-menu">
                        <ul>
              {menuItems.map((menuItem) => (
                <NavigationItem key={menuItem.path} item={menuItem} />
              ))}
            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md-8 col-lg-2 icon-wrapper">
                        <button type="button" className="search-btn">
                            <i>
                                <FiSearch />
                            </i>
                        </button>
                        <button type="button" onClick={hanldeOffset} className="side-menu-toggle">
                            <FaTh />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainMenu;
