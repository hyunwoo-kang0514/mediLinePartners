import React from 'react'
import './LanguageToggle.css'

const LanguageToggle = ({ language, onLanguageChange }) => {
  return (
    <div className="language-toggle">
      <button 
        className={`language-btn ${language === 'kor' ? 'active' : ''}`}
        onClick={() => onLanguageChange('kor')}
      >
        KOR
      </button>
      <div className="language-divider"></div>
      <button 
        className={`language-btn ${language === 'eng' ? 'active' : ''}`}
        onClick={() => onLanguageChange('eng')}
      >
        ENG
      </button>
      <div className="language-divider"></div>
      <button 
        className={`language-btn ${language === 'chn' ? 'active' : ''}`}
        onClick={() => onLanguageChange('chn')}
      >
        中文
      </button>
    </div>
  )
}

export default LanguageToggle 