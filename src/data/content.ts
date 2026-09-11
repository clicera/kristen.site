import { ServiceItem, CaseStudy, PricingPackage, Testimonial, FAQItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'seo-geo',
    title: 'Modern SEO & GEO',
    tag: 'Search & AI Discovery',
    shortDescription: 'Rank prominently on Google Page 1 and get cited inside AI search engines like ChatGPT, Perplexity, and Google AI Overviews.',
    fullDescription: 'Traditional search has evolved. Today, small businesses and startups need both conventional keyword authority and Generative Engine Optimization (GEO) to be the recommended source when AI answers customer questions.',
    iconName: 'Search',
    deliverables: [
      'Comprehensive Technical & Semantic SEO Audit',
      'Generative Engine Optimization (GEO) citation framework',
      'High-Intent Keyword & Entity Mapping',
      'Local Map Pack & Google Business Profile dominance',
      'Authoritative backlink & digital PR acquisition plan',
      'Monthly custom performance dashboard & keyword tracking'
    ],
    metrics: [
      { label: 'Avg. Organic Lift in 90 Days', value: '+185%' },
      { label: 'AI Engine Citation Rate', value: '78%' },
      { label: 'Keyword Retention', value: '94%' }
    ],
    keyBenefits: [
      'Future-proofed search traffic that thrives in the era of AI summaries',
      'High-intent qualified leads searching with intent to purchase',
      'Zero black-hat techniques: sustainable, ethical domain authority'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    tag: 'Founder & Brand Growth',
    shortDescription: 'Build an authentic, high-converting social presence across LinkedIn, Instagram, and X that attracts clients without constant burnout.',
    fullDescription: 'Stop shouting into the void with generic stock quotes. We design strategic content pillars, interactive carousels, and founder-led storytelling that turns casual scrollers into engaged brand advocates and paying customers.',
    iconName: 'Share2',
    deliverables: [
      'Platform-specific Growth & Positioning Strategy',
      'Founder personal branding & thought leadership calendar',
      'Custom visual assets, infographics & carousel designs',
      'Community engagement & inbound message nurturing',
      'Short-form video scripting & hook generation',
      'Bi-weekly trend analysis & algorithm adjustment'
    ],
    metrics: [
      { label: 'Engagement Rate vs Industry Avg', value: '3.4x' },
      { label: 'Profile Click-Through', value: '+140%' },
      { label: 'Inbound Inquiries', value: '5-12/mo' }
    ],
    keyBenefits: [
      'Direct 1-on-1 voice alignment: sounds genuinely like you, not an intern',
      'Consistent publishing consistency that compounds month after month',
      'Multi-channel reach repurposed from one core idea'
    ]
  },
  {
    id: 'content-writing',
    title: 'Content Writing & Blogging',
    tag: 'Conversion & Authority',
    shortDescription: 'In-depth, meticulously researched articles and newsletter dispatches that educate your audience and rank at the top of search results.',
    fullDescription: 'AI-generated slop won’t win trust or rankings. We craft deeply researched, voice-matched long-form content that provides genuine value, captures search traffic, and converts readers into long-term clients.',
    iconName: 'PenTool',
    deliverables: [
      'Editorial calendar aligned with commercial search intent',
      'Search-optimized 1,500-2,500 word pillar articles',
      'Newsletter strategy, layout, and weekly/bi-weekly edition writing',
      'Case study writing & customer success spotlight stories',
      'Lead magnet creation (guides, checklists, whitepapers)',
      'Content repurposing into 5+ social snippets per article'
    ],
    metrics: [
      { label: 'Average Time on Page', value: '4m 12s' },
      { label: 'Organic Inbound Leads', value: '+210%' },
      { label: 'Content ROI Index', value: '4.8x' }
    ],
    keyBenefits: [
      'High editorial standards with genuine subject-matter research',
      'Content built to capture both human readers and search crawlers',
      'Long-term evergreen assets that continue delivering leads for years'
    ]
  }
];

export const WHY_ONE_ON_ONE_POINTS = [
  {
    title: 'Direct Strategic Partnership',
    agency: 'Pitched by the senior founder, then quietly handed off to junior coordinators or interns.',
    clicera: '100% direct 1-on-1 collaboration with your dedicated freelance strategist on every single piece of work.',
    icon: 'UserCheck'
  },
  {
    title: 'Agile & Fast Turnarounds',
    agency: 'Layers of account managers, ticket queues, and multiple approval bottlenecks.',
    clicera: 'Direct Slack or WhatsApp communication. Rapid feedback loops with updates delivered in days, not weeks.',
    icon: 'Zap'
  },
  {
    title: 'Custom-Crafted Playbooks',
    agency: 'Standardized boilerplate checklists copied and pasted across dozens of conflicting clients.',
    clicera: 'Tailored roadmaps crafted specifically for your target audience, niche dynamics, and budget constraints.',
    icon: 'Target'
  },
  {
    title: 'Transparent, Honest Investment',
    agency: 'High monthly overheads to pay for shiny agency offices, account directors, and hidden billables.',
    clicera: 'Lean, transparent pricing where every dollar directly funds strategic growth and high-impact output.',
    icon: 'ShieldCheck'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'b2b-saas',
    clientName: 'TraceFlow Analytics',
    clientCategory: 'B2B SaaS / Seed-Stage',
    title: 'Scaling from Zero Organic Visibility to #1 ChatGPT Citation & 310% Search Growth',
    period: '4 Month Sprint',
    challenge: 'TraceFlow was burning cash on paid ads with rising CAC. Their blog was stagnant, and they were completely invisible in generative AI search summaries like ChatGPT and Perplexity.',
    solution: 'Engineered a modern SEO & GEO framework: structured semantic knowledge graphs, published 12 high-intent comparison guides, and launched a weekly founder newsletter on LinkedIn.',
    results: [
      { metric: '+310%', change: 'Organic Traffic', description: 'Qualified organic monthly visitors grew from 1,200 to 4,920' },
      { metric: '#1 Rank', change: 'AI Overviews', description: 'Cited as the recommended tool in 7 major industry AI prompts' },
      { metric: '-42%', change: 'Customer Acquisition Cost', description: 'Blended CAC dropped significantly as inbound demos surged' }
    ],
    quote: {
      text: "Working 1-on-1 with Clicera was night and day compared to our previous agency. No fluff, no endless slide decks—just razor-sharp execution that tripled our pipeline in four months.",
      author: 'Elena Rostova',
      role: 'Co-Founder & CEO, TraceFlow'
    }
  },
  {
    id: 'boutique-practice',
    clientName: 'Linden & Cole Advisory',
    clientCategory: 'Boutique Wealth & Legal Advisory',
    title: 'Dominating Local Search and Tripling High-Value Inbound Consultation Inquiries',
    period: '6 Month Retainer',
    challenge: 'A high-end boutique advisory firm relied strictly on word-of-mouth. Their website failed to rank for local high-net-worth search queries and lacked modern social validation.',
    solution: 'Revamped their local SEO profile, built targeted localized service pages, and established a distinguished LinkedIn thought leadership presence for the managing partner.',
    results: [
      { metric: 'Top 3', change: 'Google Map Pack', description: 'Ranking in top 3 positions for 18 competitive local search terms' },
      { metric: '3.8x', change: 'Consultation Inbound', description: 'Monthly qualified strategy calls increased from 4 to 15+' },
      { metric: '+180%', change: 'LinkedIn Profile Views', description: 'Senior executives actively reaching out via DM every week' }
    ],
    quote: {
      text: "Clicera understood our premium brand positioning instantly. The personalized attention ensured our thought leadership sounded sophisticated, authoritative, and completely bespoke.",
      author: 'Marcus Vance',
      role: 'Managing Partner, Linden & Cole'
    }
  },
  {
    id: 'solo-founder',
    clientName: 'Artisan Batch Coffee',
    clientCategory: 'Solo Entrepreneur / Specialty E-Commerce',
    title: 'From Niche Passion Project to 14,000 Loyal Subscribers & 4.2x Revenue Return',
    period: '90 Day Growth Sprint',
    challenge: 'A solo e-commerce founder had an exceptional product but lacked the time and bandwidth to handle SEO, social media, and recurring content marketing consistently.',
    solution: 'Designed a sustainable content hub focusing on coffee origins, automated a weekly brewing newsletter, and created high-converting Instagram story carousels.',
    results: [
      { metric: '14,200', change: 'Newsletter Readers', description: 'Built an active community with an outstanding 48% open rate' },
      { metric: '4.2x', change: 'Campaign ROAS', description: 'Direct attribution revenue from email and organic search' },
      { metric: '20+ Hrs', change: 'Founder Time Saved/Wk', description: 'Founder freed up to focus entirely on roasting and fulfillment' }
    ],
    quote: {
      text: "As a solo founder, having Clicera as my 1-on-1 marketing partner gave me the firepower of an entire marketing department without the stress or overhead.",
      author: 'Julian Croft',
      role: 'Founder & Master Roaster'
    }
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'sprint',
    name: 'Foundation & GEO Sprint',
    badge: 'Fast-Track',
    monthlyPrice: '$1,850',
    projectPrice: 'One-time 30-Day Sprint',
    tagline: 'Ideal for early-stage startups and small businesses wanting to fix foundations and establish instant search authority.',
    idealFor: 'Startups, Solo Founders & Local Businesses',
    features: [
      'Full Technical & Semantic SEO Audit',
      'Generative Engine Optimization (GEO) blueprint for AI discovery',
      'Competitor keyword gap analysis & entity mapping',
      'Google Business Profile / Local Search overhaul',
      'On-page optimization for your top 5 core landing pages',
      'Personalized 90-day execution roadmap & Loom walkthrough',
      'Direct 1-on-1 kickoff & final strategy review call'
    ],
    highlighted: false
  },
  {
    id: 'growth-partner',
    name: '1-on-1 Growth Partner',
    badge: 'Most Popular',
    monthlyPrice: '$2,950',
    projectPrice: '/ month (No long lock-ins)',
    tagline: 'Your complete hands-on marketing department. Comprehensive SEO/GEO, weekly content, and multi-channel social management.',
    idealFor: 'Growing Small Businesses & Seed Startups',
    features: [
      'Everything in the Foundation Sprint',
      'Ongoing SEO & Generative AI citation tracking',
      '2 high-impact, long-form pillar articles written per month',
      'Weekly social media content & carousel creation (LinkedIn / IG)',
      'Bi-weekly newsletter dispatch writing and scheduling',
      'Continuous on-page optimization & internal linking',
      'Dedicated private Slack / WhatsApp channel with direct access',
      'Bi-weekly 1-on-1 strategy call + monthly ROI reporting'
    ],
    highlighted: true
  },
  {
    id: 'content-engine',
    name: 'Content & Search Engine',
    badge: 'Authority Focused',
    monthlyPrice: '$2,250',
    projectPrice: '/ month',
    tagline: 'Designed for brands seeking to dominate high-intent organic search queries and build high-retention readership.',
    idealFor: 'B2B Services, Consultancies & SaaS',
    features: [
      'Search intent & keyword topic cluster architecture',
      '4 in-depth, original research articles (1,500+ words each)',
      'GEO optimization for LLM / ChatGPT retrieval',
      'Custom graphics, tables, and infographic creation per post',
      'Full CMS staging, on-page formatting, and metadata publishing',
      'Content syndication strategy & social snippet generation',
      'Monthly search performance & keyword ranking review'
    ],
    highlighted: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Founder',
    company: 'FinTrack Digital',
    highlight: 'Tripled our demo requests in under 90 days',
    content: 'Clicera took the time to understand our complex fintech product before writing a single word. Our organic search leads jumped 240%, and we now show up at the top of ChatGPT recommendations for our niche.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-2',
    name: 'David Chen',
    role: 'Co-Founder',
    company: 'Kinetiq Health',
    highlight: 'The 1-on-1 direct access was a game changer',
    content: 'We fired our old agency after months of slow responses and canned reports. With Clicera, I text my questions and get immediate strategic insight and deliverables that move the needle.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-3',
    name: 'Priya Patel',
    role: 'Principal Attorney',
    company: 'Patel Corporate Law',
    highlight: 'Finally, marketing that feels authentic and dignified',
    content: 'As a boutique law practice, we could not afford generic marketing. Clicera crafted sophisticated thought leadership that our high-net-worth clients respect. Our inbound inquiries have doubled.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Services',
    question: 'What is GEO (Generative Engine Optimization) and why is it essential?',
    answer: 'GEO is the modern evolution of SEO. With millions of potential customers searching for recommendations using ChatGPT, Perplexity, Claude, and Google AI Overviews, traditional keyword stuffing is obsolete. We structure your brand’s content with semantic clarity, entity references, and authoritative citations so AI search engines proactively name your business as the premier solution.'
  },
  {
    category: '1-on-1 Approach',
    question: 'How does working 1-on-1 with a freelancer differ from an agency?',
    answer: 'At a typical marketing agency, you are pitched by the founder or sales executive, but your account is subsequently managed by an inexperienced junior employee juggling 15 other clients. At Clicera, you work directly with a senior marketing strategist who understands every nuance of your business, delivers fast turnarounds without red tape, and answers your messages directly.'
  },
  {
    category: 'Pricing & Process',
    question: 'Are there long-term lock-in contracts?',
    answer: 'No. We believe in earning your business every single month through clear communication and quantifiable commercial results. Monthly retainers operate on a flexible 30-day notice period, and our Foundation Sprints are single-fee engagements.'
  },
  {
    category: 'Services',
    question: 'Can you handle SEO, Social Media, and Content together?',
    answer: 'Absolutely. In fact, they work best when integrated. An in-depth research article feeds both high-ranking SEO positions, generates authoritative GEO citations, and provides the raw material for 5-10 engaging social posts and a newsletter dispatch. That synergy compounds your return on investment.'
  },
  {
    category: 'Pricing & Process',
    question: 'How quickly can I expect to see tangible results?',
    answer: 'While technical fixes and social engagement begin showing momentum within 2 to 4 weeks, sustainable search engine growth and AI citations typically build significant momentum around the 60 to 90-day mark. We provide transparent bi-weekly tracking so you always know what is being built and how metrics are progressing.'
  }
];
