export interface FlavorNode {
  name: string;
  heatLevel: number;
  description: string;
  type: string;
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

export interface FlavorsPageProps {
  data: {
    flavors: {
      nodes: FlavorNode[];
    };
  };
}
