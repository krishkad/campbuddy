
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      message: "Absolutely magical experience at Pawana! The sunrise views and peaceful atmosphere made our weekend perfect. The staff was incredibly welcoming and the food was delicious.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Rajesh Kumar",
      message: "Panshet resort exceeded all expectations! The adventure activities were thrilling and the night sky view was breathtaking. Perfect for a corporate retreat.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Anita Patel",
      message: "Best family vacation ever! Kids loved the outdoor games and we enjoyed the bonfire night. The tents were comfortable and clean. Highly recommended!",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Vikram Singh",
      message: "The combination of adventure and relaxation was perfect. Great location, excellent service, and unforgettable memories. Will definitely visit again!",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sneha Reddy",
      message: "Romantic getaway at its finest! The sunset views at Pawana were incredible and the peaceful environment was exactly what we needed. Perfect for couples.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-forest-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-800 mb-4">What Our Guests Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of guests choose Nature Resorts for their perfect getaway
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[var(--gold-400)] text-gold-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic leading-relaxed">
                        &quot;{testimonial.message}&quot;
                      </p>
                      <div className="flex items-center">
                        <img 
                          src={testimonial.photo} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-forest-800">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">Verified Guest</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;