"use client";
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToExplore = () => {
    const element = document.querySelector('#branches');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Camp Buddy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light">
            Where luxury meets wilderness. Discover serenity at Pawana & Panshet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-lg font-medium"
              onClick={scrollToExplore}
            >
              Explore Our Resorts
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white bg-transparent text-white hover:bg-white hover:text-[var(--forest-700)] px-8 py-4 text-lg font-medium"
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToExplore}
          className="text-white hover:text-gold-400 transition-colors duration-200"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;