module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://lucas.brandstaettter.tech/`,
    // Your Name
    name: 'Lucas Brandstaetter',
    // Main Site Title
    title: `Lucas Brandstaetter | IT/OT Security Export`,
    // Description that goes under your name in main bio
    description: `OT Security expertise from Austria.`,
    // Optional: Twitter account handle
    author: `@roang_zero1`,
    // Optional: Github account URL
    github: `https://github.com/Roang-zero1`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/lucasbrandstaetter/`,
    // Optional: Mastodon account URL
    mastodon: `https://cyberplace.social/@Roang`,
    // Optional: Matrix account URL
    matrix: `https://matrix.to/#/@roang:brandstaetter.tech`,
    // Content of the About Me section
    about: `I'm a seasoned IT/OT security expert with 7 years in the field. My days are dedicated to fortifying industrial landscapes. When off-duty, I code for open source projects, go out for rides on my bike and find creative escape in my camera.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Zero Downtime',
        description:
          'A awareness board game developed to increase security awareness in IT and OT organizations',
        link: 'https://limessecurity.com/en/academy/awt-103/',
      },
      {
        name: 'CCCV Hub',
        description:
          'Centralized HUB for CCCV events',
        link: 'https://git.cccv.de/hub/hub',
      },
      {
        name: 'Dotfiles',
        description:
          'My personal dotfiles',
        link: 'https://github.com/Roang-zero1/dotfiles',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Limes Security GmbH',
        description: 'IT/OT Security Specialist, Oct 2016 - present',
        link: 'https://limessecurity.com/',
      },
      {
        name: 'Fabasoft',
        description: 'Technical Support Specialist, Apr 2014 - Aug 2016',
        link: 'https://www.fabasoft.com/',
      },
      {
        name: 'x-tention Informationstechnologie GmbH',
        description: 'Computer systems designer and analyst, Jun 2009 - Aug 2013',
        link: 'https://x-tention.com/',
      },
      {
        name: 'Siemens VAI Metals Technologies GmbH & Co',
        description: 'Computer systems designer, Nov 2007 - May 2009',
        link: 'http://www.primetals.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'IT/OT Security',
        description:
        '7 years experience in supporting OT environments in their IT Security journeys'
      },
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Python, Node.js, Django',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), Github Actions (CI / CD)',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
