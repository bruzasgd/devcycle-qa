
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
    <section className="py-10 bg-background border-y border-border/50" aria-labelledby="clients-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-foreground/50 mb-6 font-medium tracking-wide uppercase">
          Trusted by leading enterprises
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
          {clients.map((client) => (
            <img
              key={client.name}
              src={client.logo}
              alt={`${client.name} logo`}
              className="h-8 sm:h-10 md:h-12 w-auto object-contain opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientExperienceSection;
