import { Root, ErrorPage } from "./";

import { ToggleDemo } from "@/components/Toggle/toggle-demo";
import { Tab } from "@/components/Tab";

export const pathList = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        displayName: "Home",
        element: <h1>Home</h1>,
      },
      {
        path: "/toggle",
        displayName: "Toggle",
        element: <ToggleDemo />,
      },
      {
        path: "/tabs",
        displayName: "Tabs",
        element: <Tab />,
      },
    ],
  },
];
