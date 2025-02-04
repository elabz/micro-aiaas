import { Link } from "react-router-dom";
import { useAuth, SignInButton, UserButton } from "@clerk/clerk-react";

export const TopNav = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold">Micro AIaaS</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
                  Sign In
                </button>
              </SignInButton>
            ) : (
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
