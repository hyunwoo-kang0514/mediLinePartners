import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Clients.css'

const Clients = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const slideVariants = {
    enter: {
      opacity: 0,
      x: 100,
      scale: 0.8
    },
    center: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      x: -100,
      scale: 0.8
    }
  }

  const getContent = () => {
    switch(language) {
      case 'eng':
        return {
          title: "Major Customers",
          subtitle: "Leading pharmaceutical companies trust us",
          description: "Companies that have experienced MEDILINE PARTNERS are the evidence of our excellence.",
          subDescription: "From global giants to innovative biotech companies, we serve them all."
        }
      case 'chn':
        return {
          title: "主要客户",
          subtitle: "领先的制药公司信任我们",
          description: "体验过MEDILINE PARTNERS的公司就是我们卓越的证明。",
          subDescription: "从全球巨头到创新生物技术公司，我们为所有人服务。"
        }
      default: // kor
        return {
          title: "주요고객사",
          subtitle: "메디라인파트너스와 함께하는 주요 고객사는 다음과 같습니다",
          description: "메디라인파트너스를 경험한 회사가 그 증거입니다.",
          subDescription: "글로벌 제약사부터 혁신적인 바이오 기업까지, 모두를 위한 서비스를 제공합니다."
        }
    }
  }

  // 주요 고객사 데이터 (실제 PNG 파일에 있는 회사들만)
  const clients = [
    // 글로벌 제약사
    { 
      name: "Pfizer", 
      logo: "pfizer.png",
      category: "global",
      description: "Global pharmaceutical leader"
    },
    { 
      name: "Abbott", 
      logo: "Abbott.png",
      category: "global",
      description: "Healthcare innovation leader"
    },
    { 
      name: "AbbVie", 
      logo: "abbvie.png",
      category: "global",
      description: "Biopharmaceutical innovation"
    },
    { 
      name: "AstraZeneca", 
      logo: "AstraZeneka.png",
      category: "global",
      description: "Science-based innovation"
    },
    { 
      name: "Baxter", 
      logo: "Baxter.png",
      category: "global",
      description: "Medical technology solutions"
    },
    { 
      name: "Celgene", 
      logo: "celegene.png",
      category: "global",
      description: "Cancer treatment pioneer"
    },
    { 
      name: "CSL Behring", 
      logo: "CSL Behring.png",
      category: "global",
      description: "Biotechnology solutions"
    },
    { 
      name: "Dow", 
      logo: "Dow.png",
      category: "global",
      description: "Material science innovation"
    },
    { 
      name: "Eli Lilly", 
      logo: "illy.png",
      category: "global",
      description: "Life-changing medicines"
    },
    { 
      name: "Ipsen", 
      logo: "Ipsen.png",
      category: "global",
      description: "Specialty care medicines"
    },
    { 
      name: "Moderna", 
      logo: "modena.png",
      category: "global",
      description: "Messenger therapeutics"
    },
    
    // 국내 제약사
    { 
      name: "한미약품", 
      logo: "Hanmi Pharm.png",
      category: "domestic",
      description: "Korean pharmaceutical excellence"
    },
    { 
      name: "대웅제약", 
      logo: "Daewoong Pharmaceutical.png",
      category: "domestic",
      description: "Korean pharmaceutical innovation"
    },
    { 
      name: "삼성바이오에피스", 
      logo: "Samsung Bioepis.png",
      category: "domestic",
      description: "Biosimilar development"
    },
    { 
      name: "한국파마", 
      logo: "한국파마 (Korea Pharma).png",
      category: "domestic",
      description: "Korean pharmaceutical solutions"
    },
    { 
      name: "CMG제약", 
      logo: "CMG제약 (CMG Pharm).png",
      category: "domestic",
      description: "Innovative drug development"
    },
    { 
      name: "NOV Metapharma", 
      logo: "NOV Metapharma.png",
      category: "domestic",
      description: "Metabolic disease treatment"
    },
    
    // 바이오테크 기업
    { 
      name: "Biosolution", 
      logo: "Biosolution.png",
      category: "biotech",
      description: "Biotechnology solutions"
    },
    { 
      name: "Aston Science", 
      logo: "Aston Sci..png",
      category: "biotech",
      description: "Scientific innovation"
    },
    { 
      name: "NEXEL", 
      logo: "NEXEL.png",
      category: "biotech",
      description: "Next generation therapeutics"
    },
    { 
      name: "SciGen", 
      logo: "SciGen.png",
      category: "biotech",
      description: "Science generation"
    },
    { 
      name: "Infinitt Healthcare", 
      logo: "Infinitt Healthcare.png",
      category: "healthcare",
      description: "Healthcare IT solutions"
    },
    { 
      name: "ExoStemTech", 
      logo: "ExoStemTech.png",
      category: "biotech",
      description: "Exosome stem cell technology"
    },
    { 
      name: "MicroPort", 
      logo: "MicroPort.png",
      category: "medical",
      description: "Medical device innovation"
    },
    { 
      name: "Penumbra", 
      logo: "Penumbra.png",
      category: "medical",
      description: "Medical device solutions"
    },
    { 
      name: "Innovo Therapeutics", 
      logo: "Innovo Therapeutics.png",
      category: "biotech",
      description: "Innovative therapeutics"
    },
    { 
      name: "Allerpha International", 
      logo: "Allerpha International.png",
      category: "healthcare",
      description: "International healthcare"
    },
    { 
      name: "PharmAbcine", 
      logo: "PharmAbcine.png",
      category: "biotech",
      description: "Antibody therapeutics"
    }
  ]

  // 자동 슬라이드 기능
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    )
  }, [clients.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    )
  }, [clients.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // 자동 슬라이드 효과
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 3000) // 3초마다 전환

    return () => clearInterval(interval)
  }, [isPlaying, nextSlide])

  const content = getContent()

  return (
    <section id="clients" className="clients">
      <motion.div 
        ref={ref}
        className="clients-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="clients-header" variants={itemVariants}>
          <h2 className="clients-title">{content.title}</h2>
          <p className="clients-subtitle">{content.subtitle}</p>
          <p className="clients-description">{content.description}</p>
        </motion.div>

        {/* 자동 슬라이드 영역 */}
        <motion.div className="clients-slider" variants={itemVariants}>
          <div className="slider-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="slide-content"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
              >
                <div className="client-logo-container">
                  <img 
                    src={clients[currentIndex].logo} 
                    alt={clients[currentIndex].name} 
                    className="client-logo-img"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="logo-placeholder" style={{ display: 'none' }}>
                    🏢
                  </div>
                </div>
                <h3 className="client-name">{clients[currentIndex].name}</h3>
                <p className="client-description">{clients[currentIndex].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 슬라이더 컨트롤 - 방향표 버튼 삭제 */}
          {/* <div className="slider-controls">
            <button 
              className="control-btn prev-btn"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ‹
            </button>
            
            <button 
              className="control-btn next-btn"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ›
            </button>
          </div> */}

          {/* 슬라이드 인디케이터 */}
          <div className="slider-indicators">
            {clients.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* 하단 CTA */}
        <motion.div 
          className="clients-cta"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <a href="#contact" className="cta-button">
            {language === 'eng' ? 'Become Our Partner' : language === 'chn' ? '成为我们的合作伙伴' : '파트너가 되어보세요'}
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Clients 