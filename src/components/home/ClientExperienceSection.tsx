import React from 'react';
import vodafoneLogo from '../../assets/vodafone-logo.png';
import ibmLogo from '../../assets/ibm-logo.png';
import accentureLogo from '../../assets/accenture-logo.png';
import danskeBankLogo from '../../assets/danske-bank-logo.png';

const ClientExperienceSection = () => {
  const clients = [
    { name: 'Vodafone', logo: vodafoneLogo },
    { name: 'IBM', logo: ibmLogo },
    { name: 'Accenture', logo: accentureLogo },
    { name: 'Danske Bank', logo: danskeBankLogo },
  ];

  return (
    <section className="py-16 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Our experience ranges from working with names like Vodafone, IBM, Accenture, Danske Bank to smaller teams that want to release their products faster and with higher quality.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-12 md:h-16 w-auto object-contain filter opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientExperienceSection;