import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/index.tsx";
import Register from "./pages/register/index.tsx";
import Login from "./pages/login/index.tsx";
import AuthorizationWrapper from "./components/AuthorizationWrapper.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import ProfilePage from "./pages/profile/index.tsx";
import LandingPage from "./pages/LandingPage/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "home",
    element: (
      <AuthorizationWrapper>
        <Home />
      </AuthorizationWrapper>
    ),
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "profile",
    element: (
      <AuthorizationWrapper>
        <ProfilePage />
      </AuthorizationWrapper>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FC2947",
          borderRadius: 5,
          colorPrimaryHover: "#ff0d2f",
          fontSize: 15,
        },
        components: {
          Table: {
            colorBgContainer: "#576c8b",
            colorText: "white",
            colorTextHeading: "white",
            //  Table Border Color
            colorBorderSecondary: "white",
          },
          Form: {
            colorText: "white",
          },
        },
      }}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
