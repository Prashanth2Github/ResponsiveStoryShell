import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, XCircle, BookOpen, Users, Heart } from "lucide-react";

export default function Guidelines() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="gradient-violet-amber-soft py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-gray-900">Writing Guidelines</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">Create amazing stories that engage and inspire our community</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <CheckCircle className="w-6 h-6" />
              What We Love to See
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Heart className="w-4 h-4 text-green-500" />
                  Original Content
                </h4>
                <p className="text-gray-600 text-sm">Stories that are entirely your own creation</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Heart className="w-4 h-4 text-green-500" />
                  Engaging Openings
                </h4>
                <p className="text-gray-600 text-sm">Hook readers from the very first paragraph</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Heart className="w-4 h-4 text-green-500" />
                  Well-Developed Characters
                </h4>
                <p className="text-gray-600 text-sm">Characters with depth and believable motivations</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Heart className="w-4 h-4 text-green-500" />
                  Clear Writing
                </h4>
                <p className="text-gray-600 text-sm">Proper grammar, spelling, and formatting</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-600">
              <AlertCircle className="w-6 h-6" />
              Content Requirements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Length Guidelines</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Minimum: 100 words</li>
                  <li>• Sweet spot: 1,000 - 5,000 words</li>
                  <li>• Maximum: 50,000 words (for novels)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Appropriate Content</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Suitable for general audiences</li>
                  <li>• No explicit violence or adult content</li>
                  <li>• Respectful of all communities</li>
                  <li>• No hate speech or discrimination</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <XCircle className="w-6 h-6" />
              What's Not Allowed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Badge variant="destructive" className="mb-2">Prohibited Content</Badge>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Plagiarized or copied content</li>
                  <li>• Excessive profanity</li>
                  <li>• Graphic violence or gore</li>
                  <li>• Adult/explicit content</li>
                </ul>
              </div>
              <div className="space-y-2">
                <Badge variant="destructive" className="mb-2">Technical Issues</Badge>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Spam or repetitive content</li>
                  <li>• Stories with excessive typos</li>
                  <li>• Incomplete or unfinished stories</li>
                  <li>• Content that violates copyright</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Users className="w-6 h-6" />
              Community Standards
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our community thrives on respect, creativity, and constructive feedback. When participating in our platform:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Provide thoughtful, constructive feedback on other stories</li>
                <li>• Respect diverse perspectives and writing styles</li>
                <li>• Support fellow writers with encouragement</li>
                <li>• Report inappropriate content to moderators</li>
                <li>• Be patient with new writers and offer helpful suggestions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="text-center py-8">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-bold text-primary mb-3">Ready to Share Your Story?</h3>
            <p className="text-gray-700 mb-6">Follow these guidelines and start sharing your creativity with our community</p>
            <a 
              href="/submit"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Submit Your Story
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}