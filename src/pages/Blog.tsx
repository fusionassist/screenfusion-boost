import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";
import { useSEO } from "@/hooks/useSEO";

const Blog = () => {
  useSEO({
    title: "Blog & Articles | ScreenFusion Digital Signage",
    description: "Thought leadership on AI digital signage, demographic profiling, dynamic pricing, touchscreen kiosks, and multi-site deployment. Expert insights from ScreenFusion.",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-glow">
        <div className="container mx-auto px-4 text-center">
          <span className="chip mb-4">Blog & Articles</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Thought Leadership in{" "}
            <span className="gradient-text">Digital Signage</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights on AI-powered digital signage, retail technology, dynamic pricing, and the future of multi-site content management.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}/`}
                className="feature-card group flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {article.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" />
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {article.description}
                </p>
                <div className="text-xs text-muted-foreground mt-4">
                  {new Date(article.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
