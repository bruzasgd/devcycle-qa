
import ContactForm from "./contact/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-secondary/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get Started
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Ready to improve your software quality?
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Book a free consultation. We'll analyze your current QA process and show you how to ship faster with fewer bugs.
            </p>
            
            {/* Quick benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-foreground/80">Free QA audit of your current process</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-foreground/80">Custom automation roadmap</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-foreground/80">No commitment required</span>
              </div>
            </div>
            
            {/* Contact info */}
            <div className="space-y-3 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>bruzasgd@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Remote & On-site available</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="bg-background rounded-2xl shadow-lg p-6 sm:p-8 border border-border">
            <h3 className="text-lg font-semibold mb-6">Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
