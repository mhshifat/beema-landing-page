import { RouteComponentProps } from "react-router-dom";
import { Home } from "../pages";

export interface IRoute {
  exact: boolean;
  path: string;
  component: React.FC<RouteComponentProps>;
}

export const routes: IRoute[] = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
];
