import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IntroPage from "../pages/IntroPage";
import SubscriptionPage from "../pages/SubscriptionPage";
import LoginPage from "../pages/LoginPage";
import OtpPage from "../pages/OtpPage";
import AuthPage from "../pages/AuthPage";
import SetAgePage from "../pages/SetAgePage";
import LilOnesPage from "../pages/LilOnesPage";
import CategoryPage from "../pages/CategoryPage";
import LoadingPage from "../pages/LoadingPage";
import ProfilePage from "../pages/ProfilePage";
import Auth from "../auth/Auth";
import MenuPage from "../pages/MenuPage";

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IntroPage />,
    },
    {
      path: "/loading",
      element: <LoadingPage />,
    },
    {
      path: "/subscribe",
      element: <SubscriptionPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/otp",
      element: <OtpPage />,
    },
    {
      path: "/auth",
      element: (
        <Auth>
          <AuthPage />
        </Auth>
      ),
    },
    {
      path: "/setAge",
      element: (
        <Auth>
          <SetAgePage />
        </Auth>
      ),
    },
    {
      path: "/LilOnes",
      element: (
        <Auth>
          <LilOnesPage />
        </Auth>
      ),
    },
    {
      path: "/LilOnes_English",
      element: (
        <Auth>
          <CategoryPage />
        </Auth>
      ),
    },
    {
      path: "/profile",
      element: (
        <Auth>
          <ProfilePage />
        </Auth>
      ),
    },
    {
      path: "/menu",
      element: (
        <Auth>
          <MenuPage />
        </Auth>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routing;
