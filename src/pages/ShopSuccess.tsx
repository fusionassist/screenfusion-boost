import { Layout } from "@/components/layout/Layout";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ShopSuccess = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">
              Order Confirmed!
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Thank you for your purchase. You'll receive a confirmation email shortly with your order details and tracking information.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2">
                Back to Home <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact/" className="btn-outline inline-flex items-center justify-center gap-2">
                Need Help?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShopSuccess;
