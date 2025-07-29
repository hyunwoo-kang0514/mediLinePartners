import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

const About = ({ language }) => {
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
          title: "About Us",
          subtitle: "We provide the best service based on clinical trial expertise",
          companyName: "MEDILINE PARTNERS",
          description1: "MEDILINE PARTNERS is a specialized company in clinical trials (CRO) and pharmaceutical licensing consulting. Based on years of clinical trial experience and expertise, we provide systematic support throughout the entire process from drug development to licensing.",
          description2: "We provide customized solutions using the latest technology and know-how for our clients' successful drug development, and promise high-quality services that comply with international standards.",
          stats: [
            { number: "10+", label: "Years Experience" },
            { number: "100+", label: "Completed Projects" },
            { number: "50+", label: "Expert Staff" },
            { number: "98%", label: "Client Satisfaction" }
          ]
        }
      case 'chn':
        return {
          title: "关于我们",
          subtitle: "基于临床试验专业性的最佳服务",
          companyName: "MEDILINE PARTNERS",
          description1: "MEDILINE PARTNERS是一家专门从事临床试验(CRO)和药品许可咨询的公司。基于多年的临床试验经验和专业知识，我们从药物开发到许可的整个过程提供系统性支持。",
          description2: "我们使用最新技术和专业知识为客户成功的药物开发提供定制解决方案，并承诺提供符合国际标准的高质量服务。",
          stats: [
            { number: "10+", label: "年经验" },
            { number: "100+", label: "完成项目" },
            { number: "50+", label: "专业人才" },
            { number: "98%", label: "客户满意度" }
          ]
        }
      default: // kor
        return {
          title: "회사소개",
          subtitle: "임상시험의 전문성을 바탕으로 최고의 서비스를 제공합니다",
          companyName: "메디라인파트너스",
          description1: "메디라인파트너스는 임상시험(CRO) 및 의약품 인허가 컨설팅 전문 기업입니다. 다년간의 임상시험 경험과 전문성을 바탕으로, 의약품 개발부터 인허가까지 전 과정을 체계적으로 지원합니다.",
          description2: "우리는 고객의 성공적인 의약품 개발을 위해 최신 기술과 노하우를 활용하여 맞춤형 솔루션을 제공하며, 국제 표준을 준수하는 높은 품질의 서비스를 약속드립니다.",
          stats: [
            { number: "10+", label: "년간 경험" },
            { number: "100+", label: "완료 프로젝트" },
            { number: "50+", label: "전문 인력" },
            { number: "98%", label: "고객 만족도" }
          ]
        }
    }
  }

  const content = getContent()

  return (
    <section id="about" className="about">
      <motion.div 
        ref={ref}
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </motion.div>
        
        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <h3>{content.companyName}</h3>
            <p>{content.description1}</p>
            <p>{content.description2}</p>
          </motion.div>
          
          <motion.div className="about-stats" variants={itemVariants}>
            {content.stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About 