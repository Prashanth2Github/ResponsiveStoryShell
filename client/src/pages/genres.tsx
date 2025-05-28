import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, BookOpen, Search, Filter } from "lucide-react";

const genres = [
  { name: "Fantasy", count: 142, color: "bg-purple-100 text-purple-700", icon: "🏰" },
  { name: "Sci-Fi", count: 98, color: "bg-blue-100 text-blue-700", icon: "🚀" },
  { name: "Romance", count: 167, color: "bg-pink-100 text-pink-700", icon: "💖" },
  { name: "Mystery", count: 89, color: "bg-gray-100 text-gray-700", icon: "🔍" },
  { name: "Thriller", count: 76, color: "bg-red-100 text-red-700", icon: "⚡" },
  { name: "Historical", count: 54, color: "bg-amber-100 text-amber-700", icon: "🏛️" },
  { name: "Adventure", count: 34, color: "bg-green-100 text-green-700", icon: "🗺️" },
  { name: "Horror", count: 28, color: "bg-orange-100 text-orange-700", icon: "👻" },
];

const stories = [
  {
    id: 1,
    title: "The Crystal Dragon's Quest",
    excerpt: "Young mage Aria discovers an ancient prophecy that could save her kingdom from eternal darkness.",
    author: "Elena Rodriguez",
    authorInitials: "ER",
    genre: "Fantasy",
    readTime: "15 min read",
    likes: "2.3k",
    rating: 4.8
  },
  {
    id: 2,
    title: "Mars Colony Chronicles",
    excerpt: "Life on Mars isn't what the colonists expected when mysterious signals start appearing.",
    author: "James Park",
    authorInitials: "JP",
    genre: "Sci-Fi",
    readTime: "12 min read",
    likes: "1.8k",
    rating: 4.6
  },
  {
    id: 3,
    title: "Love in Victorian London",
    excerpt: "A forbidden romance blooms between a factory worker and an aristocrat's daughter.",
    author: "Mary Thompson",
    authorInitials: "MT",
    genre: "Romance",
    readTime: "20 min read",
    likes: "3.1k",
    rating: 4.9
  },
  {
    id: 4,
    title: "The Midnight Detective",
    excerpt: "Detective Sarah Chen investigates a series of impossible crimes in the heart of the city.",
    author: "David Kim",
    authorInitials: "DK",
    genre: "Mystery",
    readTime: "18 min read",
    likes: "1.5k",
    rating: 4.7
  },
  {
    id: 5,
    title: "The Last Pharaoh's Secret",
    excerpt: "Archaeologist discovers a hidden chamber that reveals the true fate of ancient Egypt.",
    author: "Ahmed Hassan",
    authorInitials: "AH",
    genre: "Historical",
    readTime: "25 min read",
    likes: "987",
    rating: 4.5
  },
  {
    id: 6,
    title: "Digital Shadows",
    excerpt: "A hacker uncovers a conspiracy that threatens to control every connected device on Earth.",
    author: "Lisa Chang",
    authorInitials: "LC",
    genre: "Thriller",
    readTime: "16 min read",
    likes: "2.7k",
    rating: 4.8
  }
];

export default function Genres() {
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filteredStories = stories.filter(story => {
    const matchesGenre = selectedGenre === "all" || story.genre === selectedGenre;
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const sortedStories = [...filteredStories].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.id - a.id;
      case "rating":
        return b.rating - a.rating;
      case "popular":
      default:
        return parseInt(b.likes.replace('k', '000').replace('.', '')) - parseInt(a.likes.replace('k', '000').replace('.', ''));
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-violet-amber-soft py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Explore Stories by Genre
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Discover your next favorite story from our diverse collection of genres
          </p>
        </div>
      </section>

      {/* Genres Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 text-primary">Browse by Genre</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
            <Card 
              className={`text-center p-4 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                selectedGenre === "all" ? "ring-2 ring-primary bg-primary/5" : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedGenre("all")}
            >
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-body font-semibold text-sm text-gray-900">All Stories</h3>
              <p className="font-body text-xs text-gray-600">{stories.length} stories</p>
            </Card>
            {genres.map((genre, index) => (
              <Card 
                key={index} 
                className={`text-center p-4 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                  selectedGenre === genre.name ? "ring-2 ring-primary bg-primary/5" : "hover:shadow-lg"
                }`}
                onClick={() => setSelectedGenre(genre.name)}
              >
                <div className="text-3xl mb-2">{genre.icon}</div>
                <h3 className="font-body font-semibold text-sm text-gray-900">{genre.name}</h3>
                <p className="font-body text-xs text-gray-600">{genre.count} stories</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search stories or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="font-body text-sm text-gray-600">Sort by:</span>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedStories.map((story, index) => (
                <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in group">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Badge className={genres.find(g => g.name === story.genre)?.color || "bg-gray-100 text-gray-700"}>
                        {story.genre}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="font-body text-sm font-medium">{story.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-playfair text-xl font-bold text-primary mb-2">{story.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{story.excerpt}</p>
                    
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
                    
                    <Button className="w-full mt-4 gradient-violet-amber text-white hover:opacity-90">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Story
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-bold text-gray-600 mb-2">No stories found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}