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
    <section className="py-20 border-t border-border/60" aria-labelledby="clients-heading">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 id="clients-heading" className="text-center text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-10">
          Trusted by industry leaders
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-4 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-12 md:h-14 w-auto object-contain invert brightness-200"
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
