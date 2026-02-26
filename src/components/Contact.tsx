
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 reveal">
          <div className="chip inline-block mb-4 font-mono">$ init --qa-assessment</div>
          <h2 className="text-3xl sm:text-4xl font-mono font-medium mb-4 text-foreground">
            <span className="text-primary/40">## </span>Accelerate Quality Engineering
          </h2>
          <p className="text-muted-foreground text-base font-mono">
            // Discuss how AI-driven test automation and CI/CD quality gates can accelerate your releases
          </p>
        </div>
        
        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm font-mono">
          <span className="px-3 py-1 rounded bg-primary/10 text-primary border border-primary/20">
            ✓ ISO/DevOps Compliant
          </span>
          <span className="px-3 py-1 rounded bg-primary/10 text-primary border border-primary/20">
            ✓ Enterprise-Grade Security
          </span>
          <span className="px-3 py-1 rounded bg-primary/10 text-primary border border-primary/20">
            ✓ Proven Results
          </span>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="terminal-window reveal">
            <div className="terminal-titlebar">
              <div className="terminal-dot-red" />
              <div className="terminal-dot-yellow" />
              <div className="terminal-dot-green" />
              <span className="ml-2 text-[10px] font-mono text-muted-foreground">contact-form.sh</span>
            </div>
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
