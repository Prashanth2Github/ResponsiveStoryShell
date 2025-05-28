import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, MessageCircle, Mail, Phone, Bug, BookOpen, Users, Settings } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="gradient-violet-amber-soft py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-gray-900">Support Center</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">Get help with your NewStoriesAndTales experience</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Bug className="w-6 h-6" />
                Technical Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Having trouble with the website or app functionality?</p>
              <Button className="w-full" asChild>
                <a href="/contact">Report Technical Issue</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <BookOpen className="w-6 h-6" />
                Writing Help
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Need assistance with story submission or writing guidelines?</p>
              <Button className="w-full" asChild>
                <a href="/guidelines">View Guidelines</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Settings className="w-6 h-6" />
                Account Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Issues with your account, profile, or login?</p>
              <Button className="w-full" asChild>
                <a href="/contact">Get Account Help</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="py-8">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-bold text-primary mb-3">Need Direct Support?</h3>
              <p className="text-gray-700 mb-6">Contact our support team directly for immediate assistance</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="gradient-violet-amber text-white" asChild>
                  <a href="/contact">Contact Support</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/faq">Check FAQ</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}