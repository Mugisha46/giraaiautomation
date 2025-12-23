import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building AI Solutions for African Markets",
    excerpt:
      "Exploring how artificial intelligence is transforming businesses across the African continent.",
    date: "Dec 15, 2024",
    author: "Neurotech Team",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    title: "The Future of Conversational AI",
    excerpt:
      "How chatbots are revolutionizing customer service and engagement in emerging markets.",
    date: "Dec 10, 2024",
    author: "AI Research",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
  },
  {
    title: "Data Strategy for Growth",
    excerpt:
      "Best practices for leveraging data assets to drive business innovation and efficiency.",
    date: "Dec 5, 2024",
    author: "Strategy Team",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label">Blog Post</p>
          <h2 className="section-title">
            Our <span className="text-gradient">NeuroTech</span> AI Technology
            news post
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
          >
            View All Posts
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
