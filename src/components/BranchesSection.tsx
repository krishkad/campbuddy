"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Star } from 'lucide-react';
import Link from 'next/link';

const BranchesSection = () => {
  const branches = [
    {
      id: 'pawana',
      name: 'Pawana Resort',
      location: 'Pawana Lake, Lonavala',
      description: 'Nestled beside the pristine Pawana Lake, experience luxury tents with breathtaking sunrise views and water activities.',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹3,500',
      rating: 4.8,
      features: ['Lake View', 'Water Sports', 'Luxury Tents', 'Bonfire']
    },
    {
      id: 'panshet',
      name: 'Panshet Resort',
      location: 'Panshet Dam, Pune',
      description: 'Surrounded by lush hills and the expansive Panshet reservoir, perfect for adventure seekers and nature lovers.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹4,200',
      rating: 4.9,
      features: ['Mountain View', 'Adventure Sports', 'Premium Cabins', 'Trekking']
    }
  ];

  return (
    <section id="branches" className="py-20 bg-gradient-to-br from-gray-50 to-forest-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-800 mb-4">
            Our Resort Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your perfect getaway between two stunning locations, each offering unique experiences in nature&apos;s embrace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {branches.map((branch, index) => (
            <Card 
              key={branch.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 p-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={branch.image} 
                  alt={branch.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-gold-500 fill-current" />
                    <span className="text-sm font-medium">{branch.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-forest-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">Starting {branch.price}/night</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-forest-800 mb-2">{branch.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{branch.location}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{branch.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {branch.features.map((feature) => (
                      <span 
                        key={feature}
                        className="bg-forest-100 text-forest-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link href={`/${branch.id}`} className="flex-1">
                    <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white">
                      Explore {branch.name}
                    </Button>
                  </Link>
                  <Button 
                    variant="outline"
                    className="border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white"
                    onClick={() => window.open(`https://wa.me/91987654321${branch.id === 'pawana' ? '0' : '1'}`, '_blank')}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;