import {
  createBrowserRouter,
  RouterProvider,
  Link as RouterLink,
} from "react-router-dom";
import "./App.css";
import Root from "./Pages/Root/Root";
import Error from "./Pages/Error/Error";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallery/Gallery";
import Sale from "./Pages/Sale/Sale";
import Plans from "./Pages/Plans/Plans";
import Contact from "./Pages/Contact/Contact";
import Project from "./Pages/Project/Project";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return (
    <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
  );
});

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "projects/:projectName",
        element: <Project />,
      },
      {
        path: "sale",
        element: <Sale />,
      },
      {
        path: "plans",
        elment: <Plans />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
