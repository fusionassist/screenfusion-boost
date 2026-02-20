import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5">
          Ready to Transform Your Screens?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses worldwide using ScreenFusion to captivate their audience.
          Start your free trial today — no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://manage.screenfusion.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all shadow-sm"
          >
            Start For Free
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
          >
            Talk to Sales
          </Link>
        </div>

        <p className="text-sm text-white/60">
          ✓ Free for 1 screen &nbsp;&nbsp; ✓ No credit card &nbsp;&nbsp; ✓ Cancel anytime
        </p>
      </div>
    </section>
  );
};
