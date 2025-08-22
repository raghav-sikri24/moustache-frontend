export interface ROUTE_DATA {
  path: string;
  element: React.ReactNode;
  children?: ROUTE_DATA[];
  shouldExcludeFromPublicCheck?: boolean;
}
