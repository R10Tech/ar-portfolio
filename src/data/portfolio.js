export const stats = [
  { value: '~3k', label: 'Altus App Users', accent: true },
  { value: '3', label: 'Major Utility Clients' },
  { value: '600+', label: 'lb Payload Verified' },
  { value: '300+', label: 'Devices Deployed' },
];

export const services = [
  {
    title: 'Systems Integration',
    description:
      'Deploy and maintain NMS software on Linux, interfacing with SCADA and IoT across utility grid infrastructure.',
    num: '01',
    accent: 'primary',
  },
  {
    title: 'Embedded Development',
    description:
      'Python firmware on embedded hardware — I2C sensor acquisition, real-time data, and signal validation in the lab.',
    num: '02',
    accent: 'dark',
  },
  {
    title: 'Product Design',
    description:
      'SolidWorks CAD for mechanical design — from concept models through fabrication-ready drawings.',
    num: '03',
    accent: 'light',
  },
  {
    title: 'Electrical Validation',
    description:
      'PLC system verification, oscilloscope debugging, and compliance testing against design specifications.',
    num: '04',
    accent: 'primary',
  },
];

export const projects = [
  {
    id: 'altus',
    title: 'Altus',
    subtitle: 'Founder · iOS & Android App',
    period: 'Apr 2024 – Present',
    description:
      'Founded and shipped a consumer fitness app in Flutter with Supabase — nearly 3,000 organic users. Integrated HealthKit for Apple Watch biometrics and OpenFoodFacts for nutrition logging.',
    link: 'https://altus.fit',
    linkLabel: 'altus.fit',
    logo: '/assets/altus-icon.png',
    logoSmall: '/assets/altus-icon.png',
    logoTile: true,
    tileBg: '#000000',
    tileImage: '/assets/altus-icon.png',
    tileImageFit: 'contain',
    tileImagePadding: '0',
    metrics: [
      { value: '~3k', label: 'Organic Users' },
      { value: '2', label: 'Platforms' },
      { value: '100%', label: 'Free Core Features' },
    ],
    tags: ['Flutter', 'Supabase', 'HealthKit', 'PostgreSQL'],
    highlights: [
      'Training, nutrition, and movement in one app',
      'HealthKit / Apple Watch integration',
      'Marketing site at altus.fit',
    ],
  },
  {
    id: 'kinetiq',
    title: 'Kinetiq Science',
    subtitle: 'Founder · Athletic Injury Prevention AI',
    period: 'Apr 2026 – Present',
    description:
      'Building a real-time computer-vision pipeline for athletic injury prevention — live pose estimation streaming between an iOS app and a self-hosted FastAPI server using YOLO11, ByteTrack, and RTMPose.',
    link: 'https://www.kinetiqscience.fit',
    linkLabel: 'kinetiqscience.fit',
    logo: '/assets/kinetiq-app-icon.png',
    logoSmall: '/assets/kinetiq-app-icon.png',
    logoTile: true,
    tileBg: 'transparent',
    tileImage: '/assets/kinetiq-logo.png',
    tileImageFit: 'contain',
    tileImagePadding: '0',
    tileImageRounded: true,
    metrics: [
      { value: 'Live', label: 'Pose Estimation' },
      { value: 'YOLO11', label: 'Detection Stack' },
      { value: 'FastAPI', label: 'Self-Hosted API' },
    ],
    tags: ['FastAPI', 'PyTorch', 'YOLO11', 'Computer Vision', 'iOS'],
    highlights: [
      'Real-time pose estimation pipeline',
      'iOS app ↔ self-hosted FastAPI server',
      'PyTorch ML stack for movement analysis',
    ],
  },
  {
    id: 'shad',
    title: 'Shad',
    subtitle: 'Founder · Fishing Globe',
    period: 'Sep 2026 – Present',
    description:
      'A fishing product where the globe is the map — zoom into water, see aggregated catch activity, and keep private spots private. You never leave Earth for a pin on someone else’s dock.',
    link: 'https://shad.fish',
    linkLabel: 'shad.fish',
    logo: '/assets/shad-icon.png',
    logoSmall: '/assets/shad-icon.png',
    logoTile: true,
    tileBg: '#ffffff',
    tileImage: '/assets/shad-icon.png',
    tileImageFit: 'contain',
    tileImagePadding: '12%',
    metrics: [
      { value: 'Globe', label: 'First, then the map' },
      { value: 'Private', label: 'Spots stay hidden' },
      { value: 'Mapbox', label: 'One continuous world' },
    ],
    tags: ['Next.js', 'Mapbox', 'Product Design', 'iOS'],
    highlights: [
      'The whole Earth, with inertia — continents first',
      'Lakes appear as you approach',
      'Catch counts by water, never a pin on a dock',
    ],
  },
  {
    id: 'nice-kart',
    featured: true,
    title: 'N-ICE Kart',
    subtitle: 'Capstone · Mechanical Design & Embedded Systems',
    period: 'Aug 2022 – May 2023 · Texas A&M',
    description:
      'Led mechanical design of a full electric go-kart — complete SolidWorks CAD, MIG weldment fabrication, and structural verification under a 600+ lb static payload.',
    image: '/assets/capstone-portrait.png',
    imageAlt: 'Andrei Roman — N-ICE Kart fabrication in workshop',
    phases: [
      {
        num: 'Mechanical',
        title: 'Design & Fabrication',
        items: [
          'Complete CAD model in SolidWorks',
          'MIG weldment of chassis frame',
          'Structural integrity verified at 600+ lb static load',
        ],
      },
      {
        num: 'Embedded',
        title: 'Software & Validation',
        items: [
          'Embedded Python on Raspberry Pi via I2C',
          'Real-time sensor acquisition and operator LCD display',
          'Signal integrity validated with oscilloscope and DMM',
        ],
      },
    ],
    detail:
      'Raspberry Pi running embedded Python collected real-time sensor data over I2C and displayed it on an operator LCD during hardware bring-up.',
    tags: ['SolidWorks', 'Python / I2C', 'Raspberry Pi', 'NI Multisim'],
    specs: [
      { label: 'Payload verified', value: '600+ lbs static' },
      { label: 'Protocol', value: 'I2C' },
      { label: 'Validation', value: 'Oscilloscope & DMM' },
    ],
  },
];

export const carouselProjects = projects.filter((project) => !project.featured);

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'MATLAB', 'C++', 'JavaScript', 'Flutter', 'PostgreSQL'],
  },
  {
    label: 'Technical',
    skills: [
      'SolidWorks (CSWA)',
      'LabVIEW',
      'NI Multisim',
      'I2C / UART / Ethernet',
      'Oscilloscope',
      'Spectrum Analyzer',
      'Function Generator',
    ],
  },
];

export const experience = [
  {
    period: 'Jul 2023 – Apr 2026',
    company: 'Oracle — Austin, TX',
    role: 'Systems Integration Engineer',
    bullets: [
      'Deployed and maintained NMS software interfacing with SCADA and IoT systems across electrical grid infrastructure; clients included First Energy, Dominion, and Southern Company',
      'Patched and validated embedded configuration layers (XML/INC) within Linux-based NMS environments supporting live utility monitoring and control',
      'Authored Python scripts and Oracle SQL pipelines to automate data validation and configuration patching across multi-client deployments',
    ],
  },
  {
    period: 'Jan 2022 – May 2023',
    company: 'Texas A&M University',
    role: 'IT Technician',
    bullets: [
      'Deployed and maintained system images across 300+ networked devices',
      'Provided Tier 1 hardware and network support for 50+ faculty members',
    ],
  },
  {
    period: 'Jul – Aug 2019',
    company: 'AbbVie — Waco, TX',
    role: 'Engineering Intern I',
    bullets: [
      'Validated PLC-controlled HVAC systems against design specifications for regulatory compliance',
      'Identified faulty freezer units and coordinated replacements — saving $10,000 in product waste',
    ],
  },
];

export const contact = {
  email: 'andreiroman09@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andrei-roman-138822188/',
  altus: 'https://altus.fit',
};

export const intent = {
  title: 'Intent',
  paragraphs: [
    'I build things I believe will add value.',
    'I’m a software developer who likes to make products I’m genuinely passionate about — tools people can actually use.',
    'Through product design and the work of shipping, I want to solve the world’s problems one product at a time.',
    'Altus. Kinetiq. Shad. Each one is a chance to leave behind a genuinely useful platform.',
  ],
  attribution: {
    name: 'Andrei Roman',
    role: 'Founder & Developer',
  },
};

export const madeLinks = [
  {
    href: 'https://altus.fit',
    title: 'altus.fit',
    name: 'Altus',
    description: 'Training, nutrition, and movement — one free fitness app',
    logo: '/assets/altus-icon.png',
    markBg: '#000000',
    external: true,
  },
  {
    href: 'https://www.kinetiqscience.fit',
    title: 'kinetiqscience.fit',
    name: 'Kinetiq Science',
    description: 'Real-time computer vision for athletic injury prevention',
    logo: '/assets/kinetiq-app-icon.png',
    external: true,
  },
  {
    href: 'https://shad.fish',
    title: 'shad.fish',
    name: 'Shad',
    description: 'A fishing globe — zoom into water, never someone else’s dock',
    logo: '/assets/shad-icon.png',
    logoFit: 'contain',
    markBg: '#ffffff',
    mark: 'shad',
    external: true,
  },
];

export const connectLinks = [
  {
    href: 'https://www.linkedin.com/in/andrei-roman-138822188/',
    title: 'LinkedIn',
    description: 'Work, products, and the long version',
    mark: 'linkedin',
    external: true,
  },
];
