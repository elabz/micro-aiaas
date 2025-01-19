import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
