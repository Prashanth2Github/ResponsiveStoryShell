import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, MessageCircle, BookOpen } from "lucide-react";

export default function Community() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="gradient-violet-amber-soft py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-gray-900">Community Guidelines</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">Building a positive and supportive community for all storytellers</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Heart className="w-6 h-6" />
              Respect and Kindness
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">Treat all community members with respect and kindness.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Be constructive in your feedback and criticism</li>
              <li>• Respect diverse perspectives and writing styles</li>
              <li>• Support new writers with encouragement</li>
              <li>• Avoid personal attacks or harassment</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <MessageCircle className="w-6 h-6" />
              Constructive Communication
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">Help foster meaningful discussions and feedback.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Provide specific, actionable feedback</li>
              <li>• Ask questions to better understand stories</li>
              <li>• Share your genuine thoughts and reactions</li>
              <li>• Be patient with writers of all skill levels</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <BookOpen className="w-6 h-6" />
              Content Standards
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">Maintain high standards for all content shared in our community.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Keep content appropriate for all audiences</li>
              <li>• Avoid spam or repetitive posts</li>
              <li>• Respect copyright and original work</li>
              <li>• Report inappropriate content when you see it</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="text-center py-8">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-3">Join Our Community</h3>
            <p className="text-gray-700 mb-6">Help us build a welcoming space for all storytellers</p>
            <a 
              href="/submit"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Sharing Stories
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}