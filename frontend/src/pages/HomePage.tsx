import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import Layout from "../components/layout/Layout";

export const HomePage = () => {

  return (
    <Layout>
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
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
