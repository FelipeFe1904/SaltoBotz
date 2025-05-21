type Dictionary = {
  robots: {
    title: string
    description: string
    filter: {
      all: string
      mechanical: string
      electrical: string
      computing: string
      marketing: string
      administrative: string
      heavyweight: string
      middleweight: string
      lightweight: string
    }
    podiums: string
    competitions: string
    specialty: string
    back: string
    techSpecs: string
    specs: {
      dimensions: string
      weight: string
      weapon: string
      motor: string
      battery: string
      controller: string
      materials: string
    }
    team: string
    achievements: string
    about: string
    technology: string
    gallery: {
      photos: string
      building: string
      competitions: string
    }
    related: string
    competitions: {
      title: string
      button: string
    }
  }
  members: {
    title: string
    description: string
    filter: {
      all: string
      mechanical: string
      electrical: string
      computing: string
      marketing: string
      administrative: string
    }
    since: string
    join: {
      title: string
      description: string
      button: string
    }
  }
  products: {
    title: string
    description: string
    filter: {
      tshirts: string
      accessories: string
      kits: string
    }
    howToBuy: string
    howToBuy: {
      step1: string
      step1: {
        description: string
      }
      step2: string
      step2: {
        description: string
      }
      step3: string
      step3: {
        description: string
      }
    }
    questions: {
      title: string
      description: string
      button: string
    }
  }
  sponsors: {
    title: string
    description: string
    categories: string
    ourSponsors: string
    visitWebsite: string
    becomeSponsor: string
    becomeSponsor: {
      description: string
      benefit1: string
      benefit2: string
      benefit3: string
    }
  }
  footer: {
    contact: string
    social: string
    address: string
    copyright: string
    viewOn: string
  }
  button: {
    seeAll: string
    contact: string
    details: string
    buy: string
    seeMore: string
  }
  home: {
    hero: {
      title: string
      subtitle: string
      button1: string
      button2: string
    }
  }
}

const dictionaries: Record<string, Dictionary> = {
  "pt-BR": {
    robots: {
      title: "Nossos Robôs",
      description: "Conheça os robôs da equipe Salto Botz que competem em torneios nacionais e internacionais.",
      filter: {
        all: "Todos",
        mechanical: "Mecânica",
        electrical: "Elétrica",
        computing: "Computação",
        marketing: "Marketing",
        administrative: "Administrativo",
        heavyweight: "Peso Pesado",
        middleweight: "Peso Médio",
        lightweight: "Peso Leve",
      },
      podiums: "pódios",
      competitions: "competições",
      specialty: "Especialidade",
      back: "Voltar para robôs",
      techSpecs: "Especificações Técnicas",
      specs: {
        dimensions: "Dimensões",
        weight: "Peso",
        weapon: "Arma",
        motor: "Motor",
        battery: "Bateria",
        controller: "Controlador",
        materials: "Materiais",
      },
      team: "Equipe",
      achievements: "Conquistas",
      about: "Sobre o Robô",
      technology: "Tecnologia",
      gallery: {
        photos: "Fotos",
        building: "Construção",
        competitions: "Competições",
      },
      related: "Robôs Relacionados",
      competitions: {
        title: "Competições",
        button: "Ver Resultados",
      },
    },
    members: {
      title: "Membros",
      description:
        "Conheça as pessoas por trás dos robôs da Salto Botz. Nossa equipe é formada por estudantes e profissionais apaixonados por robótica.",
      filter: {
        all: "Todas",
        mechanical: "Mecânica",
        electrical: "Elétrica",
        computing: "Computação",
        marketing: "Marketing",
        administrative: "Administrativo",
      },
      since: "Desde",
      join: {
        title: "Quer fazer parte da equipe?",
        description:
          "Estamos sempre em busca de novos talentos para integrar nossa equipe. Se você é apaixonado por robótica e quer fazer parte desse time, entre em contato!",
        button: "Entre em Contato",
      },
    },
    products: {
      title: "Nossos Produtos",
      description: "Adquira produtos oficiais da Salto Botz e ajude a financiar nossos projetos e competições.",
      filter: {
        tshirts: "Camisetas",
        accessories: "Acessórios",
        kits: "Kits",
      },
      howToBuy: "Como Comprar",
      howToBuy: {
        step1: "Escolha seu Produto",
        step1: {
          description: "Navegue pelo nosso catálogo e escolha os produtos que deseja adquirir.",
        },
        step2: "Entre em Contato",
        step2: {
          description:
            "Entre em contato conosco por email ou WhatsApp para confirmar disponibilidade e realizar o pedido.",
        },
        step3: "Receba seu Produto",
        step3: {
          description: "Após a confirmação do pagamento, seu produto será enviado ou disponibilizado para retirada.",
        },
      },
      questions: {
        title: "Tem alguma dúvida?",
        description:
          "Entre em contato conosco para mais informações sobre nossos produtos ou para fazer um pedido personalizado.",
        button: "Fale Conosco",
      },
    },
    sponsors: {
      title: "Patrocinadores",
      description:
        "Conheça as empresas e instituições que acreditam e apoiam nosso trabalho. Sem eles, nossos projetos não seriam possíveis.",
      categories: "Categorias de Patrocínio",
      ourSponsors: "Nossos Patrocinadores",
      visitWebsite: "Visitar Website",
      becomeSponsor: "Torne-se um Patrocinador",
      becomeSponsor: {
        description:
          "Sua empresa pode fazer parte desta jornada de inovação e tecnologia. Patrocinar a Salto Botz traz visibilidade para sua marca e contribui para o desenvolvimento tecnológico e educacional.",
        benefit1: "Exposição da marca em competições nacionais e internacionais",
        benefit2: "Associação com inovação e tecnologia de ponta",
        benefit3: "Responsabilidade social e apoio à educação tecnológica",
      },
    },
    footer: {
      contact: "Contato",
      social: "Social",
      address: "Endereço",
      copyright: "Equipe Salto Botz de Robótica. Todos os direitos reservados.",
      viewOn: "Veja este site no",
    },
    button: {
      seeAll: "Ver Todos",
      contact: "Entre em Contato",
      details: "Ver Detalhes",
      buy: "Comprar",
      seeMore: "Saiba mais",
    },
    home: {
      hero: {
        title: "SALTO BOTZ",
        subtitle:
          "Inovação, tecnologia e paixão pela robótica. Construímos robôs de combate para competições nacionais e internacionais.",
        button1: "Conheça Nossos Robôs",
        button2: "Seja um Patrocinador",
      },
    },
  },
  "en-US": {
    robots: {
      title: "Our Robots",
      description: "Meet the Salto Botz team robots that compete in national and international tournaments.",
      filter: {
        all: "All",
        mechanical: "Mechanical",
        electrical: "Electrical",
        computing: "Computing",
        marketing: "Marketing",
        administrative: "Administrative",
        heavyweight: "Heavyweight",
        middleweight: "Middleweight",
        lightweight: "Lightweight",
      },
      podiums: "podiums",
      competitions: "competitions",
      specialty: "Specialty",
      back: "Back to robots",
      techSpecs: "Technical Specifications",
      specs: {
        dimensions: "Dimensions",
        weight: "Weight",
        weapon: "Weapon",
        motor: "Motor",
        battery: "Battery",
        controller: "Controller",
        materials: "Materials",
      },
      team: "Team",
      achievements: "Achievements",
      about: "About the Robot",
      technology: "Technology",
      gallery: {
        photos: "Photos",
        building: "Building",
        competitions: "Competitions",
      },
      related: "Related Robots",
      competitions: {
        title: "Competitions",
        button: "See Results",
      },
    },
    members: {
      title: "Members",
      description:
        "Meet the people behind Salto Botz robots. Our team is made up of students and professionals passionate about robotics.",
      filter: {
        all: "All",
        mechanical: "Mechanical",
        electrical: "Electrical",
        computing: "Computing",
        marketing: "Marketing",
        administrative: "Administrative",
      },
      since: "Since",
      join: {
        title: "Want to join the team?",
        description:
          "We are always looking for new talent to join our team. If you are passionate about robotics and want to be part of this team, get in touch!",
        button: "Contact Us",
      },
    },
    products: {
      title: "Our Products",
      description: "Purchase official Salto Botz products and help finance our projects and competitions.",
      filter: {
        tshirts: "T-shirts",
        accessories: "Accessories",
        kits: "Kits",
      },
      howToBuy: "How to Buy",
      howToBuy: {
        step1: "Choose Your Product",
        step1: {
          description: "Browse our catalog and choose the products you want to purchase.",
        },
        step2: "Contact Us",
        step2: {
          description: "Contact us by email or WhatsApp to confirm availability and place your order.",
        },
        step3: "Receive Your Product",
        step3: {
          description: "After payment confirmation, your product will be shipped or made available for pickup.",
        },
      },
      questions: {
        title: "Have any questions?",
        description: "Contact us for more information about our products or to place a custom order.",
        button: "Contact Us",
      },
    },
    sponsors: {
      title: "Sponsors",
      description:
        "Meet the companies and institutions that believe in and support our work. Without them, our projects would not be possible.",
      categories: "Sponsorship Categories",
      ourSponsors: "Our Sponsors",
      visitWebsite: "Visit Website",
      becomeSponsor: "Become a Sponsor",
      becomeSponsor: {
        description:
          "Your company can be part of this journey of innovation and technology. Sponsoring Salto Botz brings visibility to your brand and contributes to technological and educational development.",
        benefit1: "Brand exposure in national and international competitions",
        benefit2: "Association with innovation and cutting-edge technology",
        benefit3: "Social responsibility and support for technological education",
      },
    },
    footer: {
      contact: "Contact",
      social: "Social",
      address: "Address",
      copyright: "Salto Botz Robotics Team. All rights reserved.",
      viewOn: "View this site on",
    },
    button: {
      seeAll: "See All",
      contact: "Contact Us",
      details: "See Details",
      buy: "Buy",
      seeMore: "Learn more",
    },
    home: {
      hero: {
        title: "SALTO BOTZ",
        subtitle:
          "Innovation, technology, and passion for robotics. We build combat robots for national and international competitions.",
        button1: "Meet Our Robots",
        button2: "Become a Sponsor",
      },
    },
  },
}

export async function getDictionary(locale: string): Promise<Dictionary> {
  return dictionaries[locale] || dictionaries["pt-BR"]
}
