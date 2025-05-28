import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Copyright, AlertTriangle, Mail } from "lucide-react";

export default function CopyrightPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="gradient-violet-amber-soft py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Copyright className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-gray-900">Copyright Policy</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">Protecting intellectual property and original content</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Shield className="w-6 h-6" />
              Original Content Only
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">All content submitted to NewStoriesAndTales must be original work.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Stories must be your own original creation</li>
              <li>• No plagiarized or copied content allowed</li>
              <li>• You retain full ownership of your submitted stories</li>
              <li>• We respect and protect your intellectual property</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-600">
              <AlertTriangle className="w-6 h-6" />
              Copyright Violations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">We take copyright infringement seriously and will act on valid claims.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Report suspected copyright violations immediately</li>
              <li>• Provide evidence of original ownership when reporting</li>
              <li>• Violating content will be removed promptly</li>
              <li>• Repeat offenders may face account suspension</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="text-center py-8">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-bold text-primary mb-3">Report Copyright Issues</h3>
            <p className="text-gray-700 mb-6">Contact us if you believe your copyright has been infringed</p>
            <a 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Report Copyright Violation
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}