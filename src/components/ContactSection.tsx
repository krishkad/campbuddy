"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to plan your perfect getaway? Contact us for bookings, inquiries, or any assistance you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-forest-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <Card className="border-forest-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-forest-700 mb-4">Pawana Resort</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-gold-500 mt-1" />
                        <p className="text-gray-600">Pawana Lake, Lonavala, Maharashtra 410401</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gold-500" />
                        <p className="text-gray-600">+91 98765 43210</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gold-500" />
                        <p className="text-gray-600">pawana@natureresorts.com</p>
                      </div>
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
                        onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Pawana
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-forest-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-forest-700 mb-4">Panshet Resort</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-gold-500 mt-1" />
                        <p className="text-gray-600">Panshet Dam, Pune, Maharashtra 412108</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gold-500" />
                        <p className="text-gray-600">+91 98765 43211</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gold-500" />
                        <p className="text-gray-600">panshet@natureresorts.com</p>
                      </div>
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
                        onClick={() => window.open('https://wa.me/919876543211', '_blank')}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Panshet
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-forest-800">Find Us Here</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-forest-700 mb-3">Pawana Resort Location</h4>
                <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2674963949687!2d73.40348931489!3d18.52456128741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPawna%20Lake!5e0!3m2!1sen!2sin!4v1629787642143!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-forest-700 mb-3">Panshet Resort Location</h4>
                <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4674963949687!2d73.70348931489!3d18.39456128741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2a052f4461101%3A0x828d43bf9d9ee343!2sPanshet%20Dam!5e0!3m2!1sen!2sin!4v1629787642143!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;