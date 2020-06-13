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
        icon: `content/assets/logo/logo.jpg`,
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Caveat`,
            variants: [`400`, `700`],
          },
        ],
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
      facebook: 'https://www.facebook.com/Tumbleweed-Hill-104474844612526',
      instagram: 'https://www.instagram.com/tumbleweed.hill',
      twitter: '',
      github: '',
      email: 'mailto:tumbleweedhillstore@gmail.com',
    },
    externalLinks: [{ label: '', link: '' }],
    hasNotifications: false,
  },
};
