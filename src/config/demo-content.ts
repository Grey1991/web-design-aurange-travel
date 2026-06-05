/**
 * DEMO CONTENT ONLY
 * This file contains fictional placeholder content for design and prototyping purposes.
 * Review, replace or remove all values before production launch.
 */

import type { LocalizedText } from "@/src/config/site-content";

type DemoReview = {
  rating: 5;
  quote: LocalizedText;
  name: LocalizedText;
  travelType: LocalizedText;
  date: LocalizedText;
};

type DemoPackage = {
  key: string;
  title: LocalizedText;
  description: LocalizedText;
  price: LocalizedText;
  priceNote?: LocalizedText;
  action: LocalizedText;
  image: string;
};

type DemoStat = {
  value: string;
  label: LocalizedText;
  subLabel?: LocalizedText;
};

type PricingHighlight = {
  title: LocalizedText;
  description: LocalizedText;
};

type DestinationPrice = {
  key: string;
  fromPrice: LocalizedText;
  note: LocalizedText;
};

export const demoContent = {
  reviews: {
    title: {
      en: "What Our Clients Say",
      zh: "客户评价",
    },
    subtitle: {
      en: "Hear from travellers who have planned their journeys with AURANGE TRAVEL.",
      zh: "听听客户与澳朗旅行社规划旅程后的真实感受。",
    },
    // TODO: Placeholder review summary for design purposes. Replace with verified data before production launch.
    summary: {
      score: "4.9 / 5",
      basedOn: {
        en: "Based on recent customer feedback",
        zh: "来自近期客户反馈",
      },
    },
    // TODO: Demo testimonials only. Replace with verified customer feedback before production launch.
    items: [
      {
        rating: 5,
        quote: {
          en: "The entire process was smooth and easy. The team helped us organise a flexible itinerary for our family trip, and communication was clear throughout.",
          zh: "整个安排过程非常顺利，团队根据我们的需求规划了灵活的家庭行程，沟通也一直很清晰。",
        },
        name: {
          en: "Emily Zhang",
          zh: "Emily Zhang",
        },
        travelType: {
          en: "Family Holiday · Gold Coast",
          zh: "家庭旅行 · 黄金海岸",
        },
        date: {
          en: "12 May 2026",
          zh: "2026年5月12日",
        },
      },
      {
        rating: 5,
        quote: {
          en: "Very helpful and responsive. Our airport transfer and day tour arrangements were simple, comfortable and well organised.",
          zh: "服务细致，回复及时。接送机和一日游安排都很方便，整体体验轻松舒适。",
        },
        name: {
          en: "Michael Chen",
          zh: "Michael Chen",
        },
        travelType: {
          en: "Private Transfer · Brisbane",
          zh: "私人接送 · 布里斯班",
        },
        date: {
          en: "03 Apr 2026",
          zh: "2026年4月3日",
        },
      },
      {
        rating: 5,
        quote: {
          en: "A great option for group travel. The itinerary was practical and the arrangements made the whole trip much easier for everyone.",
          zh: "非常适合团体出行，行程安排合理，也让整个旅程变得轻松很多。",
        },
        name: {
          en: "Sophia Wang",
          zh: "Sophia Wang",
        },
        travelType: {
          en: "Group Travel · Sydney",
          zh: "团体旅游 · 悉尼",
        },
        date: {
          en: "25 Mar 2026",
          zh: "2026年3月25日",
        },
      },
      {
        rating: 5,
        quote: {
          en: "We requested a customised route and the suggestions were practical for our timing and budget. The process felt very straightforward.",
          zh: "我们提出了定制路线需求，团队提供的建议很实用，也符合我们的时间和预算，整体流程很顺畅。",
        },
        name: {
          en: "Anonymous Customer",
          zh: "匿名客户",
        },
        travelType: {
          en: "Custom Itinerary · Queensland",
          zh: "定制行程 · 昆士兰",
        },
        date: {
          en: "18 Mar 2026",
          zh: "2026年3月18日",
        },
      },
      {
        rating: 5,
        quote: {
          en: "Our family appreciated the clear communication before confirming arrangements. Everything was coordinated well from start to finish.",
          zh: "确认前沟通非常清晰，家庭出行的各项安排都很有条理，从开始到结束都让人安心。",
        },
        name: {
          en: "Rachel Liu",
          zh: "Rachel Liu",
        },
        travelType: {
          en: "Family Travel · Brisbane",
          zh: "家庭出行 · 布里斯班",
        },
        date: {
          en: "08 Mar 2026",
          zh: "2026年3月8日",
        },
      },
      {
        rating: 5,
        quote: {
          en: "For our small group trip, the proposed schedule was flexible and easy to follow. It really reduced planning pressure.",
          zh: "小团出行安排很灵活，行程节奏也好掌握，确实减轻了我们自己做计划的压力。",
        },
        name: {
          en: "Anonymous Traveller",
          zh: "匿名旅客",
        },
        travelType: {
          en: "Small Group · Gold Coast",
          zh: "小团出行 · 黄金海岸",
        },
        date: {
          en: "26 Feb 2026",
          zh: "2026年2月26日",
        },
      },
      {
        rating: 5,
        quote: {
          en: "We had both airport transfer and local tour needs, and the coordination was efficient and comfortable.",
          zh: "我们同时有接送机和本地游需求，沟通效率高，安排也很舒适。",
        },
        name: {
          en: "Daniel Wu",
          zh: "Daniel Wu",
        },
        travelType: {
          en: "Airport Transfer · Gold Coast",
          zh: "接送机服务 · 黄金海岸",
        },
        date: {
          en: "10 Feb 2026",
          zh: "2026年2月10日",
        },
      },
      {
        rating: 5,
        quote: {
          en: "Helpful for business travel coordination. The plan was practical and easy to adjust when our schedule changed.",
          zh: "对商务出行安排帮助很大，方案务实，也能在行程变动时及时调整。",
        },
        name: {
          en: "Kevin Zhou",
          zh: "Kevin Zhou",
        },
        travelType: {
          en: "Business Travel · Sydney",
          zh: "商务出行 · 悉尼",
        },
        date: {
          en: "29 Jan 2026",
          zh: "2026年1月29日",
        },
      },
    ] as const satisfies readonly DemoReview[],
  },
  // TODO: Placeholder statistics for design purposes only. Replace or remove before production launch.
  trustStats: [
    {
      value: "10,000+",
      label: {
        en: "Trips Planned",
        zh: "已规划行程",
      },
    },
    {
      value: "4.9 / 5",
      label: {
        en: "Average Rating",
        zh: "客户平均评分",
      },
    },
    {
      value: "10+",
      label: {
        en: "Travel Services",
        zh: "旅行服务类型",
      },
    },
    {
      value: "10+ Years",
      label: {
        en: "Avg Advisor Experience",
        zh: "顾问平均经验",
      },
    },
  ] as const satisfies readonly DemoStat[],
  samplePricing: {
    title: {
      en: "Flexible Options, Competitive Pricing",
      zh: "灵活选择，合理价格",
    },
    paragraphs: [
      {
        en: "We understand that every trip is different. Our travel options can be tailored to your destination, schedule, group size and budget.",
        zh: "我们理解每一段旅程都有不同的需求。我们可以根据您的目的地、出行时间、同行人数和预算，为您沟通适合的旅行方案。",
      },
      {
        en: "Whether you are planning a family holiday, a private transfer or group travel, contact us for a personalised quote.",
        zh: "无论是家庭度假、私人接送还是团体出行，都欢迎联系我们获取定制报价。",
      },
    ],
    highlights: [
      {
        title: {
          en: "Competitive Quotes",
          zh: "灵活报价",
        },
        description: {
          en: "Quotes tailored to your travel requirements.",
          zh: "根据您的出行需求提供报价。",
        },
      },
      {
        title: {
          en: "Tailored Options",
          zh: "个性化方案",
        },
        description: {
          en: "Travel options designed around your needs.",
          zh: "根据您的实际需求安排旅行方案。",
        },
      },
      {
        title: {
          en: "No Hidden Surprises",
          zh: "清晰沟通",
        },
        description: {
          en: "Clear communication before confirming your arrangements.",
          zh: "确认行程前与您清晰沟通具体安排。",
        },
      },
    ] as const satisfies readonly PricingHighlight[],
    cta: {
      en: "Request a Quote",
      zh: "获取报价",
    },
  },
  packages: {
    title: {
      en: "Popular Travel Ideas",
      zh: "热门旅行推荐",
    },
    // TODO: Sample package content and pricing for design purposes only. Replace with client-approved packages before production launch.
    items: [
      {
        key: "gold-coast-highlights",
        title: {
          en: "Gold Coast Highlights",
          zh: "黄金海岸精选游",
        },
        description: {
          en: "Explore the Gold Coast's beaches, attractions and coastal lifestyle with a flexible local itinerary.",
          zh: "体验黄金海岸的迷人海滩、热门景点和轻松舒适的海滨氛围。",
        },
        price: {
          en: "From $299",
          zh: "$299 起",
        },
        priceNote: {
          en: "Starting price per person",
          zh: "每人参考起价",
        },
        action: {
          en: "Enquire Now",
          zh: "立即咨询",
        },
        image: "/images/destination-gold-coast.jpg",
      },
      {
        key: "brisbane-city-surrounds",
        title: {
          en: "Brisbane City & Surrounds",
          zh: "布里斯班城市及周边游",
        },
        description: {
          en: "Discover Brisbane's riverside attractions and nearby destinations with a convenient day trip.",
          zh: "探索布里斯班河畔景点及周边目的地，轻松体验便捷的一日游。",
        },
        price: {
          en: "From $189",
          zh: "$189 起",
        },
        priceNote: {
          en: "Starting price per person",
          zh: "每人参考起价",
        },
        action: {
          en: "Enquire Now",
          zh: "立即咨询",
        },
        image: "/images/destination-brisbane.jpg",
      },
      {
        key: "private-queensland-escape",
        title: {
          en: "Private Queensland Escape",
          zh: "昆士兰私人定制行程",
        },
        description: {
          en: "Enjoy a personalised travel experience with flexible planning for families and small groups.",
          zh: "为家庭和小型团体提供灵活、个性化的昆士兰旅行体验。",
        },
        price: {
          en: "Custom Quote",
          zh: "定制报价",
        },
        action: {
          en: "Request a Quote",
          zh: "获取报价",
        },
        image: "/images/destination-queensland.jpg",
      },
    ] as const satisfies readonly DemoPackage[],
  },
  // TODO: Market-reference sample prices for design purposes only. Verify and replace with approved pricing before production launch.
  destinationPrices: [
    {
      key: "gold-coast",
      fromPrice: { en: "From $419", zh: "$419 起" },
      note: { en: "Indicative starting price", zh: "参考起价" },
    },
    {
      key: "brisbane",
      fromPrice: { en: "From $265", zh: "$265 起" },
      note: { en: "Indicative starting price", zh: "参考起价" },
    },
    {
      key: "sydney",
      fromPrice: { en: "From $559", zh: "$559 起" },
      note: { en: "Indicative starting price", zh: "参考起价" },
    },
    {
      key: "queensland",
      fromPrice: { en: "From $459", zh: "$459 起" },
      note: { en: "Indicative starting price", zh: "参考起价" },
    },
    {
      key: "uluru",
      fromPrice: { en: "From $1119", zh: "$1119 起" },
      note: { en: "Indicative starting price", zh: "参考起价" },
    },
    {
      key: "hamilton-island",
      fromPrice: { en: "From $979", zh: "$979 起" },
      note: { en: "Indicative starting price", zh: "参考起价" },
    },
    {
      key: "melbourne",
      fromPrice: { en: "From $359", zh: "$359 起" },
      note: { en: "Indicative starting price", zh: "参考起价" },
    },
    {
      key: "cairns",
      fromPrice: { en: "From $489", zh: "$489 起" },
      note: { en: "Indicative starting price", zh: "参考起价" },
    },
  ] as const satisfies readonly DestinationPrice[],
} as const;