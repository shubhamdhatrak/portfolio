export type ThemeId =
  | 'governance'
  | 'workflows'
  | 'reporting'
  | 'android'
  | 'windows'
  | 'zs'
  | 'earlier';

export type SkillBadgeType = 'core' | 'platform' | 'scale' | 'protocol';

export type ChapterHighlight =
  | { type: 'metric'; before: string; after: string; label: string }
  | { type: 'workflow-diagram' };

export interface SkillBadge {
  label: string;
  type: SkillBadgeType;
}

export interface WorkChapter {
  id: string;
  title: string;
  employer: string;
  period?: string;
  status?: 'current' | 'completed';
  theme: ThemeId;
  hook: string;
  description: string;
  impact: string[];
  skillBadges: SkillBadge[];
  domainLabels?: string[];
  highlight?: ChapterHighlight;
}

export interface ThemeConfig {
  accent: string;
  accentMuted: string;
  label: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const profile = {
  name: 'Shubham Dhatrak',
  title: 'Senior Software Engineer',
  tagline:
    '7+ years building scalable backend systems, from greenfield services, data platforms, workflow orchestration, and production infrastructure on Kubernetes.',
  email: 'shubhamdhatrak04@gmail.com',
  linkedin: 'https://linkedin.com/in/shubhamdhatrak',
  github: 'https://github.com/shubhamdhatrak',
};

export const themes: Record<ThemeId, ThemeConfig> = {
  governance: {
    accent: '#F59E0B',
    accentMuted: '#92400E',
    label: 'Access Governance',
  },
  workflows: {
    accent: '#8B5CF6',
    accentMuted: '#5B21B6',
    label: 'Workflow Engine',
  },
  reporting: {
    accent: '#06B6D4',
    accentMuted: '#0E7490',
    label: 'Reporting Platform',
  },
  android: {
    accent: '#3DDC84',
    accentMuted: '#166534',
    label: 'Android EMM',
  },
  windows: {
    accent: '#0078D4',
    accentMuted: '#1E3A8A',
    label: 'Windows MDM',
  },
  zs: {
    accent: '#C9A227',
    accentMuted: '#78350F',
    label: 'Enterprise Platform',
  },
  earlier: {
    accent: '#64748B',
    accentMuted: '#334155',
    label: 'Earlier Work',
  },
};

export const workChapters: WorkChapter[] = [
  {
    id: 'governance',
    title: 'Security & Access Governance',
    employer: 'JumpCloud',
    period: '2024 – Present',
    status: 'current',
    theme: 'governance',
    hook: 'Multi-tenant backends for access posture, risk, and certification',
    description:
      'Building platform services for access posture assessment, risk scoring pipelines, and certification workflows across human and automated identities, including service accounts, agents, and MCP-based logins.',
    impact: [
      'Current focus: governance platform for enterprise identity fleets',
      'Covers human and non-human identity types at scale',
      'Auditable certification workflows for compliance teams',
    ],
    domainLabels: ['Human', 'Service Account', 'Agent', 'MCP Login'],
    skillBadges: [
      { label: 'Multi-tenant APIs', type: 'core' },
      { label: 'Risk Pipelines', type: 'core' },
      { label: 'Go', type: 'platform' },
      { label: 'Kubernetes', type: 'platform' },
      { label: 'gRPC', type: 'platform' },
      { label: 'Access Governance', type: 'protocol' },
    ],
  },
  {
    id: 'workflows',
    title: 'Workflow Automation Engine',
    employer: 'JumpCloud',
    period: '2023 – Present',
    status: 'completed',
    theme: 'workflows',
    hook: 'No-code automation with Temporal, Kafka, and a custom DSL',
    description:
      'Designed the workflow API, DSL specification, and Vue.js UI builder for IT automation: triggers, conditional actions, and third-party integrations with durable execution at scale.',
    impact: [
      'Scalable multi-tenant workflow execution',
      'API + UI builder for programmatic and self-service automation',
      'Kafka + Temporal distributed architecture',
    ],
    highlight: { type: 'workflow-diagram' },
    skillBadges: [
      { label: 'DSL Design', type: 'core' },
      { label: 'Temporal', type: 'core' },
      { label: 'Orchestration', type: 'core' },
      { label: 'Go', type: 'platform' },
      { label: 'Vue.js', type: 'platform' },
      { label: 'Kafka', type: 'platform' },
      { label: 'PostgreSQL', type: 'platform' },
      { label: 'MCP', type: 'platform' },
    ],
  },
  {
    id: 'reporting',
    title: 'Reporting Platform Modernization',
    employer: 'JumpCloud',
    period: '2023 – 2024',
    status: 'completed',
    theme: 'reporting',
    hook: 'Centralized data architecture with a custom search API and DSL',
    description:
      'Migrated from Trino federated queries across multiple databases to a centralized data model with ETL pipelines, index-optimized views, and a custom search API DSL.',
    impact: [
      'Report generation: ~30 minutes → 1–30 seconds',
      'Custom search API DSL with index-optimized queries',
      'Direct customer collaboration on data accuracy',
    ],
    highlight: {
      type: 'metric',
      before: '30 min',
      after: '30 sec',
      label: 'Report generation improved from 30 minutes to 30 seconds',
    },
    skillBadges: [
      { label: 'DSL Design', type: 'core' },
      { label: 'Query Optimization', type: 'core' },
      { label: 'Data Modeling', type: 'core' },
      { label: 'Go', type: 'platform' },
      { label: 'PostgreSQL', type: 'platform' },
      { label: 'ETL Pipeline', type: 'platform' },
      { label: '30 min → sec', type: 'scale' },
    ],
  },
  {
    id: 'android',
    title: 'Android EMM / MDM',
    employer: 'JumpCloud',
    period: '2022 – 2024',
    status: 'completed',
    theme: 'android',
    hook: 'Greenfield Go service scaling to 100K+ managed devices',
    description:
      'Built a backend service from scratch integrating Google EMM into JumpCloud device management, from POC discovery through production scale with zero-trust policies and GitOps deployment.',
    impact: [
      '100K+ managed Android devices',
      'Zero-trust policies across BYOD, fully managed, and work profile modes',
      'GitOps + K8s deployment with canary/blue-green releases',
    ],
    domainLabels: ['BYOD', 'Work Profile', 'Fully Managed'],
    skillBadges: [
      { label: 'Greenfield Architecture', type: 'core' },
      { label: 'Go', type: 'platform' },
      { label: 'Kubernetes', type: 'platform' },
      { label: 'Google EMM', type: 'platform' },
      { label: 'GitOps', type: 'platform' },
      { label: 'Terraform', type: 'platform' },
      { label: 'gRPC', type: 'platform' },
      { label: '100K+ devices', type: 'scale' },
    ],
  },
  {
    id: 'windows',
    title: 'Windows MDM Software Management',
    employer: 'JumpCloud',
    period: '2023 – 2024',
    status: 'completed',
    theme: 'windows',
    hook: 'CSP integrations, Chocolatey, and private app repository',
    description:
      'Enhanced Windows device management with CSP-based software management, Chocolatey integration, and a private app repository for customer-uploaded proprietary applications.',
    impact: [
      'Software App Management CSP integration',
      'Customer private app repository for proprietary software',
      'Chocolatey third-party package management',
    ],
    domainLabels: ['CSP', 'Chocolatey', 'Private Repo'],
    skillBadges: [
      { label: 'Windows MDM', type: 'core' },
      { label: 'CSP Integration', type: 'core' },
      { label: 'Go', type: 'platform' },
      { label: 'Kubernetes', type: 'platform' },
      { label: 'Package Management', type: 'platform' },
    ],
  },
  {
    id: 'zs',
    title: 'Enterprise Authentication Platform',
    employer: 'ZS Associates',
    period: '2019 – 2022',
    status: 'completed',
    theme: 'zs',
    hook: 'Unified microservices platform serving all ZS apps and clients',
    description:
      'Architected and built a next-generation authentication platform with microservices in Java and .NET, SDKs for consumer apps, and automated provisioning workflows, cutting platform cost and scaling to thousands of users.',
    impact: [
      'Up to 40% platform cost reduction',
      '10K+ users on OAuth2 and biometric login',
      '100% authentication protocol compliance',
    ],
    skillBadges: [
      { label: 'Microservices', type: 'core' },
      { label: 'SDK Design', type: 'core' },
      { label: 'Java', type: 'platform' },
      { label: 'C# / .NET', type: 'platform' },
      { label: 'Spring Boot', type: 'platform' },
      { label: 'Angular', type: 'platform' },
      { label: '40% cost cut', type: 'scale' },
      { label: '10K+ users', type: 'scale' },
      { label: 'OAuth 2.0', type: 'protocol' },
      { label: 'SAML', type: 'protocol' },
      { label: 'SCIM', type: 'protocol' },
    ],
  },
  {
    id: 'earlier',
    title: 'Earlier Work',
    employer: 'Internships',
    period: '2017 – 2019',
    status: 'completed',
    theme: 'earlier',
    hook: 'Mobile development, data visualization, and full-stack prototyping',
    description:
      'Internship work spanning Android surveillance apps, R Shiny sales dashboards with D3.js visualizations, and Android field-tracking using cell tower data.',
    impact: [
      'Android CCTV surveillance with face detection alerts',
      'R Shiny dashboard with D3.js and Highcharts metrics',
      'Android sales-rep tracking via cell tower data',
    ],
    skillBadges: [
      { label: 'Android', type: 'platform' },
      { label: 'R Shiny', type: 'platform' },
      { label: 'D3.js', type: 'platform' },
      { label: 'Highcharts', type: 'platform' },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    skills: ['Go', 'Java', 'C# / .NET', 'Spring Boot', 'gRPC', 'REST', 'DSL Design'],
  },
  {
    name: 'Distributed Systems',
    skills: ['Kafka', 'Temporal', 'Event-Driven Architecture', 'Microservices'],
  },
  {
    name: 'Infrastructure',
    skills: ['Kubernetes', 'GitOps', 'Terraform', 'Argo CD', 'Docker', 'CI/CD'],
  },
  {
    name: 'Frontend',
    skills: ['Vue.js', 'Angular', 'D3.js', 'Micro-frontend'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Query Optimization', 'Data Modeling', 'ETL'],
  },
  {
    name: 'Security & Protocols',
    skills: ['OAuth 2.0', 'SAML', 'SCIM', 'LDAP', 'Zero Trust', 'Access Governance'],
  },
  {
    name: 'Platform Integrations',
    skills: ['Android EMM/MDM', 'Windows MDM', 'CSP', 'Google EMM', 'Chocolatey'],
  },
  {
    name: 'Cloud',
    skills: ['AWS', 'GCP', 'Multi-Cloud', 'Terraform'],
  },
];

export const education = {
  degree: 'B.Tech Electronics & Telecommunication',
  cgpa: '9.00',
  institution: 'Vishwakarma Institute of Technology (VIT)',
  period: '2015 – 2019',
  location: 'Pune, India',
};

export const navLinks = [
  { href: '#work', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];
