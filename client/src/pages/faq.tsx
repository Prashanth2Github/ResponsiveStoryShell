import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Search, HelpCircle, MessageCircle, Mail } from "lucide-react";

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I create an account?",
        answer: "Click the 'Sign Up' button in the header and fill out the registration form. You'll receive a confirmation email to verify your account."
      },
      {
        question: "Is NewStoriesAndTales free to use?",
        answer: "Yes! Creating an account, reading stories, and submitting your own stories is completely free. We also offer premium features for enhanced functionality."
      },
      {
        question: "What types of stories can I submit?",
        answer: "We welcome all genres including fantasy, sci-fi, romance, mystery, historical fiction, and more. Stories should be original work and appropriate for all audiences."
      }
    ]
  },
  {
    category: "Writing & Submission",
    questions: [
      {
        question: "What is the minimum word count for stories?",
        answer: "Stories should be at least 100 words long. There's no maximum limit, but we recommend keeping stories under 10,000 words for better reader engagement."
      },
      {
        question: "How long does it take for my story to be approved?",
        answer: "Most stories are reviewed and approved within 24-48 hours. Complex submissions or those requiring edits may take longer."
      },
      {
        question: "Can I edit my story after it's published?",
        answer: "Yes, you can edit your published stories at any time from your author dashboard. Readers will see the updated version immediately."
      },
      {
        question: "What happens if my story is rejected?",
        answer: "We'll provide detailed feedback explaining why the story wasn't approved and suggestions for improvement. You can revise and resubmit."
      }
    ]
  },
  {
    category: "Reading & Community",
    questions: [
      {
        question: "How do I find stories I might like?",
        answer: "Browse by genre, use our search function, check out featured stories, or explore recommendations based on your reading history."
      },
      {
        question: "Can I leave comments on stories?",
        answer: "Yes! We encourage constructive feedback. You can leave comments, likes, and even share stories with friends."
      },
      {
        question: "How does the rating system work?",
        answer: "Readers can rate stories from 1-5 stars. The average rating is displayed publicly and helps other readers discover quality content."
      }
    ]
  },
  {
    category: "Account & Profile",
    questions: [
      {
        question: "How do I reset my password?",
        answer: "Click 'Forgot Password' on the login page and enter your email. You'll receive instructions to reset your password."
      },
      {
        question: "Can I change my username?",
        answer: "Usernames can be changed once every 30 days from your profile settings. Choose carefully as frequent changes may confuse your readers."
      },
      {
        question: "How do I delete my account?",
        answer: "Account deletion can be requested from your profile settings. Note that this action is permanent and cannot be undone."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "The website isn't loading properly. What should I do?",
        answer: "Try refreshing the page, clearing your browser cache, or using a different browser. If issues persist, contact our technical support team."
      },
      {
        question: "I'm having trouble uploading my story.",
        answer: "Ensure your story is in a supported format (plain text) and under our file size limits. Try refreshing the page and attempting the upload again."
      },
      {
        question: "How do I report a bug?",
        answer: "Use our contact form and select 'Bug Report' as the category. Include as much detail as possible about what you were doing when the issue occurred."
      }
    ]
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...Array.from(new Set(faqData.map(section => section.category)))];

  const filteredFAQ = faqData.filter(section => {
    if (selectedCategory !== "all" && section.category !== selectedCategory) return false;
    
    if (searchTerm) {
      return section.questions.some(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return true;
  }).map(section => ({
    ...section,
    questions: section.questions.filter(q => 
      searchTerm === "" || 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-violet-amber-soft py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Find answers to common questions about using NewStoriesAndTales
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-lg py-3"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-2 ${
                  selectedCategory === category 
                    ? "gradient-violet-amber text-white" 
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "All Categories" : category}
              </Badge>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        {filteredFAQ.length > 0 ? (
          <div className="space-y-8">
            {filteredFAQ.map((section, sectionIndex) => (
              <Card key={sectionIndex} className="overflow-hidden">
                <div className="bg-primary/5 px-6 py-4 border-b">
                  <h2 className="font-playfair text-2xl font-bold text-primary">{section.category}</h2>
                </div>
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {section.questions.map((qa, index) => (
                      <AccordionItem key={index} value={`${sectionIndex}-${index}`} className="border-b border-gray-200">
                        <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50">
                          <span className="font-body font-semibold text-gray-900">{qa.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">{qa.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-16">
            <CardContent>
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-bold text-gray-600 mb-2">No results found</h3>
              <p className="text-gray-500 mb-6">
                We couldn't find any FAQ entries matching your search. Try different keywords or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="text-primary hover:underline font-body font-semibold"
              >
                Clear search and show all FAQs
              </button>
            </CardContent>
          </Card>
        )}

        {/* Contact Section */}
        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardContent className="text-center py-8">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </a>
              <a 
                href="/community"
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-body font-semibold rounded-lg hover:bg-primary hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Community Help
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}