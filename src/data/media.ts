import heroWorkspaceImg from '../assets/images/hero_workspace_1789116470178.jpg';
import geoAiSearchImg from '../assets/images/geo_ai_search_1789116485580.jpg';
import founderCollabImg from '../assets/images/founder_strategy_1789116499743.jpg';

export { heroWorkspaceImg, geoAiSearchImg, founderCollabImg };

export interface VideoItem {
  id: string;
  title: string;
  tag: string;
  duration: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  chapters: { time: number; label: string; description: string }[];
  keyHighlights: string[];
}

export const VIDEO_SHOWCASE_DATA: VideoItem[] = [
  {
    id: 'sprint-walkthrough',
    title: 'The 1-on-1 Growth Sprint Blueprint',
    tag: 'Process Walkthrough',
    duration: '02:30',
    description: 'A behind-the-scenes look at how we audit, roadmap, and execute a 90-day search and content sprint directly with founders — without junior delegation or agency markups.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterUrl: heroWorkspaceImg,
    chapters: [
      { time: 0, label: '00:00 — Strategy Over Silos', description: 'Why traditional agencies fail small businesses' },
      { time: 15, label: '00:15 — The 30-Day Audit', description: 'Uncovering quick-win keywords & technical blockers' },
      { time: 40, label: '00:40 — Generative AI Optimization', description: 'Embedding entity signals for ChatGPT & Perplexity' },
      { time: 75, label: '01:15 — Content Engine & Distribution', description: 'Turning 1 pillar article into 8 conversion assets' },
      { time: 110, label: '01:50 — Direct Slack Collaboration', description: 'Same-day responses and zero ticket bottlenecks' }
    ],
    keyHighlights: [
      'Zero junior account managers: you work directly with the senior strategist',
      'Actionable roadmaps with transparent milestones and real-time dashboards',
      'Modern SEO + AI citation optimization built into every sprint'
    ]
  },
  {
    id: 'geo-audit-demo',
    title: 'Live GEO Audit: How AI Recommends Your Brand',
    tag: 'Live Demonstration',
    duration: '02:15',
    description: 'Watch a live screen demonstration showing how AI models (ChatGPT, Perplexity, Gemini) retrieve and cite business entities, and how Clicera optimizes your digital footprint.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl: geoAiSearchImg,
    chapters: [
      { time: 0, label: '00:00 — The AI Search Shift', description: 'How conversational queries replace standard 10 blue links' },
      { time: 20, label: '00:20 — Entity Graph Mapping', description: 'Teaching LLMs who you are and why you are the authority' },
      { time: 55, label: '00:55 — Digital PR & Consensus', description: 'Building the cross-web consensus that triggers AI citations' },
      { time: 90, label: '01:30 — Measuring AI Overviews', description: 'Tracking your brand’s citation frequency and prompt share' }
    ],
    keyHighlights: [
      'Comprehensive schema & semantic knowledge graph structuring',
      'Entity authority optimization for Google AI Overviews & Perplexity',
      'Proven 78% citation retrieval rate for client service categories'
    ]
  },
  {
    id: 'founder-case-study',
    title: 'Client Spotlight: 310% Search Growth in 4 Months',
    tag: 'Case Study Breakdown',
    duration: '01:50',
    description: 'Deep dive into the TraceFlow Analytics turnaround: taking a seed-stage B2B product from total obscurity to the #1 cited solution in their competitive niche.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    posterUrl: founderCollabImg,
    chapters: [
      { time: 0, label: '00:00 — Initial State & Ad Fatigue', description: 'Drowning in paid ad CAC with zero organic footprint' },
      { time: 25, label: '00:25 — Keyword Intent Architecture', description: 'Targeting commercial comparison terms rather than vanity volume' },
      { time: 55, label: '00:55 — Authority Content Publishing', description: '12 high-converting teardowns and founder-led carousels' },
      { time: 85, label: '01:25 — The Commercial Outcome', description: 'Surpassing 4,900 monthly organic demo inquiries' }
    ],
    keyHighlights: [
      '+310% qualified search traffic growth without ad spend increase',
      '#1 cited solution in 7 major industry ChatGPT search prompts',
      'Direct Slack partnership with founder saving 20+ hours every week'
    ]
  }
];

export const SERVICE_MEDIA = {
  seoGeo: {
    image: geoAiSearchImg,
    caption: 'Real-time Generative Engine Optimization & AI citation tracker'
  },
  social: {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
    caption: 'Multi-channel founder storytelling and magnetic social carousels'
  },
  content: {
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80',
    caption: 'Deeply researched pillar articles and high-retention newsletters'
  }
};

export const CASE_STUDY_MEDIA = {
  'b2b-saas': {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    tag: 'SaaS Analytics Dashboard',
    metricBadge: '+310% Organic'
  },
  'boutique-practice': {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    tag: 'Executive Practice Growth',
    metricBadge: 'Top 3 Map Pack'
  },
  'solo-founder': {
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop&q=80',
    tag: 'E-Commerce Content Hub',
    metricBadge: '14.2k Community'
  }
};
