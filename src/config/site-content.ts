export type Language = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh: string;
};

export const siteContent = {
  metadata: {
    title: "AURANGE TRAVEL | Personalised Travel Services in Queensland",
    description:
      "Flexible and personalised travel services across Queensland and Australia, including customised itineraries, local tours, private transfers, airport transfers and group travel.",
  },
  company: {
    name: {
      en: "AURANGE TRAVEL P/L",
      zh: "澳朗旅行社",
    },
    logo: {
      en: "AURANGE TRAVEL",
      zh: "澳朗旅行社",
    },
    phone: "+61 439 000 279",
    email: "Aurangetravel@hotmail.com",
    address:
      "36 Marine Parade, Southport QLD 4215, Australia\nLevel 7/9 Help St, Chatswood NSW 2067",
    acn: "166 406 579",
    abn: "79 166 406 579",
    shortDescription: {
      en: "Flexible and personalised travel services based in Queensland, Australia.",
      zh: "位于澳大利亚昆士兰州，为您提供灵活、个性化的旅行服务。",
    },
    copyright: "© 2026 AURANGE TRAVEL P/L. All rights reserved.",
  },
  navigation: {
    links: [
      { id: "home", label: { en: "Home", zh: "首页" } },
      { id: "about", label: { en: "About Us", zh: "关于我们" } },
      { id: "services", label: { en: "Services", zh: "服务项目" } },
      {
        id: "destinations",
        label: { en: "Destinations", zh: "热门目的地" },
      },
      {
        id: "why-choose-us",
        label: { en: "Why Choose Us", zh: "选择我们的理由" },
      },
      { id: "contact", label: { en: "Contact", zh: "联系我们" } },
    ],
    languageSwitch: {
      en: "中文 / EN",
      zh: "EN / 中文",
    },
    cta: {
      en: "Contact Us",
      zh: "联系我们",
    },
  },
  hero: {
    title: {
      en: "Explore Australia Your Way",
      zh: "探索澳洲，开启专属旅程",
    },
    subtitle: {
      en: "Personalised travel services for memorable journeys across Australia.",
      zh: "为您提供灵活、便捷的澳洲旅游服务，让每一段旅程更加轻松难忘。",
    },
    description: {
      en: "From customised itineraries and local tours to airport transfers, private charter services and group travel, we help make every journey easier and more enjoyable.",
      zh: "从定制行程、本地旅游，到接送机、私人包车和团体出行，我们将根据您的需求提供合适的旅行安排。",
    },
    primaryAction: {
      en: "Explore Our Services",
      zh: "查看服务项目",
    },
    secondaryAction: {
      en: "Contact Us",
      zh: "联系我们",
    },
    image: {
      src: "/images/hero-gold-coast.jpg",
      alt: {
        en: "Gold Coast coastal skyline and beach",
        zh: "黄金海岸海滨风景",
      },
      fallbackLabel: {
        en: "Gold Coast Hero Image",
        zh: "黄金海岸主视觉",
      },
    },
  },
  about: {
    title: {
      en: "About AURANGE TRAVEL",
      zh: "关于澳朗旅行社",
    },
    paragraphs: [
      {
        en: "AURANGE TRAVEL is one of Australia's most highly awarded boutique luxury travel agencies, creating bespoke, end-to-end travel experiences backed by decades of expertise, exclusive industry connections, and a genuine passion for immersive travel. Our adventurous team dedicates countless hours to exploring and researching destinations across the globe, ensuring we bring you exceptional travel packages and unforgettable journeys tailored to your interests.",
        zh: "澳朗旅行社是澳大利亚屡获殊荣的精品豪华旅行社之一，凭借数十年的专业经验、独特的行业资源以及对沉浸式旅行的真挚热忱，为您打造量身定制的全程无忧旅行体验。我们充满冒险精神的团队投入大量时间探索和调研全球各地的目的地，确保为您提供非凡的旅行套餐和难忘的旅程，一切皆根据您的兴趣量身定制。",
      },
      {
        en: "From selecting the perfect destination to crafting personalized tour packages and itineraries, everything we do is designed around you. Get in touch with our travel specialists today and allow us to create a vacation you'll treasure for years to come.",
        zh: "从挑选理想的目的地，到量身定制旅游套餐和行程，我们所做的一切都以您为中心。立即联系我们的旅游专家，让我们为您打造一段值得珍藏多年的美好假期。",
      }
    ],
    image: {
      src: "/images/about-travel.jpg",
      alt: {
        en: "Travellers viewing coastal scenery",
        zh: "游客欣赏海岸风景",
      },
      fallbackLabel: {
        en: "About Travel Services",
        zh: "关于旅行服务",
      },
    },
  },
  services: {
    title: {
      en: "Our Services",
      zh: "我们的服务",
    },
    items: [
      {
        key: "planning",
        title: { en: "Customised Travel Planning", zh: "定制旅游" },
        description: {
          en: "Personalised travel planning based on your schedule, group size, budget and interests.",
          zh: "根据您的出行时间、人数、预算和兴趣，协助规划个性化旅行方案。",
        },
      },
      {
        key: "worldwide-tours",
        title: { en: "Worldwide Tours", zh: "全球旅游" },
        description: {
          en: "Browse popular travel spots across Australia and worldwide.",
          zh: "探索澳大利亚及世界各地的热门旅游景点。",
        },
      },
      {
        key: "charter",
        title: { en: "Private Charter Services", zh: "私人包车服务" },
        description: {
          en: "Flexible and comfortable private transport arrangements for families, groups and business travellers.",
          zh: "为家庭、团体及商务客户提供灵活、舒适的私人包车安排。",
        },
      },
      {
        key: "airport",
        title: { en: "Airport Transfers", zh: "接送机服务" },
        description: {
          en: "Convenient airport transfer arrangements to make your arrival and departure easier.",
          zh: "提供便捷的机场接送安排，让您的抵达和离开更加轻松。",
        },
      },
      {
        key: "group",
        title: { en: "Group Travel", zh: "团体旅游" },
        description: {
          en: "Travel arrangements for families, friends, businesses and other groups.",
          zh: "为家庭、朋友、企业及其他团体客户提供合适的出行方案。",
        },
      },
      {
        key: "business",
        title: { en: "Business Travel", zh: "商务出行" },
        description: {
          en: "Practical travel support for business visits and corporate arrangements.",
          zh: "为商务访问和企业出行提供便捷、实用的旅行安排。",
        },
      },
    ],
  },
  destinations: {
    title: {
      en: "Popular Destinations",
      zh: "热门目的地",
    },
    enquire: {
      en: "Enquire for details",
      zh: "请联系我们咨询",
    },
    items: [
      {
        key: "gold-coast",
        title: { en: "Gold Coast", zh: "黄金海岸" },
        description: {
          en: "Enjoy beautiful beaches, vibrant attractions and a relaxed coastal atmosphere.",
          zh: "体验迷人海滩、热门景点和轻松舒适的海滨氛围。",
        },
        image: "/images/destination-gold-coast.jpg",
      },
      {
        key: "brisbane",
        title: { en: "Brisbane", zh: "布里斯班" },
        description: {
          en: "Discover Queensland's riverside capital, local culture and nearby attractions.",
          zh: "探索昆士兰州首府的城市风光、河畔景色和周边景点。",
        },
        image: "/images/destination-brisbane.jpg",
      },
      {
        key: "sydney",
        title: { en: "Sydney", zh: "悉尼" },
        description: {
          en: "Explore iconic landmarks, harbour views and memorable city experiences.",
          zh: "游览标志性景点，欣赏海港风光，感受充满活力的城市体验。",
        },
        image: "/images/destination-sydney.jpg",
      },
      {
        key: "queensland",
        title: { en: "Queensland Scenic Tours", zh: "昆士兰特色路线" },
        description: {
          en: "Discover scenic destinations and flexible travel options across Queensland.",
          zh: "探索昆士兰州的自然风光和灵活多样的旅行选择。",
        },
        image: "/images/destination-queensland.jpg",
      },
      {
        key: "uluru",
        title: { en: "Uluru", zh: "乌鲁鲁" },
        description: {
          en: "Experience the iconic red desert landscape and unique Australian outback atmosphere.",
          zh: "感受标志性的红色沙漠景观与独特的澳洲内陆风情。",
        },
        image: "/images/destination-uluru.jpg",
      },
      {
        key: "hamilton-island",
        title: { en: "Hamilton Island", zh: "汉密尔顿岛" },
        description: {
          en: "Enjoy island relaxation, marine views and easy access to the Great Barrier Reef region.",
          zh: "享受海岛度假氛围、海景风光与大堡礁区域的便捷出行体验。",
        },
        image: "/images/destination-hamilton-island.jpg",
      },
      {
        key: "melbourne",
        title: { en: "Melbourne", zh: "墨尔本" },
        description: {
          en: "Discover laneway culture, city landmarks and diverse travel experiences.",
          zh: "探索巷弄文化、城市地标与多样化旅行体验。",
        },
        image: "/images/destination-melbourne.jpg",
      },
      {
        key: "cairns",
        title: { en: "Cairns", zh: "凯恩斯" },
        description: {
          en: "Explore tropical Queensland, reef gateway highlights and nearby natural scenery.",
          zh: "探索热带昆士兰风光、大堡礁门户城市及周边自然景点。",
        },
        image: "/images/destination-cairns.jpg",
      },
    ],
  },
  whyChooseUs: {
    title: {
      en: "Why Choose AURANGE TRAVEL",
      zh: "为什么选择澳朗旅行社",
    },
    items: [
      {
        key: "personalised",
        title: { en: "Personalised Service", zh: "个性化服务" },
        description: {
          en: "Travel arrangements tailored to your needs.",
          zh: "根据您的实际需求安排旅行服务。",
        },
      },
      {
        key: "flexible",
        title: { en: "Flexible Options", zh: "灵活选择" },
        description: {
          en: "Suitable options for individuals, families, groups and business travellers.",
          zh: "为个人、家庭、团体及商务客户提供灵活选择。",
        },
      },
      {
        key: "local-support",
        title: { en: "Australian-Based Support", zh: "澳大利亚本地支持" },
        description: {
          en: "Local travel support based in Queensland and New South Wales, Australia.",
          zh: "位于澳大利亚昆士兰州和新南威尔士州，为您提供本地旅行服务。",
        },
      },
      {
        key: "communication",
        title: { en: "Easy Communication", zh: "便捷沟通" },
        description: {
          en: "Contact us directly to discuss your travel plans.",
          zh: "欢迎直接联系我们，沟通您的出行需求。",
        },
      },
    ],
  },
  howItWorks: {
    title: {
      en: "How It Works",
      zh: "服务流程",
    },
    steps: [
      {
        title: {
          en: "Share Your Travel Plans",
          zh: "提交您的出行需求",
        },
        description: {
          en: "Tell us your destination, schedule, group size and travel preferences.",
          zh: "告诉我们您的目的地、出行时间、同行人数和旅行偏好。",
        },
      },
      {
        title: {
          en: "Receive Suitable Options",
          zh: "沟通合适方案",
        },
        description: {
          en: "We will discuss practical options and suitable arrangements with you.",
          zh: "我们将与您沟通实用可行的出行方案和安排。",
        },
      },
      {
        title: {
          en: "Confirm and Travel",
          zh: "确认安排并出行",
        },
        description: {
          en: "Once details are confirmed, we help coordinate a smoother travel experience.",
          zh: "确认细节后，我们将协助您更顺畅地完成出行安排。",
        },
      },
    ],
  },
  faq: {
    title: {
      en: "Frequently Asked Questions",
      zh: "常见问题",
    },
    subtitle: {
      en: "Find answers to some common questions about planning your trip with us.",
      zh: "了解旅行规划过程中常见问题的相关信息。",
    },
    /**
     * Demo FAQ content only.
     * Confirm booking policies, payment methods, insurance arrangements,
     * language support and refund terms with the client before production launch.
     */
    items: [
      {
        question: {
          en: "Can you assist with hotel bookings?",
          zh: "你们可以协助预订酒店吗？",
        },
        answer: {
          en: "Yes. We can discuss suitable accommodation options based on your destination, travel dates, budget and group size. Please contact us for details.",
          zh: "可以。我们可以根据您的目的地、出行日期、预算和同行人数，沟通适合的住宿选择。欢迎联系我们了解详情。",
        },
      },
      {
        question: {
          en: "Can you help arrange meals or restaurant bookings during the trip?",
          zh: "行程中可以协助安排餐饮或餐厅预订吗？",
        },
        answer: {
          en: "Meal arrangements and restaurant recommendations can be discussed depending on your itinerary and group requirements. Please let us know if you have any dietary preferences or special requests.",
          zh: "我们可以根据您的行程和同行人数，沟通用餐安排及餐厅建议。如有饮食偏好或特殊需求，也欢迎提前告知。",
        },
      },
      {
        question: {
          en: "Are your travel arrangements suitable for elderly travellers or children?",
          zh: "行程是否适合老人或儿童？",
        },
        answer: {
          en: "Yes. Travel arrangements can be adjusted based on the age, mobility and needs of your group. Please let us know in advance if you are travelling with elderly family members, young children or infants.",
          zh: "可以。我们可以根据同行人员的年龄、行动情况和实际需求，沟通更加合适的行程安排。如果同行人员中有老人、儿童或婴幼儿，建议提前告知。",
        },
      },
      {
        question: {
          en: "Can you provide translation or language support?",
          zh: "你们可以提供翻译或语言协助吗？",
        },
        answer: {
          en: "Language support may be available depending on your travel requirements and itinerary. Please contact us in advance so we can discuss suitable options.",
          zh: "我们可以根据您的具体行程和需求，沟通是否能够提供语言协助。建议提前联系我们了解可选方案。",
        },
      },
      {
        question: {
          en: "Is a deposit required to confirm a booking?",
          zh: "确认预订时是否需要支付定金？",
        },
        answer: {
          en: "A deposit may be required depending on the selected service and booking arrangements. The relevant amount and payment schedule will be confirmed with you before the booking is finalised.",
          zh: "是否需要支付定金，将根据您选择的服务和具体预订安排而定。我们会在确认预订前与您说明相关金额和付款时间。",
        },
      },
      {
        question: {
          en: "What is your cancellation and refund policy?",
          zh: "取消行程或退款的政策是什么？",
        },
        answer: {
          en: "Cancellation and refund conditions may vary depending on the selected service, suppliers and timing of the cancellation. We recommend contacting us as early as possible if your plans change.",
          zh: "取消和退款条件会根据具体服务、供应商及取消时间而有所不同。如您的行程发生变化，建议尽早联系我们。",
        },
      },
      {
        question: {
          en: "What payment methods do you accept?",
          zh: "你们接受哪些付款方式？",
        },
        answer: {
          en: "Available payment methods will be confirmed during the booking process. Please contact us if you would like to discuss payment arrangements before confirming your trip.",
          zh: "可使用的付款方式会在预订过程中与您确认。如需提前了解付款安排，欢迎联系我们咨询。",
        },
      },
      {
        question: {
          en: "Can the itinerary be adjusted after the initial plan is prepared?",
          zh: "行程方案确认前可以调整吗？",
        },
        answer: {
          en: "Yes. We can discuss reasonable adjustments before the booking is finalised. Some changes may affect pricing or availability.",
          zh: "可以。在最终确认预订前，我们可以沟通合理的行程调整。部分修改可能会影响价格或可用性。",
        },
      },
      {
        question: {
          en: "Do you offer travel insurance?",
          zh: "你们是否提供旅游保险？",
        },
        answer: {
          en: "Travel insurance options can be discussed depending on your trip. We recommend reviewing suitable coverage before departure.",
          zh: "我们可以根据您的行程沟通旅游保险相关选择。建议您在出发前确认适合自己的保障范围。",
        },
      },
      {
        question: {
          en: "What information should I provide when requesting a quote?",
          zh: "咨询报价时需要提供哪些信息？",
        },
        answer: {
          en: "Please provide your destination, preferred travel dates, number of travellers, expected budget and any special requirements. This will help us discuss suitable options with you.",
          zh: "请提供目的地、计划出行日期、同行人数、预算范围及其他特殊需求。这将帮助我们更好地与您沟通适合的方案。",
        },
      },
    ],
  },
  ctaBanner: {
    title: {
      en: "Ready to Plan Your Next Journey?",
      zh: "准备开启下一段旅程？",
    },
    description: {
      en: "Tell us about your travel needs and we will be happy to discuss suitable options with you.",
      zh: "欢迎告诉我们您的旅行需求，我们将与您沟通合适的方案。",
    },
    action: {
      en: "Contact Us Today",
      zh: "立即联系我们",
    },
  },
  contact: {
    title: {
      en: "Contact Us",
      zh: "联系我们",
    },
    form: {
      fields: {
        name: { en: "Name", zh: "姓名" },
        phone: { en: "Phone", zh: "联系电话" },
        email: { en: "Email", zh: "邮箱" },
        service: { en: "Interested Service", zh: "感兴趣的服务" },
        message: { en: "Message", zh: "留言" },
      },
      serviceOptions: [
        { value: "planning", label: { en: "Customised Travel Planning", zh: "定制旅游" } },
        { value: "local", label: { en: "Local Tours", zh: "本地旅游" } },
        { value: "charter", label: { en: "Private Charter Services", zh: "私人包车服务" } },
        { value: "airport", label: { en: "Airport Transfers", zh: "接送机服务" } },
        { value: "group", label: { en: "Group Travel", zh: "团体旅游" } },
        { value: "business", label: { en: "Business Travel", zh: "商务出行" } },
        { value: "other", label: { en: "Other", zh: "其他" } },
      ],
      submit: { en: "Send Enquiry", zh: "提交咨询" },
      success: {
        en: "Thank you for your enquiry. We will get back to you as soon as possible.",
        zh: "感谢您的咨询，我们会尽快与您联系。",
      },
      requiredError: {
        en: "Please complete all required fields.",
        zh: "请填写所有必填项。",
      },
      emailError: {
        en: "Please enter a valid email address.",
        zh: "请输入有效的邮箱地址。",
      },
    },
  },
} as const;

export const getLocalized = (value: LocalizedText, language: Language): string =>
  value[language];