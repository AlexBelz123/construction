import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@buildpro.com",
      link: "mailto:info@buildpro.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "123 Construction Ave, Building City, BC 12345",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] text-center mb-6">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-[#F39C12] mx-auto mb-12" />
        
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Ready to start your project? Contact us today for a free consultation and quote
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">
              Contact Information
            </h3>
            
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <a 
                      href={info.link}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#3498DB] to-[#F39C12] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2C3E50] mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 group-hover:text-[#3498DB] transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}

            <div className="mt-8 p-6 bg-gradient-to-br from-[#2C3E50] to-[#3498DB] rounded-lg text-white">
              <h4 className="text-xl font-bold mb-2">Business Hours</h4>
              <p className="text-gray-200">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-200">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-200">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F39C12] hover:bg-[#E67E22] text-white font-semibold py-6 text-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}