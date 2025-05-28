import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Heart, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & Editor-in-Chief",
    bio: "Former literary magazine editor with 15 years of experience in publishing and storytelling.",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Community Manager",
    bio: "Passionate about connecting writers and fostering creative communities worldwide.",
    initials: "MC"
  },
  {
    name: "Elena Rodriguez",
    role: "Content Curator",
    bio: "Award-winning author and writing mentor dedicated to discovering new voices.",
    initials: "ER"
  },
  {
    name: "David Park",
    role: "Technical Director",
    bio: "Technology enthusiast building platforms that empower creative expression.",
    initials: "DP"
  }
];

const stats = [
  { icon: BookOpen, value: "10,000+", label: "Stories Published" },
  { icon: Users, value: "15,000+", label: "Active Writers" },
  { icon: Heart, value: "500K+", label: "Story Likes" },
  { icon: Globe, value: "120+", label: "Countries" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-violet-amber-soft py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            About NewStoriesAndTales
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
            We believe every story deserves to be told, and every voice deserves to be heard. 
            Our platform connects storytellers from around the world in a celebration of creativity and imagination.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed drop-cap">
                <p>
                  Founded in 2023, NewStoriesAndTales was born from a simple belief: storytelling is fundamental to human connection. 
                  In a world increasingly divided, stories have the power to bridge differences, spark empathy, and remind us of our shared humanity.
                </p>
                <p>
                  We've created a platform where both emerging and established writers can share their work, connect with readers, 
                  and build meaningful relationships within a supportive creative community.
                </p>
                <p>
                  Our commitment extends beyond just hosting stories. We actively nurture talent through mentorship programs, 
                  writing workshops, and collaborative projects that push the boundaries of digital storytelling.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="w-24 h-24 text-primary mx-auto mb-4" />
                  <h3 className="font-playfair text-2xl font-bold text-primary mb-2">Stories Connect Us</h3>
                  <p className="text-gray-600">Building bridges through storytelling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 paper-texture">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Our Growing Community
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="font-playfair text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="font-body text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">🌟</div>
              <h3 className="font-playfair text-xl font-bold text-center mb-3">Quality</h3>
              <p className="text-gray-600 text-center">
                We maintain high editorial standards while celebrating diverse voices and perspectives.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">🤝</div>
              <h3 className="font-playfair text-xl font-bold text-center mb-3">Community</h3>
              <p className="text-gray-600 text-center">
                Building supportive relationships between writers and readers across all backgrounds.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">🎨</div>
              <h3 className="font-playfair text-xl font-bold text-center mb-3">Creativity</h3>
              <p className="text-gray-600 text-center">
                Encouraging innovative storytelling and experimental narrative forms.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 paper-texture">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="gradient-violet-amber text-white text-lg font-bold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-playfair text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <Badge className="mb-3" variant="secondary">{member.role}</Badge>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
            Join Our Story
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Whether you're a seasoned writer or just beginning your creative journey, 
            there's a place for you in our community. Share your stories, discover new voices, 
            and be part of something bigger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/submit" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Writing
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-body font-semibold rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}