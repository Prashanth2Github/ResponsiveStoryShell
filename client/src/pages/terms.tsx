import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, AlertTriangle, Users } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="gradient-violet-amber-soft py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-gray-900">Terms of Service</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">Please read these terms carefully before using our platform</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <FileText className="w-6 h-6" />
              Platform Usage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">By using NewStoriesAndTales, you agree to these terms and conditions.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• You must be 13 years or older to create an account</li>
              <li>• You are responsible for all content you submit</li>
              <li>• You must respect other users and community guidelines</li>
              <li>• You retain ownership of your original stories</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Users className="w-6 h-6" />
              User Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">All users must follow our community standards and guidelines.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Submit only original, non-plagiarized content</li>
              <li>• Respect copyright and intellectual property rights</li>
              <li>• Maintain appropriate and respectful communication</li>
              <li>• Report inappropriate content or behavior</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-600">
              <AlertTriangle className="w-6 h-6" />
              Prohibited Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">The following activities are strictly prohibited on our platform.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Posting inappropriate or offensive content</li>
              <li>• Harassment or bullying of other users</li>
              <li>• Spam or unauthorized promotional content</li>
              <li>• Attempting to hack or disrupt the platform</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="text-center py-8">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-3">Questions About These Terms?</h3>
            <p className="text-gray-700 mb-6">Contact our legal team if you need clarification on any terms</p>
            <a 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Legal Team
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}