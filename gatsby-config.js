module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-contentful',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tumbleweed Hill`,
        // icon: `content/assets/logo/logo.svg`,
        short_name: `Tumbleweed Hill`,
        start_url: `/`,
        background_color: `#008080`,
        theme_color: `#008080`,
        display: `standalone`,
        scope: '/',
        crossOrigin: `use-credentials`,
        // theme_color_in_head: false
      },
    },
  ],
  siteMetadata: {
    title: `Tumbleweed Hill`,
    author: `Reuben Ellis`,
    description: `We are crafting amazing things!`,
    greeting: ``,
    copyright: `Copyright © 2020 Reuben Ellis LLC`,
    loginDesc: '',
    newsletterTitle: '',
    isAuthApp: false,
    social: {
      facebook: 'https://www.facebook.com/tumbleweedhill',
      twitter: '',
      github: '',
      email: '',
    },
    externalLinks: [{ label: '', link: '' }],
  },
};
