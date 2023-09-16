import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Home from "./pages/Home/Home";
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "styled-components";
import theme from "./theme/Theme";
import { GlobalStyle } from "./theme/GlobalStyle.styled";
import useLocalStorage from "./hooks/useLocalStorage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Listings from "./pages/Listings/Listings";
import Details from "./pages/Details/Details";

const router = createBrowserRouter([
  {
    Component: HomeLayout,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, path: "/", Component: Home },
      { path: "ads/:state/:city", Component: Listings },
      { path: "ads/:state/:city/:id", Component: Details },
      { path: "auth/login", Component: Login },
      {
        path: "auth/register",
        Component: Register,
      },
    ],
  },
]);

function App() {
  const [currentTheme] = useLocalStorage("theme", "light");
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
