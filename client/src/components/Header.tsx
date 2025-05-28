import { useState } from "react";
import { Link } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Menu, ChevronDown, User, LogIn, UserPlus, Library, Settings, LogOut, Sparkles } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch current user
  const { data: user, isLoading } = useQuery({
    queryKey: ["/api/auth/user"],
    retry: false,
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      if (!response.ok) throw new Error("Logout failed");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/auth/user"] });
      queryClient.clear();
      toast({
        title: "Logged Out Successfully",
        description: "See you next time!",
      });
      window.location.href = "/";
    },
    onError: () => {
      toast({
        title: "Logout Failed",
        description: "Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const userInitials = user ? 
    `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() || user.username?.[0]?.toUpperCase() || 'U' 
    : 'U';

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 gradient-creative rounded-lg flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                NewStoriesAndTales
              </h1>
              <p className="text-xs text-muted-foreground font-body">Where stories come alive</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors duration-200 font-body font-semibold relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/genres" className="text-foreground hover:text-primary transition-colors duration-200 font-body font-semibold relative group">
              Genres
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/submit" className="text-foreground hover:text-primary transition-colors duration-200 font-body font-semibold relative group">
              Submit
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* User Menu & Theme Toggle */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Desktop User Menu */}
            <div className="hidden md:block">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2 hover:bg-primary/10">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="gradient-sunset text-white text-sm font-bold">
                          {userInitials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="hidden sm:block font-medium">{user.firstName || user.username}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-3 py-2 border-b border-border">
                      <p className="font-medium">{user.firstName} {user.lastName}</p>
                      <p className="text-sm text-muted-foreground">@{user.username}</p>
                    </div>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">
                        <User className="w-4 h-4 mr-2" />
                        My Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/submit">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Write Story
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">
                        <Library className="w-4 h-4 mr-2" />
                        My Stories
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/settings">
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" asChild>
                    <Link href="/login">
                      <LogIn className="w-4 h-4 mr-2" />
                      Sign In
                    </Link>
                  </Button>
                  <Button className="gradient-ocean text-white" asChild>
                    <Link href="/register">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Join Now
                    </Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {user && (
                    <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="gradient-sunset text-white font-bold">
                          {userInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.firstName} {user.lastName}</p>
                        <p className="text-sm text-muted-foreground">@{user.username}</p>
                      </div>
                    </div>
                  )}

                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-foreground hover:text-primary transition-colors font-body font-semibold">
                    Home
                  </Link>
                  <Link href="/genres" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-foreground hover:text-primary transition-colors font-body font-semibold">
                    Genres
                  </Link>
                  <Link href="/submit" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-foreground hover:text-primary transition-colors font-body font-semibold">
                    Submit
                  </Link>

                  {user ? (
                    <div className="pt-4 border-t space-y-2">
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                          <User className="w-4 h-4 mr-2" />
                          My Profile
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                          <Library className="w-4 h-4 mr-2" />
                          My Stories
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-destructive hover:text-destructive"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          handleLogout();
                        }}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <div className="pt-4 border-t space-y-2">
                      <Button className="w-full gradient-ocean text-white" asChild>
                        <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                          <LogIn className="w-4 h-4 mr-2" />
                          Sign In
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                          <UserPlus className="w-4 h-4 mr-2" />
                          Create Account
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
