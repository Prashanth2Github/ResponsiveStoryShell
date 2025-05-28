import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BookOpen, Menu, ChevronDown, User, LogIn, UserPlus, Library, Settings } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 gradient-violet-amber rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair text-xl font-bold text-brand-violet">NewStoriesAndTales</h1>
              <p className="text-xs text-gray-500 font-body">Where stories come alive</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className="text-gray-700 hover:text-brand-violet transition-colors duration-200 font-body font-semibold relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-violet group-hover:w-full transition-all duration-300"></span>
              </a>
            </Link>
            <Link href="/genres">
              <a className="text-gray-700 hover:text-brand-violet transition-colors duration-200 font-body font-semibold relative group">
                Genres
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-violet group-hover:w-full transition-all duration-300"></span>
              </a>
            </Link>
            <Link href="/submit">
              <a className="text-gray-700 hover:text-brand-violet transition-colors duration-200 font-body font-semibold relative group">
                Submit
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-violet group-hover:w-full transition-all duration-300"></span>
              </a>
            </Link>
          </nav>

          {/* User Menu & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop User Menu */}
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="gradient-violet-amber text-white font-body hover:opacity-90 transition-opacity">
                    <User className="w-4 h-4 mr-2" />
                    <span className="hidden sm:block">Login / Profile</span>
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <UserPlus className="w-4 h-4 mr-2" />
                    Create Account
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Library className="w-4 h-4 mr-2" />
                    My Library
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <a className="block py-2 text-gray-700 hover:text-brand-violet transition-colors font-body font-semibold">
                      Home
                    </a>
                  </Link>
                  <Link href="/genres" onClick={() => setIsMobileMenuOpen(false)}>
                    <a className="block py-2 text-gray-700 hover:text-brand-violet transition-colors font-body font-semibold">
                      Genres
                    </a>
                  </Link>
                  <Link href="/submit" onClick={() => setIsMobileMenuOpen(false)}>
                    <a className="block py-2 text-gray-700 hover:text-brand-violet transition-colors font-body font-semibold">
                      Submit
                    </a>
                  </Link>
                  <div className="pt-4 border-t">
                    <Button className="w-full gradient-violet-amber text-white font-body mb-2">
                      <LogIn className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                    <Button variant="outline" className="w-full">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Create Account
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
