import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-squares">
                <div className="square yellow"></div>
                <div className="square green"></div>
                <div className="square blue"></div>
                <div className="square red"></div>
              </div>
              <div className="logo-text">
                <h3>MEDiLiNE</h3>
                <p>PARTNERS</p>
              </div>
            </div>
            <p className="footer-description">
              임상시험 및 의약품 인허가 컨설팅 전문 기업
            </p>
          </div>
          
          <div className="footer-section">
            <h4>연락처</h4>
            <p>📞 +82-2-6966-4100</p>
            <p>📧 geeyoon_kang@medihelpline.net</p>
            <p>📍 인천 연수구 컨벤시아대로 81</p>
          </div>
          
          <div className="footer-section">
            <h4>서비스</h4>
            <ul>
              <li>임상시험 관리</li>
              <li>인허가 컨설팅</li>
              <li>데이터 관리</li>
              <li>품질보증</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 MEDiLiNE PARTNERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 