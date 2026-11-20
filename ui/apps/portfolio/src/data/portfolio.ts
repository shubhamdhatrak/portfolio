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

export interface ChapterLink {
  label: string;
  href: string;
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
  /** Extra paragraphs so a chapter reads as a product story, not a one-line summary. */
  narrative?: string[];
  impact: string[];
  links?: ChapterLink[];
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
    '~8 years building multi-tenant identity, workflow, and data platforms: access certification through general availability, durable workflow orchestration, and production services on Kubernetes.',
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
    hook: 'Access certification through general availability, plus posture and risk',
    description:
      'Led JumpCloud Access Certification through general availability. IT and security teams run access-review campaigns, assign reviewer chains, record Keep and Revoke decisions, and close revoked access with policy-driven remediation that retries when a downstream change does not land. The shipped product covers application access and user-group membership, and it produces a signed audit export of who reviewed what and what changed.',
    narrative: [
      'A campaign can be scheduled or started on demand. Reviewers work through the entitlements in scope, Keep leaves access in place, and Revoke starts remediation. Remediation is not a fire-and-forget call: failed steps retry so a revoke does not sit half-applied across the directory and the application. The signed export is the record compliance teams keep after the campaign closes.',
      'Contributed to access requests and approval flows on the same identity platform. A grant is requested, routed for approval, and recorded, so standing access is the exception and the trail says who asked, who approved, and what was granted. That is the least-privilege path next to certification: reviews clean up what already exists, requests govern what is about to be added.',
      'Alongside the certification product, building access posture and access risk for human identities and for non-human identities: service accounts, agents, and MCP-based logins. Public certification stays on application access and user-group membership. Posture and risk is where those other identity types are in scope.',
    ],
    impact: [
      'Shipped the campaign lifecycle: scope, reviewer chains, Keep and Revoke, and a closed campaign with an audit export',
      'Remediation with retry so a Revoke is reconciled, not left partial when a downstream write fails',
      'Signed audit exports for application access and user-group membership reviews',
      'Access-request approval flows so new grants stay least-privilege and auditable',
      'Access posture and access risk across human identities and non-human identities (service accounts, agents, MCP logins)',
      'Multi-tenant APIs on the JumpCloud identity platform, isolated per customer',
    ],
    links: [
      {
        label: 'JumpCloud Access Certification',
        href: 'https://jumpcloud.com/platform/access-certification',
      },
      {
        label: 'Access request approval flows',
        href: 'https://jumpcloud.com/blog/building-the-perfect-access-request-approval-flow-in-jumpcloud',
      },
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
    hook: 'No-code automation: trigger/action DSL, Temporal, Kafka, Vue.js builder',
    description:
      'Worked across teams to design the core engine of JumpCloud’s no-code and low-code workflow builder, for external customers and for internal users. The product is a trigger and action DSL: events start a run, conditional branches choose a path, and actions call JumpCloud or a third party. Execution is durable. A failed downstream action retries instead of dropping the run.',
    narrative: [
      'Definitions live behind a workflow API that validates the graph before anything is scheduled. Temporal owns the run: each step is a durable activity, so a deploy or a process restart does not lose in-flight work. Kafka carries the events that start runs and the signals that move them. PostgreSQL stores definitions and the state operators need to see what a workflow did.',
      'Designed the Vue.js builder with UX and Product so an admin can author the same graph the API accepts, without writing the DSL by hand. Service-account authentication lets those workflows be saved in the product and run unattended, which is how IT automation actually gets used: a joiner, a group change, or a ticket starts work that does not wait for a person to click Run.',
      'The same shape shows up in identity lifecycle work. Certification remediation and access-request fulfillment are workflows with retries and an audit trail. This engine is the general version of that: customer-defined triggers, branches, and actions, executed per tenant at production scale.',
    ],
    impact: [
      'Trigger, action, and if/else DSL with validation before a run is admitted',
      'Temporal durable execution and Kafka events, with retry when a downstream action fails',
      'Vue.js builder for self-service authoring, plus an API for programmatic definitions',
      'Service-account authentication so workflows run unattended after they are authored',
      'Third-party actions beside first-party JumpCloud actions, in one graph',
      'Multi-tenant execution: one engine, isolated definitions and runs per customer',
    ],
    links: [
      {
        label: 'JumpCloud IT automation and orchestration',
        href: 'https://jumpcloud.com/platform/it-automation-orchestration',
      },
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
    hook: 'From federated Trino queries to a search API that returns in seconds',
    description:
      'Replaced federated Trino queries, which fanned out across several databases for every report, with a centralized PostgreSQL store, ingestion pipelines, and a search API. Report generation went from about 30 minutes to somewhere between 1 and 30 seconds, depending on the report. Customers used these reports to see directory, device, and access data. Accuracy was part of the migration, not a follow-up.',
    narrative: [
      'The old path paid a federation tax on every run: plan a query, reach into multiple systems, and assemble a result the UI could render. That does not hold up once reports are part of an admin’s daily workflow. The new path ingests into a model shaped for the questions the product actually asks, with views and indexes aimed at those access patterns.',
      'The search API exposes that model through a small DSL rather than raw SQL from the client. Callers describe filters, scope, and the report they want. The service compiles that into index-friendly queries. That boundary is what made the latency predictable and what let us change storage without rewriting every report.',
      'Partnered directly with customers on what “correct” meant for their data: which identities belong in a count, how a device state should roll up, and which fields a compliance export has to match. The speedup only mattered because the numbers still agreed with the systems they already trusted.',
    ],
    impact: [
      'Report generation from about 30 minutes down to 1–30 seconds',
      'Ingestion pipelines and a centralized PostgreSQL model in place of cross-database Trino queries',
      'Search API DSL so reports are compiled queries, not ad hoc SQL from the client',
      'Index and model tuning around the filters admins actually run',
      'Customer working sessions on accuracy for directory, device, and access reports',
    ],
    links: [
      {
        label: 'JumpCloud Reports',
        href: 'https://jumpcloud.com/support/jumpcloud-reports',
      },
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
    hook: 'Greenfield Google EMM service, from POC to 100K+ devices',
    description:
      'Built the Android enterprise mobility service from scratch and took it from a proof of concept to a production part of JumpCloud device management. The service integrates Google EMM so an admin can enroll devices, apply policy, and manage apps without a separate Android console. It reached more than 100,000 managed devices.',
    narrative: [
      'Enrollment is not one mode. BYOD, fully managed (company-owned), and work profile each imply a different boundary between personal data and company control. Policies are zero-trust in the sense that a device gets the posture and the apps it is allowed, and that decision is re-evaluated rather than granted once at enroll time. The API surface had to make those modes explicit so the admin console and the agent did not invent their own rules.',
      'The service is Go, on the same Kubernetes platform as the rest of device management, with gRPC between internal callers. The deploy path moved from an earlier HashiCorp-based flow to GitOps with Argo CD: canary and blue-green releases, Terraform for the surrounding infrastructure, and tenant isolation so one customer’s device fleet cannot see another’s.',
      'Greenfield here meant owning the discovery, the integration with Google’s EMM APIs, the policy model, and the production rollout. It was the first of these JumpCloud systems to go from an empty repository to a fleet customers depend on.',
    ],
    impact: [
      '100K+ managed Android devices in production',
      'Google EMM integration: enrollment, policy, and app management inside JumpCloud',
      'Zero-trust policies for BYOD, fully managed, and work profile',
      'Go service with gRPC, shipped on Kubernetes',
      'GitOps with Argo CD, Terraform, and canary or blue-green releases',
      'Tenant isolation for device fleets on a multi-tenant platform',
    ],
    links: [
      {
        label: 'JumpCloud Android EMM',
        href: 'https://jumpcloud.com/blog/jumpcloud-android-emm',
      },
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
    hook: 'CSP software management, Chocolatey, and a private app repository',
    description:
      'Extended JumpCloud Windows device management so software install and update is a policy, not a script an admin hopes will run. The work sits on Windows configuration service providers: the device reports state, the service decides the desired apps, and the MDM channel converges the device.',
    narrative: [
      'Three sources of software had to land in that one model. Microsoft’s Software App Management CSP covers the platform-native path. Chocolatey covers the long tail of third-party packages IT teams already use. A private app repository covers the case neither of those can: a customer uploads a proprietary installer, and only that tenant’s devices can receive it.',
      'The hard part is the mix. A device might have a store app, a Chocolatey package, and an internal build, each with its own version and failure mode. The service tracks desired state per tenant, pushes the right payload, and has to tolerate a device that is offline, mid-upgrade, or missing a dependency. That is the same reconciliation problem as access remediation, applied to Windows software.',
    ],
    impact: [
      'Software App Management CSP so install state is desired state, not a one-shot command',
      'Chocolatey integration for third-party packages IT teams already standardize on',
      'Private app repository for tenant-uploaded proprietary installers',
      'Per-tenant package scope so one customer’s binaries never reach another fleet',
      'Go services on Kubernetes, beside the rest of Windows MDM',
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
    hook: 'Enterprise IAM: SCIM, OAuth 2.0, SAML, and joiner-mover-leaver',
    description:
      'Co-architected the identity platform that ZS applications and client deployments authenticated against. Microservices in Java and .NET implemented the protocols those apps already expected, and a provisioning layer automated joiner, mover, and leaver access changes instead of leaving them as tickets. Platform operating cost came down by up to 40 percent.',
    narrative: [
      'The protocol surface was SCIM for provisioning, OAuth 2.0 and OpenID Connect for modern login, SAML and WS-Federation for the apps that still spoke federation, and LDAP where a directory bind was the integration. The goal was one platform those protocols terminated on, with tenant-aware configuration, rather than a login stack copied into every product. Java services used JAX-RS and Spring. .NET services covered the SOAP and REST edges that existing clients already called.',
      'Application teams did not integrate by reading a wiki. Java and .NET SDKs wrapped token acquisition, session handling, and the provisioning calls. Joiner-mover-leaver changes went out over REST so a hire, a transfer, or a departure updated entitlements without an operator replaying the same steps. Client-licensing tooling sat on the same platform, because who is allowed in and what they are licensed for were drifting apart.',
      'A later authentication redesign moved 10,000+ users onto OAuth 2.0 with biometric login (fingerprint and face). A related data service on the platform got about 22 percent faster after the query and service changes that came with that work. Mentored developers and interns, and scoped MVPs with product managers, including vendor integrations with Okta and Auth0 where those systems sat at the edge.',
    ],
    impact: [
      'Up to 40% reduction in IAM platform operating cost',
      'SCIM provisioning with OAuth 2.0, SAML, WS-Federation, and LDAP on one platform',
      'Joiner-mover-leaver automation over REST, so access follows the person',
      'Java and .NET SDKs so product teams integrated without reimplementing the protocols',
      'OAuth 2.0 and biometric login redesign for 10,000+ users',
      'About 22% faster data service after the redesign',
      'Microservices in Java (JAX-RS, Spring) and C# / .NET',
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
    hook: 'Android products, sales analytics, and field tracking before full-time roles',
    description:
      'Internship work before ZS, across mobile and analytics. The through-line was shipping something a non-engineer could use: an alert when a camera saw a person, a dashboard a sales lead would actually open, and a location signal that still worked when GPS was off.',
    narrative: [
      'At Stomatobot, built an Android CCTV app that watched a camera feed and raised an alert on face or movement detection, so a feed did not have to be watched continuously. At Data Science Technologies, built R Shiny sales dashboards with D3.js and Highcharts so the metrics were charts in the browser, not a spreadsheet export. On the same engagement, an Android feature estimated whether a sales rep was near an account using cell-tower data when GPS was unavailable.',
      'Also a top-10 Indian finalist in the e-Yantra robotics competition (IIT Bombay, 2018). That work is early, and it is listed because it is where the habit of taking a system from a brief to a demo started.',
    ],
    impact: [
      'Android CCTV app with face and movement alerts',
      'R Shiny sales dashboards rendered with D3.js and Highcharts',
      'Android field tracking from cell-tower data when GPS was off',
      'e-Yantra robotics, top 10 Indian finalist, IIT Bombay (2018)',
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
    skills: [
      'Access Certification',
      'Access Reviews',
      'Joiner-Mover-Leaver',
      'OAuth 2.0',
      'SAML',
      'SCIM',
      'LDAP',
      'Zero Trust',
      'Least Privilege',
    ],
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
