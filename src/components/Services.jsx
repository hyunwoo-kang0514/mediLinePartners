import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Services.css'

const Services = ({ language }) => {
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
          title: "Services",
          subtitle: "Professional services for pharmaceutical and medical device licensing and pharmacovigilance",
          achievementsTitle: "Key Achievements",
          services: [
            {
              title: "PV (Pharmacovigilance)",
              description: "We provide professional pharmacovigilance services for drug safety assessment and risk management.",
              icon: "🔬",
              items: [
                "PV System Implementation",
                "SOP Development",
                "PV Consulting",
                "PV Training",
                "PV Auditing"
              ]
            },
            {
              title: "RA (Regulatory Affairs)",
              description: "We provide professional consulting services for pharmaceutical and medical device licensing.",
              icon: "📋",
              items: [
                "Licensing Strategy Development",
                "Regulatory Documentation",
                "License Application Support",
                "Regulatory Consulting",
                "Post-License Management"
              ]
            }
          ],
          achievements: [
            { number: "50+", label: "Completed Projects" },
            { number: "20+", label: "Major Clients" },
            { number: "100+", label: "Successful Licenses" },
            { number: "5+", label: "Years Experience" },
            { number: "98%", label: "Client Satisfaction" }
          ]
        }
      case 'chn':
        return {
          title: "服务",
          subtitle: "药品和医疗器械许可及药物警戒专业服务",
          achievementsTitle: "主要成就",
          services: [
            {
              title: "PV (药物警戒)",
              description: "我们为药物安全性评估和风险管理提供专业的药物警戒服务。",
              icon: "🔬",
              items: [
                "PV系统实施",
                "SOP开发",
                "PV咨询",
                "PV培训",
                "PV审计"
              ]
            },
            {
              title: "RA (监管事务)",
              description: "我们为药品和医疗器械许可提供专业咨询服务。",
              icon: "📋",
              items: [
                "许可策略制定",
                "监管文件编写",
                "许可申请支持",
                "监管咨询",
                "许可后管理"
              ]
            }
          ],
          achievements: [
            { number: "50+", label: "完成项目" },
            { number: "20+", label: "主要客户" },
            { number: "100+", label: "成功许可" },
            { number: "5+", label: "年经验" },
            { number: "98%", label: "客户满意度" }
          ]
        }
      default: // kor
        return {
          title: "서비스",
          subtitle: "의약품 의료기기 인허가 약물감시 전문 서비스",
          achievementsTitle: "주요성과",
          services: [
            {
              title: "PV (약물감시)",
              description: "의약품 안전성 평가와 위해성 관리에 대한 전문적인 약물감시 서비스를 제공합니다.",
              icon: "🔬",
              items: [
                "PV 시스템 구축",
                "SOP 개발",
                "PV 컨설팅",
                "PV 교육",
                "PV 감사"
              ]
            },
            {
              title: "RA (인허가)",
              description: "의약품 및 의료기기 인허가를 위한 전문적인 컨설팅 서비스를 제공합니다.",
              icon: "📋",
              items: [
                "인허가 전략 수립",
                "규제 문서 작성",
                "허가 신청 지원",
                "규제 컨설팅",
                "허가 후 관리"
              ]
            }
          ],
          achievements: [
            { number: "50+", label: "완료 프로젝트" },
            { number: "20+", label: "주요 고객사" },
            { number: "100+", label: "인허가 성공" },
            { number: "5+", label: "년간 경험" },
            { number: "98%", label: "고객 만족도" }
          ]
        }
    }
  }

  const content = getContent()

  return (
    <section id="services" className="services">
      <motion.div 
        ref={ref}
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </motion.div>
        
        <motion.div className="services-grid" variants={itemVariants}>
          {content.services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-items">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* 주요성과 섹션 */}
        <motion.div className="achievements-section" variants={itemVariants}>
          <h3>{content.achievementsTitle}</h3>
          <div className="achievements-grid">
            {content.achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="achievement-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Services 