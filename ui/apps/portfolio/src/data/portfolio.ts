export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  company: string;
  description: string;
  impact: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const profile = {
  name: 'Shubham Dhatrak',
  title: 'Senior Software Engineer',
  tagline:
    'Building secure, scalable identity and platform systems — from IAM protocols and device management to workflow automation and identity governance.',
  email: 'shubhamdhatrak04@gmail.com',
  phone: '+91-9623238396',
  location: 'Pune, India',
  linkedin: 'https://linkedin.com/in/shubhamdhatrak',
  github: 'https://github.com/shubhamdhatrak',
};

export const experiences: Experience[] = [
  {
    company: 'JumpCloud',
    role: 'Senior Software Engineer',
    period: 'Aug 2022 – Present',
    location: 'Pune, India',
    highlights: [
      'Joined as Software Engineer II; earned two promotions to Senior Software Engineer',
      'Built Android EMM/MDM service from scratch, scaling to 100K+ managed devices with zero-trust policies',
      'Modernized reporting platform — reduced report generation from ~30 minutes to 1–30 seconds via centralized DB and search API DSL',
      'Designed workflow automation engine with Kafka, Temporal, and no-code/low-code UI builder',
      'Currently working on identity security governance: access posture, access risk, and access certification',
    ],
    technologies: [
      'Go',
      'Vue.js',
      'gRPC',
      'Kubernetes',
      'GitOps',
      'Terraform',
      'Kafka',
      'Temporal',
      'PostgreSQL',
      'Argo CD',
    ],
  },
  {
    company: 'ZS Associates',
    role: 'Software Engineer – Applications',
    period: 'Feb 2019 – Aug 2022',
    location: 'Pune, India',
    highlights: [
      'Designed SCIM authentication modules and OAuth2/SAML/WS-Fed/LDAP integrations with 100% compliance',
      'Architected next-generation IAM product cutting cost up to 40% for all ZS applications and clients',
      'Built microservices (Java) and web services (.NET) with SDKs for user, role, and application management',
      'Redesigned IAM for OAuth2 grants and biometric login (fingerprint/face-id) used by 10K+ users',
      'Automated joiner-mover-leaver workflows via custom OData REST APIs',
    ],
    technologies: [
      'Java',
      'C#',
      '.NET Core',
      'Spring Boot',
      'Angular',
      'OAuth 2.0',
      'SAML',
      'SCIM',
      'PostgreSQL',
      'MySQL',
    ],
  },
  {
    company: 'Data Science Technologies',
    role: 'Software Engineer Intern',
    period: 'Jun 2018 – Jan 2019',
    location: 'Pune, India',
    highlights: [
      'Built full-stack R Shiny web app for visualizing historic sales data',
      'Developed metrics and insights using D3.js and Highcharts',
      'Designed Android sales-rep tracking using cell tower data when GPS is off',
    ],
    technologies: ['R Shiny', 'D3.js', 'Highcharts', 'Android'],
  },
  {
    company: 'Stomatobot Technologies',
    role: 'Android Developer Intern',
    period: 'Apr 2017 – Jul 2017',
    location: 'Pune, India',
    highlights: [
      'Built Android app for real-time CCTV surveillance',
      'Implemented alerts for unknown face detection and unusual movement',
    ],
    technologies: ['Android'],
  },
];

export const projects: Project[] = [
  {
    title: 'Android EMM / MDM',
    company: 'JumpCloud',
    description:
      'Greenfield backend service integrating Google EMM into JumpCloud device management — from POC discovery through production scale.',
    impact: [
      '100K+ managed Android devices',
      'Zero-trust policies across BYOD, fully managed, and work profile modes',
      'GitOps + K8s deployment with canary/blue-green releases',
    ],
    technologies: ['Go', 'Kubernetes', 'Google EMM', 'GitOps', 'Terraform', 'gRPC'],
  },
  {
    title: 'Reporting Platform Modernization',
    company: 'JumpCloud',
    description:
      'Migrated from Trino federated queries to centralized database with custom search API and DSL.',
    impact: [
      'Report generation: ~30 minutes → 1–30 seconds',
      'Custom search API DSL with index-optimized queries',
      'Direct customer collaboration on data accuracy',
    ],
    technologies: ['Go', 'PostgreSQL', 'ETL Pipeline', 'DSL Design', 'Search API'],
  },
  {
    title: 'Workflow Automation Engine',
    company: 'JumpCloud',
    description:
      'No-code/low-code platform for IT automation — triggers, conditional actions, and third-party integrations.',
    impact: [
      'Scalable multi-tenant workflow execution',
      'API + UI builder for programmatic and self-service automation',
      'Kafka + Temporal distributed architecture',
    ],
    technologies: ['Go', 'Vue.js', 'Temporal', 'Kafka', 'PostgreSQL', 'MCP'],
  },
  {
    title: 'Windows MDM Software Management',
    company: 'JumpCloud',
    description:
      'Enhanced Windows device management with CSP-based software management, Chocolatey integration, and private app repository.',
    impact: [
      'Software App Management CSP integration',
      'Customer private app repository for proprietary software',
      'Chocolatey third-party package management',
    ],
    technologies: ['Go', 'Windows MDM', 'CSP', 'Chocolatey', 'Kubernetes'],
  },
  {
    title: 'Identity Security & Governance',
    company: 'JumpCloud',
    description:
      'Access posture, access risk, and access certification for human and non-human identities (service accounts, agents, MCP logins).',
    impact: ['Current project — identity governance platform'],
    technologies: ['Go', 'Identity Security', 'Access Governance'],
  },
  {
    title: 'Next-Generation IAM Platform',
    company: 'ZS Associates',
    description:
      'Unified IAM architecture serving all ZS applications and clients with modern authentication and provisioning.',
    impact: [
      'Up to 40% IAM cost reduction',
      '10K+ users on OAuth2/biometric login',
      '100% authentication protocol compliance',
    ],
    technologies: ['Java', 'C#', 'OAuth 2.0', 'SAML', 'SCIM', 'Spring Boot', '.NET'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    skills: ['Go', 'Java', 'C# / .NET', 'Spring Boot', 'gRPC', 'REST', 'DSL Design'],
  },
  {
    name: 'Frontend',
    skills: ['Vue.js', 'Angular', 'D3.js', 'Micro-frontend'],
  },
  {
    name: 'Infrastructure',
    skills: ['Kubernetes', 'GitOps', 'Terraform', 'Argo CD', 'Docker', 'CI/CD'],
  },
  {
    name: 'Distributed Systems',
    skills: ['Kafka', 'Temporal', 'Event-Driven Architecture', 'Microservices'],
  },
  {
    name: 'Identity & Security',
    skills: ['OAuth 2.0', 'SAML', 'SCIM', 'LDAP', 'Zero Trust', 'Access Governance'],
  },
  {
    name: 'Device Management',
    skills: ['Android EMM/MDM', 'Windows MDM', 'CSP', 'BYOD', 'Google EMM'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Query Optimization', 'Data Modeling', 'ETL'],
  },
  {
    name: 'Cloud',
    skills: ['AWS', 'GCP', 'Multi-Cloud', 'Terraform'],
  },
];

export const achievements = [
  { metric: '100K+', label: 'Android devices managed' },
  { metric: '30 min → sec', label: 'Report generation improvement' },
  { metric: '40%', label: 'IAM cost reduction at ZS' },
  { metric: '10K+', label: 'Users on biometric login' },
  { metric: '2x', label: 'Promotions at JumpCloud' },
  { metric: 'Top 10', label: 'EYantra Robotics finalist' },
];

export const education = {
  degree: 'B.Tech Electronics & Telecommunication',
  cgpa: '9.00',
  institution: 'Vishwakarma Institute of Technology (VIT)',
  period: '2015 – 2019',
  location: 'Pune, India',
};
