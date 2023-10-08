import React, { useEffect } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Home from "./pages/Home/Home";
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "styled-components";
import theme from "./theme/Theme";
import { GlobalStyle } from "./theme/GlobalStyle.styled";
import useLocalStorage from "./hooks/useLocalStorage";
import AdListings from "./pages/AdListings/AdListings";
import Details from "./pages/AdDetail/AdDetail";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import AuthLayout from "./Layout/AuthLayout";
import Account from "./pages/Account/Account";
import Nav from "./pages/Account/Nav";
import { useDispatch } from "react-redux";
import { getUser } from "./feature/user/UserActions";
import CreateAds from "./pages/CreateAds/CreateAds";
import Deposit from "./pages/Deposit/Deposit";
import Expenses from "./pages/Expenses/Expenses";

const router = createBrowserRouter([
  {
    Component: HomeLayout,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, path: "/", Component: Home },
      { path: "ads/:country/:state/:city", Component: AdListings },
      { path: "ads/:country/:state/:city/:id", Component: Details },
    ],
  },
  {
    Component: () => (
      <>
        <Nav />
        <Outlet />
      </>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, path: "/account", Component: Account },
      { path: "create-ads/", Component: CreateAds },
      { path: "buy-credits/", Component: Deposit },
      { path: "expenses/", Component: Expenses },
    ],
  },
  {
    Component: AuthLayout,
    errorElement: <ErrorBoundary />,
    children: [
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({}));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
