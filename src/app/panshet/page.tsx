"use client"
import AmenitiesSection from '@/components/AmenitiesSection';
import DayTimelineSection from '@/components/DayTimelineSection';
import EnhancedGallery from '@/components/EnhancedGallery';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, ArrowRight, Clock, MapPin, Star, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Panshet = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    adults: '',
    children: '',
    message: ''
  });

  const images = [
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  ];

  const faqs = [
    {
      question: 'What adventure activities are available at Panshet Resort?',
      answer: 'We offer rock climbing, rappelling, zip-lining, mountain biking, trekking, water sports, jet skiing, and boating on Panshet reservoir.'
    },
    {
      question: 'Is Panshet Resort suitable for corporate retreats?',
      answer: 'Absolutely! We have conference facilities, team building activities, and can accommodate large groups with customized packages.'
    },
    {
      question: 'What is the best time to visit for adventure activities?',
      answer: 'October to March offers perfect weather for all activities. Post-monsoon (September-October) provides lush green landscapes and flowing waterfalls.'
    },
    {
      question: 'Are there any age restrictions for adventure activities?',
      answer: 'Most activities are suitable for ages 12+. We have modified versions for younger children and safety equipment for all age groups.'
    },
    {
      question: 'What accommodation options are available?',
      answer: 'We offer premium mountain cabins, luxury tents with valley views, and deluxe rooms, all equipped with modern amenities and stunning views.'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Panshet Resort Booking Inquiry*

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Adults: ${formData.adults}
Children: ${formData.children}
Message: ${formData.message}

Please confirm availability and pricing.`;

    const whatsappUrl = `https://wa.me/919876543211?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={images[currentImageIndex]} 
            alt="Panshet Resort"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="flex items-center justify-center mb-4">
              <Badge className="bg-gold-500 text-white px-4 py-2 text-sm">
                <Star className="w-4 h-4 mr-1 fill-current" />
                4.9 Rating
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Panshet Resort</h1>
            <div className="flex items-center justify-center mb-6 text-lg">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Panshet Dam, Pune, Maharashtra</span>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Adventure awaits amidst rolling hills and pristine waters at our mountain retreat
            </p>
            <Button 
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-lg"
              onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Your Adventure
            </Button>
          </div>
        </div>

        {/* Image Navigation */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
        >
          <ArrowRight size={24} />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Amenities Section */}
      <AmenitiesSection />

      {/* Enhanced Gallery */}
      <EnhancedGallery images={images} title="Adventure Gallery" />

      {/* Day Timeline Section */}
      <DayTimelineSection />

      {/* Booking Form */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-forest-800 mb-4">Book Your Panshet Adventure</h2>
              <p className="text-xl text-gray-600">
                Ready for the ultimate adventure? Fill out the form below and we&apos;ll send the details to WhatsApp.
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-forest-700">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-forest-700">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-forest-700">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <Label htmlFor="checkIn" className="text-forest-700">Check-in Date *</Label>
                      <Input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkOut" className="text-forest-700">Check-out Date *</Label>
                      <Input
                        id="checkOut"
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="adults" className="text-forest-700">Adults *</Label>
                      <Input
                        id="adults"
                        name="adults"
                        type="number"
                        min="1"
                        value={formData.adults}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="children" className="text-forest-700">Children</Label>
                      <Input
                        id="children"
                        name="children"
                        type="number"
                        min="0"
                        value={formData.children}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-forest-700">Special Requests</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      rows={4}
                      placeholder="Any special requirements or adventure preferences..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                  >
                    Send Booking Request via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about your Panshet adventure</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-forest-800 mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-forest-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Panshet Resort</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-4 text-gold-400" />
              <h4 className="text-lg font-semibold mb-2">Location</h4>
              <p className="text-gray-300">Panshet Dam, Pune, Maharashtra 412108</p>
            </div>
            <div>
              <Clock className="w-8 h-8 mx-auto mb-4 text-gold-400" />
              <h4 className="text-lg font-semibold mb-2">Contact</h4>
              <p className="text-gray-300">+91 98765 43211</p>
              <p className="text-gray-300">panshet@natureresorts.com</p>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-4 text-gold-400" />
              <h4 className="text-lg font-semibold mb-2">Capacity</h4>
              <p className="text-gray-300">Up to 120 guests</p>
              <p className="text-gray-300">Adventure groups & corporate retreats</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link href="/">
              <Button variant="outline" className="border-white text-gray-500 hover:bg-white hover:text-[var(--forest-800)]">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Panshet;