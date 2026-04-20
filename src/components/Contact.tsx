import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-14 sm:py-16 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="chip mb-5">Get in touch</div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Let's <span className="gradient-text">accelerate</span> your releases.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Discuss how AI-driven test automation and CI/CD quality gates can transform your delivery pipeline.
          </p>
        </div>

        <div className="rounded-2xl bg-card/60 backdrop-blur border border-border overflow-hidden shadow-[0_8px_40px_hsl(0_0%_0%/0.3)]">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-3 p-8 sm:p-10">
              <ContactForm />
            </div>
            <div className="md:col-span-2 border-t md:border-t-0 md:border-l border-border bg-background/40">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
