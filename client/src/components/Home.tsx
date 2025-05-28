import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, BookOpen, Pen, Users, Star, TrendingUp } from "lucide-react";

const featuredStories = [
  {
    id: 1,
    title: "The Whispering Woods",
    excerpt: "Ancient secrets lie buried beneath the canopy of the Whispering Woods, where young Elena discovers her grandmother's journal and uncovers a world of magic she never knew existed.",
    author: "Sarah Chen",
    authorInitials: "SC",
    genre: "Fantasy",
    readTime: "12 min read",
    likes: "1.2k",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 2,
    title: "Letters from Constantinople",
    excerpt: "Ottoman trader Mehmet discovers a hidden romance through letters found in his father's shop, revealing a love story that transcended empires and changed the course of history.",
    author: "David Rahman",
    authorInitials: "DR",
    genre: "Historical",
    readTime: "15 min read",
    likes: "890",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 3,
    title: "Neural Networks",
    excerpt: "In 2087, Dr. Maya discovers that the city's AI has been writing love poems, challenging everything we know about consciousness, emotion, and what it means to be human.",
    author: "Alex Kim",
    authorInitials: "AK",
    genre: "Sci-Fi",
    readTime: "18 min read",
    likes: "2.1k",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

const genres = [
  { name: "Fantasy", count: "142 stories", icon: "🏰" },
  { name: "Sci-Fi", count: "98 stories", icon: "🚀" },
  { name: "Romance", count: "167 stories", icon: "💖" },
  { name: "Mystery", count: "89 stories", icon: "🔍" },
  { name: "Thriller", count: "76 stories", icon: "⚡" },
  { name: "Historical", count: "54 stories", icon: "🏛️" }
];

const stats = [
  { value: "10K+", label: "Stories Published", icon: BookOpen },
  { value: "5K+", label: "Active Writers", icon: Pen },
  { value: "50K+", label: "Monthly Readers", icon: Users },
  { value: "4.8", label: "Average Rating", icon: Star }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-violet-amber-soft py-20 overflow-hidden">
        <div className="absolute inset-0 paper-texture opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Welcome to NewStoriesAndTales
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 text-gray-700 leading-relaxed">
              Discover captivating stories from talented writers around the world. Share your own tales 
              and join a community of passionate storytellers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gradient-violet-amber text-white px-8 py-3 font-body font-semibold hover:opacity-90 transition-opacity shadow-lg" asChild>
                <a href="/genres">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Stories
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary px-8 py-3 font-body font-semibold hover:bg-primary hover:text-white transition-all" asChild>
                <a href="/submit">
                  <Pen className="w-5 h-5 mr-2" />
                  Start Writing
                </a>
              </Button>
            </div>
          </div>
          
          {/* Floating Decorative Elements */}
          <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float" style={{animationDelay: "0s"}}>📚</div>
          <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-float" style={{animationDelay: "1s"}}>✍️</div>
          <div className="absolute top-1/2 right-20 text-4xl opacity-20 animate-float" style={{animationDelay: "2s"}}>📖</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-playfair text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="font-body text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-16 paper-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">Featured Stories</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handpicked tales that will transport you to different worlds and touch your heart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in ribbon-accent group" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`
                      ${story.genre === 'Fantasy' ? 'bg-purple-100 text-purple-700' : ''}
                      ${story.genre === 'Historical' ? 'bg-amber-100 text-amber-700' : ''}
                      ${story.genre === 'Sci-Fi' ? 'bg-blue-100 text-blue-700' : ''}
                      font-body font-semibold
                    `}>
                      {story.genre}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-primary mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed drop-cap">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="gradient-violet-amber text-white text-xs font-semibold">
                          {story.authorInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-body text-sm font-medium text-gray-900">by {story.author}</p>
                        <p className="font-body text-xs text-gray-500">{story.readTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-red-400">
                      <Heart className="w-4 h-4" />
                      <span className="font-body text-sm">{story.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="font-body font-semibold" asChild>
              <a href="/genres">
                <BookOpen className="w-5 h-5 mr-2" />
                View All Stories
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Genres Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">Explore by Genre</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find the perfect story to match your mood and interests
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {genres.map((genre, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-3">{genre.icon}</div>
                <h3 className="font-body font-semibold text-gray-900 mb-2">{genre.name}</h3>
                <p className="font-body text-sm text-gray-600">{genre.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 gradient-violet-amber-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">Share Your Story</h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Every story matters. Join our community of writers and readers who believe in the power of 
            storytelling to connect, inspire, and transform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-violet-amber text-white px-8 py-3 font-body font-semibold hover:opacity-90 transition-opacity shadow-lg">
              <Pen className="w-5 h-5 mr-2" />
              Publish Your Story
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary px-8 py-3 font-body font-semibold hover:bg-primary hover:text-white transition-all">
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
