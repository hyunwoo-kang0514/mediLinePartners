import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Clients.css'

const Clients = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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

  const getContent = () => {
    switch(language) {
      case 'eng':
        return {
          title: "Drug surveillance is changing.",
          subtitle: "Leading the change",
          description: "MEDILINE PARTNERS' clients are the proof.",
          subDescription: "Companies that have experienced MEDILINE PARTNERS are the evidence."
        }
      case 'chn':
        return {
          title: "药物监测正在发生变化。",
          subtitle: "引领变革",
          description: "MEDILINE PARTNERS的客户就是证明。",
          subDescription: "体验过MEDILINE PARTNERS的公司就是证据。"
        }
      default: // kor
        return {
          title: "약물감시는 변화하고 있습니다.",
          subtitle: "변화에 앞장서는",
          description: "메디라인파트너스의 고객사 입니다.",
          subDescription: "메디라인파트너스를 경험한 회사가 그 증거입니다."
        }
    }
  }

  const clients = [
    // 글로벌 제약사
    { 
      name: "Pfizer", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pfizer_logo.svg/2560px-Pfizer_logo.svg.png",
      category: "global" 
    },
    { 
      name: "AstraZeneca", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/AstraZeneca_logo.svg/2560px-AstraZeneca_logo.svg.png",
      category: "global" 
    },
    { 
      name: "Novartis", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Novartis_logo.svg/2560px-Novartis_logo.svg.png",
      category: "global" 
    },
    { 
      name: "Roche", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Roche_logo.svg/2560px-Roche_logo.svg.png",
      category: "global" 
    },
    { 
      name: "Merck", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Merck_%26_Co_logo.svg/2560px-Merck_%26_Co_logo.svg.png",
      category: "global" 
    },
    { 
      name: "GSK", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/GlaxoSmithKline_logo.svg/2560px-GlaxoSmithKline_logo.svg.png",
      category: "global" 
    },
    
    // 국내 제약사 (실제 로고 대신 색상 블록 사용)
    { name: "한미약품", logo: "🔴", category: "domestic" },
    { name: "유한양행", logo: "🟢", category: "domestic" },
    { name: "대웅제약", logo: "🟤", category: "domestic" },
    { name: "동아제약", logo: "🟢", category: "domestic" },
    { name: "제일약품", logo: "🔵", category: "domestic" },
    { name: "안국약품", logo: "🔴", category: "domestic" },
    
    // 바이오 기업
    { name: "셀트리온", logo: "🔵", category: "bio" },
    { name: "삼성바이오로직스", logo: "🔵", category: "bio" },
    { name: "SK바이오사이언스", logo: "🔴", category: "bio" },
    { name: "GC녹십자", logo: "🟢", category: "bio" },
    { name: "LG화학", logo: "🔴", category: "bio" },
    { name: "바이오니아", logo: "🟪", category: "bio" },
    
    // CRO/서비스 기업
    { 
      name: "IQVIA", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/IQVIA_logo.svg/2560px-IQVIA_logo.svg.png",
      category: "service" 
    },
    { 
      name: "Parexel", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Parexel_logo.svg/2560px-Parexel_logo.svg.png",
      category: "service" 
    },
    { 
      name: "ICON", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/ICON_plc_logo.svg/2560px-ICON_plc_logo.svg.png",
      category: "service" 
    },
    { name: "PRA Health", logo: "🟥", category: "service" },
    { name: "PPD", logo: "🟪", category: "service" },
    { name: "Syneos Health", logo: "🟦", category: "service" }
  ]

  const content = getContent()

  return (
    <section id="clients" className="clients">
      {/* 배경 이미지들 */}
      <div className="background-images">
        <div className="bg-image bg-1"></div>
        <div className="bg-image bg-2"></div>
        <div className="bg-image bg-3"></div>
      </div>
      
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
          <p className="clients-sub-description">{content.subDescription}</p>
        </motion.div>

        <motion.div className="clients-grid" variants={itemVariants}>
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              className="client-logo"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 10px 30px rgba(255, 0, 0, 0.2)"
              }}
            >
              {client.logo.startsWith('http') ? (
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="client-logo-img"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
              ) : null}
              <div className="logo-placeholder" style={{ display: client.logo.startsWith('http') ? 'none' : 'flex' }}>
                {client.logo}
              </div>
              <span className="client-name">{client.name}</span>
            </motion.div>
          ))}
        </motion.div>

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