import vodafoneLogo from "@/assets/vodafone-logo.png";
import ibmLogo from "@/assets/ibm-logo.png";
import accentureLogo from "@/assets/accenture-logo.png";
import danskeBankLogo from "@/assets/danske-bank-logo.png";

const clients = [
  { name: "Vodafone", logo: vodafoneLogo },
  { name: "IBM", logo: ibmLogo },
  { name: "Accenture", logo: accentureLogo },
  { name: "Danske Bank", logo: danskeBankLogo },
];

const ClientExperienceSection = () => {
  return (
    <section className="py-12 border-t border-border" aria-labelledby="clients-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 id="clients-heading" className="text-2xl font-mono font-medium text-foreground mb-2">
            <span className="text-primary/40">// </span>Trusted by Industry Leaders
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              className="flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-20 md:h-24 w-auto object-contain invert brightness-200"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientExperienceSection;
