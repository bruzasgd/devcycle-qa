
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 reveal">
          <div className="relative inline-block">
            <div className="chip inline-block mb-4">Let's Connect</div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium mb-4">
            Book a Meeting With Us
          </h2>
          <p className="text-foreground/70 text-lg">
            Schedule a consultation to discuss how we can enhance your software quality.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-xl shadow-sm overflow-hidden reveal">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Form section */}
              <div className="md:col-span-3 p-6 sm:p-8">
                <ContactForm />
              </div>
              
              {/* Info section */}
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
