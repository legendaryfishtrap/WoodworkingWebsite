import {
  createBrowserRouter,
  RouterProvider,
  Link as RouterLink,
} from "react-router-dom";
import "./App.css";
import Root from "./Pages/Root/Root";
import Error from "./Pages/Error/Error";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import Contact from "./Pages/Contact/Contact";
import Project, { loader as projectLoader } from "./Pages/Project/Project";
import Projects from "./Pages/Project/Projects";
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
        path: "/",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:projectName",
        element: <Project />,
        loader: projectLoader,
      },
      {
        path: "shop",
        element: <Shop />,
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
