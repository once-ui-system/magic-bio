// Profile data - all fields are optional
const content = {
  name: "Selene Yu", // optional
  avatar: "/images/avatar.jpg", // optional
  cover: "/images/cover.jpg", // optional
  bio: "Design Engineer + Creative", // optional
  links: [ // optional array
    // title, description and image are generated based on the link (if available) and not provided explicitly
    {
      title: "Once UI", // optional
      description: "Fully customizable design system for Next.js and Figma.", // optional
      url: "https://once-ui.com", // required if link object exists
      favicon: false
    },
    {
      title: "Magic Portfolio", // optional
      description: "The most awesome portfolio boilerplate built with Once UI.", // optional
      url: "https://magic-portfolio.com", // required if link object exists
      favicon: false
    },
    {
      title: "Design Engineers Club", // optional
      url: "https://designengineers.club", // required if link object exists
      favicon: false
    },
  ],
};

export { content };