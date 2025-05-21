"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "pt-BR" | "en-US"

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  "pt-BR": {
    // Navbar
    "nav.home": "Início",
    "nav.robots": "Robôs",
    "nav.members": "Membros",
    "nav.products": "Produtos",
    "nav.sponsors": "Patrocinadores",
    "nav.competitions": "Competições",

    // Home
    "home.hero.title": "SALTO BOTZ",
    "home.hero.subtitle":
      "Inovação, tecnologia e paixão pela robótica. Construímos robôs de combate para competições nacionais e internacionais.",
    "home.hero.button1": "Conheça Nossos Robôs",
    "home.hero.button2": "Seja um Patrocinador",
    "home.stats.robots": "Robôs Construídos",
    "home.stats.competitions": "Competições",
    "home.stats.awards": "Prêmios",
    "home.stats.members": "Membros",
    "home.about.title": "Nossa História",
    "home.about.description":
      "A Salto Botz nasceu da paixão por robótica e tecnologia. Nossa equipe foi formada por estudantes e entusiastas que compartilham o mesmo objetivo: criar robôs de combate inovadores e competitivos.",
    "home.about.mission.title": "Nossa Missão",
    "home.about.mission.description":
      "Desenvolver tecnologia de ponta em robótica de combate, inspirando novas gerações e promovendo o conhecimento técnico e científico.",
    "home.about.vision.title": "Nossa Visão",
    "home.about.vision.description":
      "Ser referência nacional em robótica de combate, participando das principais competições e desenvolvendo soluções inovadoras.",
    "home.about.values.title": "Nossos Valores",
    "home.about.values.description":
      "Inovação, trabalho em equipe, resiliência, ética e paixão pela tecnologia são os pilares que sustentam nosso trabalho.",
    "home.highlights.title": "Destaques",
    "home.highlights.description": "Conheça nossos principais robôs e produtos.",
    "home.highlights.robots.title": "Nossos Robôs",
    "home.highlights.robots.description":
      "Conheça as máquinas que representam a Salto Botz em competições nacionais e internacionais.",
    "home.highlights.robots.button": "Ver Robôs",
    "home.highlights.products.title": "Nossos Produtos",
    "home.highlights.products.description":
      "Adquira produtos oficiais da Salto Botz e ajude a financiar nossos projetos e competições.",
    "home.highlights.products.button": "Ver Produtos",
    "home.sponsor.title": "Seja um Patrocinador",
    "home.sponsor.description":
      "Junte-se a nós e faça parte desta jornada de inovação e tecnologia. Sua empresa pode se beneficiar de:",
    "home.sponsor.benefit1": "Exposição da marca em competições nacionais e internacionais",
    "home.sponsor.benefit2": "Associação com inovação e tecnologia de ponta",
    "home.sponsor.benefit3": "Visibilidade em mídias especializadas e eventos",
    "home.sponsor.benefit4": "Responsabilidade social e apoio à educação tecnológica",
    "home.sponsor.button1": "Ver Patrocinadores",
    "home.sponsor.button2": "Entre em Contato",

    // Members
    "members.title": "Membros",
    "members.description":
      "Conheça as pessoas por trás dos robôs da Salto Botz. Nossa equipe é formada por estudantes e profissionais apaixonados por robótica.",
    "members.filter.all": "Todas",
    "members.filter.mechanical": "Mecânica",
    "members.filter.electrical": "Elétrica",
    "members.filter.computing": "Computação",
    "members.filter.marketing": "Marketing",
    "members.filter.administrative": "Administrativo",
    "members.since": "Desde",
    "members.join.title": "Quer fazer parte da equipe?",
    "members.join.description":
      "Estamos sempre em busca de novos talentos para integrar nossa equipe. Se você é apaixonado por robótica e quer fazer parte desse time, entre em contato!",
    "members.join.button": "Entre em Contato",

    // Robots
    "robots.title": "Nossos Robôs",
    "robots.description":
      "Conheça as máquinas que representam a Salto Botz em competições nacionais e internacionais de combate de robôs.",
    "robots.filter.all": "Todos",
    "robots.filter.heavyweight": "Peso Pesado",
    "robots.filter.middleweight": "Peso Médio",
    "robots.filter.lightweight": "Peso Leve",
    "robots.podiums": "pódios",
    "robots.competitions": "competições",
    "robots.specialty": "Especialidade",
    "robots.back": "Voltar para robôs",
    "robots.techSpecs": "Especificações Técnicas",
    "robots.specs.dimensions": "Dimensões",
    "robots.specs.weight": "Peso",
    "robots.specs.weapon": "Arma",
    "robots.specs.motor": "Motor",
    "robots.specs.battery": "Bateria",
    "robots.specs.controller": "Controlador",
    "robots.specs.materials": "Materiais",
    "robots.team": "Equipe",
    "robots.achievements": "Conquistas",
    "robots.about": "Sobre o Robô",
    "robots.technology": "Tecnologia",
    "robots.gallery.photos": "Fotos",
    "robots.gallery.building": "Construção",
    "robots.gallery.competitions": "Competições",
    "robots.related": "Robôs Relacionados",
    "robots.competitions.title": "Competições",
    "robots.competitions.button": "Ver Resultados",

    // Products
    "products.title": "Nossos Produtos",
    "products.description":
      "Adquira produtos oficiais da Salto Botz e ajude a financiar nossos projetos e competições.",
    "products.filter.tshirts": "Camisetas",
    "products.filter.accessories": "Acessórios",
    "products.filter.kits": "Kits",
    "products.howToBuy": "Como Comprar",
    "products.howToBuy.step1": "Escolha seu Produto",
    "products.howToBuy.step1.description": "Navegue pelo nosso catálogo e escolha os produtos que deseja adquirir.",
    "products.howToBuy.step2": "Entre em Contato",
    "products.howToBuy.step2.description":
      "Entre em contato conosco por email ou WhatsApp para confirmar disponibilidade e realizar o pedido.",
    "products.howToBuy.step3": "Receba seu Produto",
    "products.howToBuy.step3.description":
      "Após a confirmação do pagamento, seu produto será enviado ou disponibilizado para retirada.",
    "products.questions.title": "Tem alguma dúvida?",
    "products.questions.description":
      "Entre em contato conosco para mais informações sobre nossos produtos ou para fazer um pedido personalizado.",
    "products.questions.button": "Fale Conosco",

    // Sponsors
    "sponsors.title": "Patrocinadores",
    "sponsors.description":
      "Conheça as empresas e instituições que acreditam e apoiam nosso trabalho. Sem eles, nossos projetos não seriam possíveis.",
    "sponsors.categories": "Categorias de Patrocínio",
    "sponsors.ourSponsors": "Nossos Patrocinadores",
    "sponsors.visitWebsite": "Visitar Website",
    "sponsors.becomeSponsor": "Torne-se um Patrocinador",
    "sponsors.becomeSponsor.description":
      "Sua empresa pode fazer parte desta jornada de inovação e tecnologia. Patrocinar a Salto Botz traz visibilidade para sua marca e contribui para o desenvolvimento tecnológico e educacional.",
    "sponsors.becomeSponsor.benefit1": "Exposição da marca em competições nacionais e internacionais",
    "sponsors.becomeSponsor.benefit2": "Associação com inovação e tecnologia de ponta",
    "sponsors.becomeSponsor.benefit3": "Responsabilidade social e apoio à educação tecnológica",

    // Footer
    "footer.contact": "Contato",
    "footer.social": "Social",
    "footer.address": "Endereço",
    "footer.copyright": "Equipe Salto Botz de Robótica. Todos os direitos reservados.",
    "footer.viewOn": "Veja este site no",

    // Common
    "button.seeAll": "Ver Todos",
    "button.contact": "Entre em Contato",
    "button.details": "Ver Detalhes",
    "button.buy": "Comprar",
    "button.seeMore": "Saiba mais",
  },
  "en-US": {
    // Navbar
    "nav.home": "Home",
    "nav.robots": "Robots",
    "nav.members": "Members",
    "nav.products": "Products",
    "nav.sponsors": "Sponsors",
    "nav.competitions": "Competitions",

    // Home
    "home.hero.title": "SALTO BOTZ",
    "home.hero.subtitle":
      "Innovation, technology, and passion for robotics. We build combat robots for national and international competitions.",
    "home.hero.button1": "Meet Our Robots",
    "home.hero.button2": "Become a Sponsor",
    "home.stats.robots": "Robots Built",
    "home.stats.competitions": "Competitions",
    "home.stats.awards": "Awards",
    "home.stats.members": "Members",
    "home.about.title": "Our History",
    "home.about.description":
      "Salto Botz was born from a passion for robotics and technology. Our team was formed by students and enthusiasts who share the same goal: to create innovative and competitive combat robots.",
    "home.about.mission.title": "Our Mission",
    "home.about.mission.description":
      "Develop cutting-edge technology in combat robotics, inspiring new generations and promoting technical and scientific knowledge.",
    "home.about.vision.title": "Our Vision",
    "home.about.vision.description":
      "To be a national reference in combat robotics, participating in major competitions and developing innovative solutions.",
    "home.about.values.title": "Our Values",
    "home.about.values.description":
      "Innovation, teamwork, resilience, ethics, and passion for technology are the pillars that support our work.",
    "home.highlights.title": "Highlights",
    "home.highlights.description": "Discover our main robots and products.",
    "home.highlights.robots.title": "Our Robots",
    "home.highlights.robots.description":
      "Meet the machines that represent Salto Botz in national and international competitions.",
    "home.highlights.robots.button": "See Robots",
    "home.highlights.products.title": "Our Products",
    "home.highlights.products.description":
      "Purchase official Salto Botz products and help finance our projects and competitions.",
    "home.highlights.products.button": "See Products",
    "home.sponsor.title": "Become a Sponsor",
    "home.sponsor.description":
      "Join us and be part of this journey of innovation and technology. Your company can benefit from:",
    "home.sponsor.benefit1": "Brand exposure in national and international competitions",
    "home.sponsor.benefit2": "Association with innovation and cutting-edge technology",
    "home.sponsor.benefit3": "Visibility in specialized media and events",
    "home.sponsor.benefit4": "Social responsibility and support for technological education",
    "home.sponsor.button1": "See Sponsors",
    "home.sponsor.button2": "Contact Us",

    // Members
    "members.title": "Members",
    "members.description":
      "Meet the people behind Salto Botz robots. Our team is made up of students and professionals passionate about robotics.",
    "members.filter.all": "All",
    "members.filter.mechanical": "Mechanical",
    "members.filter.electrical": "Electrical",
    "members.filter.computing": "Computing",
    "members.filter.marketing": "Marketing",
    "members.filter.administrative": "Administrative",
    "members.since": "Since",
    "members.join.title": "Want to join the team?",
    "members.join.description":
      "We are always looking for new talent to join our team. If you are passionate about robotics and want to be part of this team, get in touch!",
    "members.join.button": "Contact Us",

    // Robots
    "robots.title": "Our Robots",
    "robots.description":
      "Meet the machines that represent Salto Botz in national and international combat robot competitions.",
    "robots.filter.all": "All",
    "robots.filter.heavyweight": "Heavyweight",
    "robots.filter.middleweight": "Middleweight",
    "robots.filter.lightweight": "Lightweight",
    "robots.podiums": "podiums",
    "robots.competitions": "competitions",
    "robots.specialty": "Specialty",
    "robots.back": "Back to robots",
    "robots.techSpecs": "Technical Specifications",
    "robots.specs.dimensions": "Dimensions",
    "robots.specs.weight": "Weight",
    "robots.specs.weapon": "Weapon",
    "robots.specs.motor": "Motor",
    "robots.specs.battery": "Battery",
    "robots.specs.controller": "Controller",
    "robots.specs.materials": "Materials",
    "robots.team": "Team",
    "robots.achievements": "Achievements",
    "robots.about": "About the Robot",
    "robots.technology": "Technology",
    "robots.gallery.photos": "Photos",
    "robots.gallery.building": "Building",
    "robots.gallery.competitions": "Competitions",
    "robots.related": "Related Robots",
    "robots.competitions.title": "Competitions",
    "robots.competitions.button": "See Results",

    // Products
    "products.title": "Our Products",
    "products.description": "Purchase official Salto Botz products and help finance our projects and competitions.",
    "products.filter.tshirts": "T-shirts",
    "products.filter.accessories": "Accessories",
    "products.filter.kits": "Kits",
    "products.howToBuy": "How to Buy",
    "products.howToBuy.step1": "Choose Your Product",
    "products.howToBuy.step1.description": "Browse our catalog and choose the products you want to purchase.",
    "products.howToBuy.step2": "Contact Us",
    "products.howToBuy.step2.description":
      "Contact us by email or WhatsApp to confirm availability and place your order.",
    "products.howToBuy.step3": "Receive Your Product",
    "products.howToBuy.step3.description":
      "After payment confirmation, your product will be shipped or made available for pickup.",
    "products.questions.title": "Have any questions?",
    "products.questions.description": "Contact us for more information about our products or to place a custom order.",
    "products.questions.button": "Contact Us",

    // Sponsors
    "sponsors.title": "Sponsors",
    "sponsors.description":
      "Meet the companies and institutions that believe in and support our work. Without them, our projects would not be possible.",
    "sponsors.categories": "Sponsorship Categories",
    "sponsors.ourSponsors": "Our Sponsors",
    "sponsors.visitWebsite": "Visit Website",
    "sponsors.becomeSponsor": "Become a Sponsor",
    "sponsors.becomeSponsor.description":
      "Your company can be part of this journey of innovation and technology. Sponsoring Salto Botz brings visibility to your brand and contributes to technological and educational development.",
    "sponsors.becomeSponsor.benefit1": "Brand exposure in national and international competitions",
    "sponsors.becomeSponsor.benefit2": "Association with innovation and cutting-edge technology",
    "sponsors.becomeSponsor.benefit3": "Social responsibility and support for technological education",

    // Footer
    "footer.contact": "Contact",
    "footer.social": "Social",
    "footer.address": "Address",
    "footer.copyright": "Salto Botz Robotics Team. All rights reserved.",
    "footer.viewOn": "View this site on",

    // Common
    "button.seeAll": "See All",
    "button.contact": "Contact Us",
    "button.details": "See Details",
    "button.buy": "Buy",
    "button.seeMore": "Learn more",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-BR")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt-BR" ? "en-US" : "pt-BR"))
  }

  // Make sure all strings in the translations object are properly defined
  // Ensure all components are using the t() function for text content

  const t = (key: string): string => {
    // Improved translation function to handle missing translations
    if (!translations[language] || !translations[language][key as keyof (typeof translations)[typeof language]]) {
      // If the key doesn't exist, return the key itself as fallback
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    return translations[language][key as keyof (typeof translations)[typeof language]]
  }

  // Persist language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "pt-BR" || savedLanguage === "en-US")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    // Atualizar o atributo lang do HTML
    document.documentElement.lang = language
  }, [language])

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
