import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="gradient-violet-amber-soft py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">Your privacy and data security are our top priorities</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose max-w-none space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Eye className="w-6 h-6" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">We collect information you provide directly to us, such as when you create an account, submit stories, or contact us for support.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Account information (username, email, profile details)</li>
                <li>• Content you create (stories, comments, reviews)</li>
                <li>• Communication preferences and settings</li>
                <li>• Technical information for site functionality</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Lock className="w-6 h-6" />
                How We Protect Your Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">We implement industry-standard security measures to protect your personal information.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Encrypted data transmission and storage</li>
                <li>• Regular security audits and updates</li>
                <li>• Limited access to personal information</li>
                <li>• Secure user authentication systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Users className="w-6 h-6" />
                Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">You have control over your personal information and how it's used on our platform.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Access and update your account information</li>
                <li>• Delete your stories and account data</li>
                <li>• Control privacy settings and visibility</li>
                <li>• Opt out of marketing communications</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="text-center py-8">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-3">Questions About Privacy?</h3>
              <p className="text-gray-700 mb-6">Contact us if you have any questions about our privacy practices</p>
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Us
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}