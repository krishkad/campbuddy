
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AmenitiesSection = () => {
  const amenities = [
    { name: "Tent Stay (Twin Sharing)", icon: "🏕️", special: false },
    { name: "Evening Snacks (Unlimited)", icon: "🍿", special: false },
    { name: "Starters (Unlimited only on NYE)", icon: "🍤", special: true },
    { name: "Dinner (Unlimited)", icon: "🍽️", special: false },
    { name: "Breakfast (Unlimited)", icon: "🥞", special: false },
    { name: "Bonfire", icon: "🔥", special: false },
    { name: "Music", icon: "🎵", special: false },
    { name: "Indoor Games", icon: "🎯", special: false },
    { name: "Outdoor Games", icon: "⚽", special: false },
    { name: "Firework Show (Only NYE)", icon: "🎆", special: true },
    { name: "Free Parking", icon: "🚗", special: false },
    { name: "Pet-Friendly", icon: "🐕", special: false },
    { name: "No Hidden Costs", icon: "💰", special: false }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-800 mb-4">What's Included</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for a perfect outdoor experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-all duration-300 ${
                  amenity.special ? 'border-gold-300 bg-gold-50' : 'border-gray-200'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{amenity.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className={`font-medium ${
                          amenity.special ? 'text-gold-700' : 'text-forest-800'
                        }`}>
                          {amenity.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;