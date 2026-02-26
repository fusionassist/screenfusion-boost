import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";

export const BlogPromoSection = () => {
  const featured = blogArticles.slice(0, 3);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="chip mb-4">Blog & Articles</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Thought Leadership in{" "}
            <span className="text-primary">Digital Signage</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert insights on AI, retail technology, and the future of multi-site content management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {featured.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}/`}
              className="feature-card group flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-semibold text-primary mb-2">{article.category}</span>
              <h3 className="text-base font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {article.description}
              </p>
              <span className="text-xs text-muted-foreground mt-3">{article.readTime}</span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog/"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
