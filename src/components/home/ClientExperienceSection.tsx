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
    <section className="py-12 bg-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium text-foreground mb-3">
            Trusted by Industry Leaders
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              className="flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-20 md:h-24 w-auto object-contain filter opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientExperienceSection;