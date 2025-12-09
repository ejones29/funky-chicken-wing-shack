// Fragments for Sanity queries
export const imageFields = `
  image {
    asset->{
      _id,
      url
    },
    alt
  }
`;

export const flavorFields = `
  _id,
  name,
  type,
  heat,
  description,
  borderColor,
  ${imageFields}
`;

export const menuItemFields = `
  _id,
  title,
  "slug": slug.current,
  description,
  category->{
    _id,
    title
  },
  priceOptions[]{
    label,
    price
  },
  flavors[]->{
    ${flavorFields}
  },
  ${imageFields}
`;

// Full GROQ query for fetching all menu items
export const GET_FLAVORS = `
*[_type == "flavor"] | order(heat asc) {
  ${flavorFields}
}
`;

export const GET_MENU_ITEMS = `
*[_type == "menuItem"] | order(title asc) {
  ${menuItemFields}
}
`;

export const GET_CATEGORIES = `
*[_type == "category"] | order(title asc) {
  _id,
  title,
  description
}
`;

export const GET_HOME_PAGE = `
*[_type == "homePage"][0]{
  heroTitle,
  heroSubtitle,
  specials[]->{
    ${menuItemFields}
  },
  mascotImage {
    asset->{
      _id,
      url
    },
    alt
  }
}
`;

export const GET_SITE_SETTINGS = `
*[_type == "siteSettings"][0]{
  footerText,
  logo {
    asset->{
      _id,
      url
    },
    alt
  },
  navigation[]{
    title,
    link
  }
}
`;
