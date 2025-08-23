import React, { useState } from 'react'
import './Header.css'
import LanguageToggle from './LanguageToggle'

const Header = ({ language, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const getMenuItems = () => {
    switch(language) {
      case 'eng':
        return [
          { href: "#home", text: "Home" },
          { href: "#whyus", text: "Why Us" },
          { href: "#about", text: "About" },
          { href: "#services", text: "Services" },
          { href: "#clients", text: "Clients" },
          { href: "#contact", text: "Contact" }
        ]
      case 'chn':
        return [
          { href: "#home", text: "首页" },
          { href: "#whyus", text: "为什么选择我们" },
          { href: "#about", text: "关于我们" },
          { href: "#services", text: "服务" },
          { href: "#clients", text: "客户" },
          { href: "#contact", text: "联系我们" }
        ]
      default: // kor
        return [
          { href: "#home", text: "홈" },
          { href: "#whyus", text: "Why Us" },
          { href: "#about", text: "회사소개" },
          { href: "#services", text: "서비스" },
          { href: "#clients", text: "고객사" },
          { href: "#contact", text: "문의하기" }
        ]
    }
  }

  const menuItems = getMenuItems()

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <div className="big-m">M</div>
          </div>
          <div className="logo-text">
            <h1>MEDILINE</h1>
            <h2>PARTNERS</h2>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
          <LanguageToggle 
            language={language} 
            onLanguageChange={onLanguageChange} 
          />
        </nav>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header 