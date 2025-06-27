"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Baby } from 'lucide-react';

const PricingSection = () => {
  const packages = [
    {
      title: "Overnight Camping",
      isSpecial: false,
      prices: {
        adult: { original: 1099, discounted: 999, advance: 499 },
        child: { original: 649, discounted: 549, advance: 349 }
      },
      checkIn: "03:00 PM",
      checkOut: "11:00 AM"
    },
    {
      title: "31 Dec Special",
      isSpecial: true,
      prices: {
        adult: { original: 1999, discounted: 1599, advance: 899 },
        child: { original: 999, discounted: 849, advance: 499 }
      },
      checkIn: "03:00 PM",
      checkOut: "11:00 AM"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--gold-50)] to-[var(--forest-50)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-800 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Perfect packages for your perfect getaway
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                pkg.isSpecial ? 'border-2 border-gold-400 bg-gradient-to-br from-gold-50 to-orange-50' : ''
              }`}
            >
              {pkg.isSpecial && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-gold-500 text-white px-4 py-2 rounded-bl-lg rounded-tr-lg">
                    Special Offer
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800 mb-4">{pkg.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Adult Pricing */}
                <div className="border rounded-lg p-4 bg-white">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-forest-600 mr-2" />
                    <span className="font-semibold text-forest-800">Adult (10+ Years)</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl font-bold text-forest-800">₹{pkg.prices.adult.discounted}</span>
                    <span className="text-lg text-gray-500 line-through">₹{pkg.prices.adult.original}</span>
                  </div>
                  <p className="text-sm text-gold-600 font-medium">
                    Pay ₹{pkg.prices.adult.advance} & confirm your seat
                  </p>
                </div>

                {/* Child Pricing */}
                <div className="border rounded-lg p-4 bg-white">
                  <div className="flex items-center mb-3">
                    <Baby className="w-5 h-5 text-forest-600 mr-2" />
                    <span className="font-semibold text-forest-800">Child (5-10 Years)</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl font-bold text-forest-800">₹{pkg.prices.child.discounted}</span>
                    <span className="text-lg text-gray-500 line-through">₹{pkg.prices.child.original}</span>
                  </div>
                  <p className="text-sm text-gold-600 font-medium">
                    Pay ₹{pkg.prices.child.advance} & confirm your seat
                  </p>
                </div>

                {/* Timing */}
                <div className="border rounded-lg p-4 bg-forest-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-forest-600 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-forest-800">Check-in: {pkg.checkIn}</p>
                        <p className="text-sm font-medium text-forest-800">Check-out: {pkg.checkOut}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3"
                  onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;