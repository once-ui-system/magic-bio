const baseURL = "yourlink.bio";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const effects = {
  mask: {
      cursor: false,
      x: 50,
      y: 0,
      radius: 100
  },
  gradient: {
      display: false,
      x: 50,
      y: -25,
      width: 100,
      height: 100,
      tilt: 0,
      colorStart: 'accent-background-strong',
      colorEnd: 'static-transparent',
      opacity: 50
  },
  dots: {
      display: false,
      size: 2,
      color: 'brand-on-background-weak',
      opacity: 20
  },
  lines: {
      display: false,
      color: 'neutral-alpha-weak',
      opacity: 100
  },
  grid: {
      display: false,
      color: 'neutral-alpha-weak',
      opacity: 100,
      width: 'var(--static-space-32)',
      height: 'var(--static-space-32)'
  }
}

// Profile data - all fields are optional
const profile = {
  name: "Selene Yu", // optional
  avatar: "/images/avatar.jpg", // optional
  cover: "/images/cover.jpg", // optional
  bio: "Design Engineer + Creative", // optional
  links: [ // optional array
    // title, description and image are generated based on the link (if available) and not provided explicitly
    {
      title: "Once UI", // optional
      description: "Fully customizable design system for Next.js and Figma", // optional
      url: "https://once-ui.com", // required if link object exists
      // children property can be used to add custom React components
      children: null,
      direction: "column",
    },
    {
      title: "Magic Portfolio", // optional
      description: "The most awesome portfolio boilerplate built with Once UI", // optional
      url: "https://magic-portfolio.com", // required if link object exists
      // children property can be used to add custom React components
      children: null,
    },
    {
      title: "Design Engineers Club", // optional
      url: "https://designengineers.club", // required if link object exists
      // children property can be used to add custom React components
      children: null,
    },
    {
      // Example with minimal fields
      media: "https://www.youtube.com/watch?v=Kv21Vcb28GI",
      children: null,
      direction: "column",
    },
  ],
};

// default metadata
const meta = {
  title: "Selene Yu - Bio",
  description:
    "My name is Selene Yu, I'm a Design Engineer and Creative.",
};

// default open graph data
const og = {
  title: meta.title,
  description: meta.description,
  type: "website",
  image: "/images/cover.jpg"
};

// default schema data
const schema = {
  logo: "",
  type: "person",
  name: profile.name,
  description: meta.description,
  email: "",
};

// social links
const profiles = {
  twitter: "https://www.twitter.com/_onceui",
  linkedin: "https://www.linkedin.com/company/once-ui/",
  discord: "https://discord.com/invite/5EyAQ4eNdS",
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/lorant-one',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/lorant-one',
  },
  {
      name: 'Threads',
      icon: 'threads',
      link: 'https://www.threads.com/@lorant.one',
  },
]

export { baseURL, style, meta, og, schema, social, profiles, effects, profile };
