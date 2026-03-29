// gitprofile.config.ts
const CONFIG = {
  github: {
    username: 'Yahir5l', 
  },
  base: '/', 
  projects: {
    github: {
      display: true,
      header: 'Proyectos de GitHub',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
    },
    external: {
      header: 'Mis Proyectos y Diseños',
      projects: [
        {
          title: 'Sistema de Gestión de Inventario',
          description:
            'Desarrollado en Java con Maven. Incluye lógica de negocio, manejo de persistencia y pruebas unitarias (JUnit) para asegurar la integridad de los datos.',
          imageUrl: 'https://img.freepik.com/free-vector/software-tester-checking-system-quality_23-2148501181.jpg',
          link: 'https://github.com/TU-USUARIO-AQUI', // Pon el link a tu repo de Java
        },
        {
          title: 'Diseño UI/UX en Figma',
          description:
            'Prototipos interactivos y diseño de interfaces modernos. Enfoque en la experiencia de usuario y sistemas de componentes.',
          imageUrl: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg',
          link: 'PEGA-AQUI-TU-LINK-DE-FIGMA',
        },
        {
          title: 'Live Coding Music - Strudel',
          description:
            'Creación de ritmos Techno y Deep House mediante algoritmos en JavaScript. Exploración de la programación aplicada al arte sonoro.',
          imageUrl: 'https://strudel.cc/logo.png',
          link: 'https://strudel.cc/',
        },
      ],
    },
  },
  seo: {
    title: 'Portafolio Profesional',
    description: 'Estudiante de Ingeniería y Desarrollador Java',
  },
  social: {
    facebook: 'https://www.facebook.com/alberto.renterialuna.1/?locale=es_LA',
    instagram: 'https://www.instagram.com/yahir_5l/',
    github: 'Yahir5l',
    email: 'albertorenteria05052005', 
  },
  resume: {
    fileUrl: '', // Link a tu CV en PDF si lo tienes
  },
  skills: [
    'Java',
    'Maven',
    'Unit Testing (JUnit)',
    'UML Modeling',
    'Systems Analysis',
    'Circuit Analysis',
    'Electrical Engineering',
    'Data Curation',
    'Git',
    'Docker',
    'Figma (UI/UX)',
    'Strudel (Live Coding)',
  ],
  experiences: [
    {
      company: 'Universidad',
      position: 'Estudiante de Ingeniería',
      from: '2023',
      to: 'Presente',
    },
  ],
  certifications: [
    {
      name: 'Certificación en Gestión Web',
      body: 'Administración y despliegue de plataformas digitales.',
      year: '2026',
    },
    {
      name: 'Testing y QA Foundation',
      body: 'Aseguramiento de la calidad de software.',
      year: '2026',
    },
    {
      name: 'Curación de Datos',
      body: 'Organización de activos de información técnica.',
      year: '2026',
    },
  ],
  educations: [
    {
      institution: 'Univerisdad de Sonora',
      degree: 'Ingeniería en Sistemas / Eléctrica',
      from: '2023',
      to: 'Presente',
    },
  ],
  themeConfig: {
    defaultTheme: 'nord', 
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      ],
  },
  footer: `Hecho con <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a>`,
  enablePWA: true,
};

export default CONFIG;
