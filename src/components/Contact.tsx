
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 reveal">
          <div className="chip inline-block mb-4">Start Your Free QA Assessment</div>
          <h2 className="text-3xl sm:text-4xl font-medium mb-4">
            Accelerate Quality Engineering
          </h2>
          <p className="text-foreground/70 text-lg">
            Discuss how AI-driven test automation and CI/CD quality gates can accelerate your releases while reducing regression risk.
          </p>
        </div>
        
        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-foreground/60">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            ISO/DevOps Compliant
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Enterprise-Grade Security
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Proven Results
          </span>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-xl shadow-sm overflow-hidden reveal">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 p-6 sm:p-8">
                <ContactForm />
              </div>
              <div className="md:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
