import { RouterProvider } from "react-router-dom";
import { router } from "./lib/router";
import { AuthProvider } from "./lib/auth/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
