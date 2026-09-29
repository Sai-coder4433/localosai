export type RoutePath = '/' | '/privacy' | '/terms' | '/contact' | '/login' | '/signup';

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  tag?: string;
}

export interface NavDropdown {
  label: string;
  items: NavItem[];
}
