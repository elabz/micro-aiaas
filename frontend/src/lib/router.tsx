import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <Layout>
          <Outlet />
        </Layout>
      </ClerkProvider>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "sign-up/*",
        element: <SignUpPage />,
      },
      {
        path: "dashboard",
        element: <ProtectedRoute><DashboardPage /></ProtectedRoute>,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
