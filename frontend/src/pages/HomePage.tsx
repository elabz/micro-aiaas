import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { FaGoogle, FaGithub, FaReddit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = async (provider: string) => {
    try {
      // TODO: Implement actual social login
      console.log(`Logging in with ${provider}`);
      
      // For now, just navigate to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Micro AIaaS
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your Gateway to Advanced AI Model Inference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-400">Easy Integration</CardTitle>
              <CardDescription className="text-gray-400">
                Simple API access to powerful LLM models
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-teal-400">Scalable</CardTitle>
              <CardDescription className="text-gray-400">
                From hobby projects to enterprise solutions
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Secure</CardTitle>
              <CardDescription className="text-gray-400">
                Enterprise-grade security and API key management
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="max-w-md mx-auto bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-center text-neutral-100">Get Started</CardTitle>
            <CardDescription className="text-center text-gray-400">
              Choose your preferred login method
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 hover:bg-gray-700"
              onClick={() => handleLogin("google")}
            >
              <FaGoogle className="text-red-500" />
              Continue with Google
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 hover:bg-gray-700"
              onClick={() => handleLogin("github")}
            >
              <FaGithub />
              Continue with GitHub
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 hover:bg-gray-700"
              onClick={() => handleLogin("reddit")}
            >
              <FaReddit className="text-orange-500" />
              Continue with Reddit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
