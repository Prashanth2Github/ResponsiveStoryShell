import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Pen, Upload, Eye, Save, Send } from "lucide-react";

const storySchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(100, "Title must be less than 100 characters"),
  genre: z.string().min(1, "Please select a genre"),
  summary: z.string().min(20, "Summary must be at least 20 characters").max(300, "Summary must be less than 300 characters"),
  content: z.string().min(100, "Story must be at least 100 characters"),
  tags: z.string().optional(),
  authorNotes: z.string().optional(),
});

type StoryFormData = z.infer<typeof storySchema>;

const genres = [
  "Fantasy", "Sci-Fi", "Romance", "Mystery", "Thriller", "Historical", 
  "Adventure", "Horror", "Comedy", "Drama", "Literary Fiction", "Young Adult"
];

export default function Submit() {
  const [isPreview, setIsPreview] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const { toast } = useToast();

  const form = useForm<StoryFormData>({
    resolver: zodResolver(storySchema),
    defaultValues: {
      title: "",
      genre: "",
      summary: "",
      content: "",
      tags: "",
      authorNotes: "",
    },
  });

  const onSubmit = async (data: StoryFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Story Submitted Successfully!",
        description: "Your story has been submitted for review and will be published soon.",
      });
      
      form.reset();
      setWordCount(0);
      setIsPreview(false);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your story. Please try again.",
        variant: "destructive",
      });
    }
  };

  const saveDraft = () => {
    const formData = form.getValues();
    localStorage.setItem('story-draft', JSON.stringify(formData));
    toast({
      title: "Draft Saved",
      description: "Your story has been saved as a draft.",
    });
  };

  const loadDraft = () => {
    const draft = localStorage.getItem('story-draft');
    if (draft) {
      const draftData = JSON.parse(draft);
      Object.keys(draftData).forEach((key) => {
        form.setValue(key as keyof StoryFormData, draftData[key]);
      });
      updateWordCount(draftData.content || "");
      toast({
        title: "Draft Loaded",
        description: "Your saved draft has been loaded.",
      });
    }
  };

  const updateWordCount = (content: string) => {
    const words = content.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  const formData = form.watch();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-violet-amber-soft py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Share Your Story
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Join our community of storytellers and share your creativity with the world
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-primary flex items-center gap-2">
                  <Pen className="w-6 h-6" />
                  {isPreview ? "Story Preview" : "Submit Your Story"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isPreview ? (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body font-semibold">Story Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your story title..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="genre"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body font-semibold">Genre</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a genre" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {genres.map((genre) => (
                                    <SelectItem key={genre} value={genre}>
                                      {genre}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="tags"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body font-semibold">Tags (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="adventure, magic, friendship..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="summary"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body font-semibold">Story Summary</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Write a compelling summary of your story..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body font-semibold">Story Content</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Write your story here..."
                                className="min-h-[400px]"
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e);
                                  updateWordCount(e.target.value);
                                }}
                              />
                            </FormControl>
                            <div className="flex justify-between text-sm text-gray-500 mt-2">
                              <span>Words: {wordCount}</span>
                              <span>Estimated reading time: {Math.ceil(wordCount / 200)} min</span>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="authorNotes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body font-semibold">Author's Notes (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any notes you'd like to share with readers..."
                                className="min-h-[80px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex flex-wrap gap-3">
                        <Button type="button" variant="outline" onClick={saveDraft}>
                          <Save className="w-4 h-4 mr-2" />
                          Save Draft
                        </Button>
                        <Button type="button" variant="outline" onClick={loadDraft}>
                          <Upload className="w-4 h-4 mr-2" />
                          Load Draft
                        </Button>
                        <Button type="button" variant="outline" onClick={() => setIsPreview(true)}>
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button type="submit" className="gradient-violet-amber text-white">
                          <Send className="w-4 h-4 mr-2" />
                          Submit Story
                        </Button>
                      </div>
                    </form>
                  </Form>
                ) : (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="font-playfair text-3xl font-bold text-primary">{formData.title || "Untitled Story"}</h2>
                      <Button variant="outline" onClick={() => setIsPreview(false)}>
                        <Pen className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {formData.genre && <Badge className="gradient-violet-amber text-white">{formData.genre}</Badge>}
                      {formData.tags && formData.tags.split(',').map((tag, index) => (
                        <Badge key={index} variant="secondary">{tag.trim()}</Badge>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-body font-semibold mb-2">Summary</h3>
                      <p className="text-gray-700">{formData.summary || "No summary provided"}</p>
                    </div>

                    <div className="prose max-w-none">
                      <h3 className="font-body font-semibold mb-2">Story</h3>
                      <div className="whitespace-pre-wrap text-gray-800 leading-relaxed drop-cap">
                        {formData.content || "No content provided"}
                      </div>
                    </div>

                    {formData.authorNotes && (
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <h3 className="font-body font-semibold mb-2">Author's Notes</h3>
                        <p className="text-gray-700">{formData.authorNotes}</p>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Button onClick={() => setIsPreview(false)} variant="outline">
                        <Pen className="w-4 h-4 mr-2" />
                        Edit Story
                      </Button>
                      <Button onClick={form.handleSubmit(onSubmit)} className="gradient-violet-amber text-white">
                        <Send className="w-4 h-4 mr-2" />
                        Submit Story
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-primary">Submission Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Story Requirements</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Minimum 100 words</li>
                    <li>• Original content only</li>
                    <li>• Appropriate for all audiences</li>
                    <li>• Clear title and summary</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Review Process</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Stories reviewed within 24-48 hours</li>
                    <li>• Email notification upon approval</li>
                    <li>• Feedback provided if changes needed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tips for Success</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Engaging opening paragraph</li>
                    <li>• Clear, compelling summary</li>
                    <li>• Relevant tags and genre</li>
                    <li>• Proofread for errors</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-primary">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="font-body text-sm">
                <p className="text-gray-600 mb-4">
                  New to writing? Check out our writing resources and community forums for tips and support.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    Writing Guide
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Community Forum
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}