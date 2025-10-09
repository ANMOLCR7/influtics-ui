// components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';

const Header = ({ onOpenSidebar }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const headerRef = useRef(null);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { 
      name: 'Streaming Videos', 
      href: '/streaming-videos',
      submenu: [
        { name: 'Streaming Videos 1', href: '/videos-1' },
        { name: 'Streaming Videos 2', href: '/videos-2' },
        { name: 'Streaming Videos 3', href: '/videos-3' },
        { name: 'Streaming Video Details', href: '/video-details' }
      ],
    },
    { 
      name: 'Pages', 
      href: '/pages',
      submenu: [
        { name: 'Video Shop', href: '/video-shop' },
        { name: 'Video Shop Details', href: '/video-shop-details' },
        { name: 'Services', href: '/services' },
        { name: 'Service Details', href: '/service-details' },
        { name: 'Checkout', href: '/checkout' },
        { name: 'Sign Up', href: '/register' },
        { name: 'Sign in', href: '/login' },
        { name: 'Pricing', href: '/pricing' }
      ]
    },
    { 
      name: 'Blog', 
      href: '/blog',
      submenu: [
        { name: 'Blogs', href: '/blog' },
        { name: 'Blog Details', href: '/blog-details' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="jo-header" ref={headerRef}>
      <a href="/">
        <img src="/assets/img/logo.svg" alt="logo" />
      </a>
      <div className="jo-header-right">
        <div className="jo-header-nav">
          <div className="to-go-to-sidebar-in-mobile">
            <nav>
              {menuItems.map((item, index) => (
                <div key={index} className={`has-sub-menu relative ${item.submenu ? 'has-children' : ''}`}>
                  {item.submenu ? (
                    <div className="submenu-wrapper">
                      <a 
                        href={item.href}
                        className="main-menu-link"
                        onMouseEnter={() => setActiveSubmenu(item.name)}
                      >
                        {item.name}
                      </a>
                      <ul 
                        className={`jo-header-submenu ${activeSubmenu === item.name ? 'active' : ''}`}
                        onMouseLeave={() => setActiveSubmenu(null)}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href={subItem.href}>{subItem.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <a href={item.href} className="main-menu-link">
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
        <div className="d-flex gap-2">
          <a href="/about" className="jo-btn">
            <i className="flaticon-add-plus-button"></i>Follow Me
          </a>
          <button 
            className="jo-header-sidebar-open-btn jo-btn px-3 d-inline-block d-lg-none" 
            onClick={onOpenSidebar}
            aria-label="Open sidebar menu"
          >
            <i className="flaticon-menu"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;