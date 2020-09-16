export interface RouteItem {
  component: any;
  path: string;
  name: string;
  exact?: boolean,
  props?: {
    [key: string]: any,
  };
}
