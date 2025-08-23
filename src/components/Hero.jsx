import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Hero.css'

const Hero = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeTab, setActiveTab] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const tabs = [
    { 
      id: 0, 
      number: '01', 
      title: 'About Us', 
      content: '메디라인파트너스는 20년 연속 업계 1위 CRO 컨설팅 전문 기업입니다.',
      heroTitle: '메디라인파트너스는',
      heroSubtitle: '20년 연속 업계 1위',
      heroDescription: 'CRO 컨설팅 전문',
      heroEnd: '기업입니다.',
      visualType: 'about',
      isLargeVisual: true
    },
    { 
      id: 1, 
      number: '02', 
      title: 'PV 서비스', 
      content: '전문적인 약물감시 서비스로 안전성 확보',
      heroTitle: '전문적인',
      heroSubtitle: '약물감시 서비스',
      heroDescription: '안전성 확보를 위한',
      heroEnd: '체계적인 관리',
      visualType: 'pv',
      isLargeVisual: false
    },
    { 
      id: 2, 
      number: '03', 
      title: 'RA 서비스', 
      content: '체계적인 인허가 컨설팅으로 성공적인 승인',
      heroTitle: '체계적인',
      heroSubtitle: '인허가 컨설팅',
      heroDescription: '성공적인 승인을 위한',
      heroEnd: '전문 서비스',
      visualType: 'ra',
      isLargeVisual: false
    }
  ]

  // 자동 전환 기능
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length)
    }, 4000) // 4초마다 전환

    return () => clearInterval(interval)
  }, [autoPlay, tabs.length])

  // 탭 클릭 시 자동 재생 일시정지
  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
    setAutoPlay(false)
    
    // 10초 후 자동 재생 재개
    setTimeout(() => setAutoPlay(true), 10000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const getContent = () => {
    switch(language) {
      case 'eng':
        return {
          title: "Clinical CRO Consulting's",
          subtitle: "Expert Partner",
          description: "From drug development to licensing, experience successful clinical trials with Mediline Partners",
          button1: "About Us",
          button2: "Contact Us"
        }
      case 'chn':
        return {
          title: "临床CRO咨询的",
          subtitle: "专业合作伙伴",
          description: "从药物开发到许可，与Mediline Partners一起体验成功的临床试验",
          button1: "关于我们",
          button2: "联系我们"
        }
      default: // kor
        return {
          title: "임상 CRO 컨설팅의",
          subtitle: "전문 파트너",
          description: "의약품 개발부터 인허가까지, 메디라인파트너스와 함께 성공적인 임상시험을 경험하세요",
          button1: "회사소개",
          button2: "문의하기"
        }
    }
  }

  const content = getContent()
  const currentTab = tabs[activeTab]

  // About Us 탭의 큰 시각적 요소 렌더링
  const renderAboutUsLargeVisual = () => {
    return (
      <div className="about-large-visual">
        <div className="large-visual-container">
          {/* 메인 헥사곤 플랫폼 */}
          <div className="hexagon-platform">
            <div className="hexagon-glow"></div>
            <div className="hexagon-content">
              <div className="company-icon">
                <div className="icon-circle">
                  <div className="icon-symbol">M</div>
                </div>
              </div>
              <div className="achievement-badges">
                <div className="badge badge-1">
                  <div className="badge-icon">🏆</div>
                  <div className="badge-text">1위</div>
                </div>
                <div className="badge badge-2">
                  <div className="badge-icon">⭐</div>
                  <div className="badge-text">20년</div>
                </div>
                <div className="badge badge-3">
                  <div className="badge-icon">💎</div>
                  <div className="badge-text">전문</div>
                </div>
              </div>
            </div>
          </div>

          {/* 플로팅 요소들 */}
          <div className="floating-elements">
            <div className="floating-card card-1">
              <div className="card-icon">📊</div>
              <div className="card-text">성장률</div>
              <div className="card-value">+150%</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🤝</div>
              <div className="card-text">파트너</div>
              <div className="card-value">500+</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🌍</div>
              <div className="card-text">글로벌</div>
              <div className="card-value">30+</div>
            </div>
            <div className="floating-card card-4">
              <div className="card-icon">✅</div>
              <div className="card-text">성공률</div>
              <div className="card-value">98%</div>
            </div>
          </div>

          {/* 연결선과 파티클 */}
          <div className="connection-lines">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
            <div className="line line-4"></div>
          </div>

          {/* 파티클 효과 */}
          <div className="particles">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>
          </div>

          {/* 배경 그라데이션 원들 */}
          <div className="background-circles">
            <div className="bg-circle circle-1"></div>
            <div className="bg-circle circle-2"></div>
            <div className="bg-circle circle-3"></div>
          </div>
        </div>
      </div>
    )
  }

  // 일반 탭의 시각적 요소 렌더링
  const renderNormalVisual = (type) => {
    switch(type) {
      case 'pv':
        return (
          <>
            <div className="visual-element pv-element-1">
              <div className="element-icon">📚</div>
              <div className="element-text">약물감시 용어집</div>
            </div>
            <div className="visual-element pv-element-2">
              <div className="element-icon">📋</div>
              <div className="element-text">데이터 모니터링</div>
            </div>
            <div className="visual-element pv-element-3">
              <div className="element-icon">🛡️</div>
              <div className="element-text">안전성 보호</div>
            </div>
            <div className="central-figure pv-figure">
              <div className="figure-icon">💊</div>
            </div>
          </>
        )
      case 'ra':
        return (
          <>
            <div className="visual-element ra-element-1">
              <div className="element-icon">📖</div>
              <div className="element-text">규정 가이드</div>
            </div>
            <div className="visual-element ra-element-2">
              <div className="element-icon">✅</div>
              <div className="element-text">승인 프로세스</div>
            </div>
            <div className="visual-element ra-element-3">
              <div className="element-icon">⚖️</div>
              <div className="element-text">규정 준수</div>
            </div>
            <div className="central-figure ra-figure">
              <div className="figure-icon">📜</div>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <section className="hero" ref={ref}>
      <div className="hero-container">
        <motion.div 
          className="hero-main"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="hero-content" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentTab.heroTitle}<br />
              <span className={`highlight ${currentTab.isLargeVisual ? 'large-highlight' : ''}`}>
                {currentTab.heroSubtitle}
              </span><br />
              <span className={`highlight ${currentTab.isLargeVisual ? 'large-highlight' : ''}`}>
                {currentTab.heroDescription}
              </span><br />
              {currentTab.heroEnd}
            </motion.h1>
            <p className="hero-subtitle">{content.description}</p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-primary">{content.button1}</a>
              <a href="#contact" className="btn btn-secondary">{content.button2}</a>
            </div>
          </motion.div>

          <motion.div className="hero-image" variants={itemVariants}>
            <div className="hero-visual">
              <div className={`visual-container ${currentTab.isLargeVisual ? 'large-container' : ''}`}>
                <motion.div 
                  className="data-visualization"
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {currentTab.isLargeVisual ? renderAboutUsLargeVisual() : renderNormalVisual(currentTab.visualType)}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 탭 네비게이션 */}
        <motion.div className="hero-tabs" variants={itemVariants}>
          <div className="tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                <span className="tab-number">{tab.number}</span>
                <span className="tab-title">{tab.title}</span>
                {activeTab === tab.id && (
                  <motion.div
                    className="tab-underline"
                    layoutId="underline"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* 탭 콘텐츠 */}
          <motion.div 
            className="tab-content"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>{currentTab.content}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 