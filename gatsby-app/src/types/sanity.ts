export interface ImageWithAlt {
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  alt: string;
}

export interface Flavor {
  _id: string;
  name: string;
  heatLevel: number;
  description: string;
  type: "wet" | "dry";
  tags?: string[];
  slug: {
    current: string;
  };
  icon?: {
    asset: {
      url: string;
    };
  };
}

export interface Category {
  _id: string;
  title: string;
  description?: string;
}

export interface MenuItem {
  _id: string;
  title: string;
  slug?: { current: string };
  description?: string;
  category?: Category;
  flavors?: Flavor[];
  price: number;
  image?: ImageWithAlt;
}

export interface HomePage {
  heroTitle?: string;
  heroSubtitle?: string;
  mascotImage?: ImageWithAlt;
  specials?: MenuItem[];
}
