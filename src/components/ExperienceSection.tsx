"use client"
import { useEffect, useState } from 'react';
import { Tent, Users, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const [counters, setCounters] = useState({
    camps: 0,
    customers: 0,
    locations: 0
  });

  const finalValues = {
    camps: 1023,
    customers: 16798,
    locations: 4
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounters(prev => ({
        camps: Math.min(prev.camps + Math.ceil(finalValues.camps / steps), finalValues.camps),
        customers: Math.min(prev.customers + Math.ceil(finalValues.customers / steps), finalValues.customers),
        locations: Math.min(prev.locations + Math.ceil(finalValues.locations / steps), finalValues.locations)
      }));
    }, stepDuration);

    setTimeout(() => clearInterval(interval), duration);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: <Tent className="w-12 h-12 text-gold-500" />,
      value: counters.camps,
      label: "Camps Organized",
      emoji: "🛖"
    },
    {
      icon: <Users className="w-12 h-12 text-gold-500" />,
      value: counters.customers,
      label: "Satisfied Customers",
      emoji: "😊"
    },
    {
      icon: <MapPin className="w-12 h-12 text-gold-500" />,
      value: counters.locations,
      label: "Locations",
      emoji: "📍"
    }
  ];

  return (
    <section className="py-20 bg-forest-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Experience</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Years of creating unforgettable memories in nature&apos;s embrace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="text-6xl mb-2">{stat.emoji}</div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                {stat.value.toLocaleString()}
              </div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;