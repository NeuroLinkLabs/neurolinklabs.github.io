import { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      content: "contact@neurolinklabs.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Response Time",
      content: "Within 24 hours",
      description: "We respond to all inquiries quickly"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Global Reach",
      content: "Worldwide Services",
      description: "Supporting clients globally"
    }
  ];

  const services = [
    "Strategic Consultancy",
    "Custom AI Solutions", 
    "Business Matchmaking",
    "AI Workflow Automation",
    "Digital Transformation",
    "Other"
  ];

  const benefits = [
    "Free initial consultation",
    "Custom solution roadmap",
    "Expert guidance & support",
    "Proven track record",
    "Global partnership network"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Start Your <span className="text-gradient neuro-text-glow">Innovation Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-neuro-text-secondary mb-8 leading-relaxed">
              Ready to transform your business with AI? Get in touch with our experts 
              for a free consultation and discover how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="neuro-glow" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:contact@neurolinklabs.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-neuro-bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-neuro-text-secondary max-w-2xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="neuro-card hover:neuro-glow transition-all duration-300 text-center animate-slide-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mb-4 flex justify-center">{info.icon}</div>
                  <CardTitle className="text-xl text-neuro-text-primary">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-semibold text-lg mb-2">{info.content}</p>
                  <CardDescription className="text-neuro-text-secondary">
                    {info.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20" id="contact-form">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="animate-slide-up">
              <Card className="neuro-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-neuro-text-primary">Send us a Message</CardTitle>
                  <CardDescription className="text-neuro-text-secondary">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                          className="bg-neuro-bg-tertiary border-neuro-bg-tertiary focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                          className="bg-neuro-bg-tertiary border-neuro-bg-tertiary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Your company name"
                        className="bg-neuro-bg-tertiary border-neuro-bg-tertiary focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                        <SelectTrigger className="bg-neuro-bg-tertiary border-neuro-bg-tertiary focus:border-primary">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-neuro-bg-secondary border-neuro-bg-tertiary">
                          {services.map((service) => (
                            <SelectItem key={service} value={service} className="focus:bg-neuro-bg-tertiary">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us about your project and how we can help..."
                        required
                        rows={6}
                        className="bg-neuro-bg-tertiary border-neuro-bg-tertiary focus:border-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full neuro-glow" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Benefits & Direct Contact */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {/* Why Choose Us */}
              <Card className="neuro-card">
                <CardHeader>
                  <CardTitle className="text-xl text-neuro-text-primary">Why Work With Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-neuro-text-primary">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Direct Email */}
              <Card className="neuro-card hover:neuro-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-neuro-text-primary">Prefer Email?</CardTitle>
                  <CardDescription className="text-neuro-text-secondary">
                    Send us an email directly and we'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <a href="mailto:contact@neurolinklabs.com">
                      <Mail className="mr-2 h-5 w-5" />
                      contact@neurolinklabs.com
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="neuro-card">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1">&lt;24h</h3>
                      <p className="text-neuro-text-secondary text-sm">Response Time</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1">100%</h3>
                      <p className="text-neuro-text-secondary text-sm">Satisfaction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neuro-bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-neuro-text-secondary max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="neuro-card animate-slide-up">
              <CardHeader>
                <CardTitle className="text-lg text-neuro-text-primary">How quickly can you start a project?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neuro-text-secondary">
                  We typically begin new projects within 1-2 weeks after our initial consultation 
                  and agreement on project scope and timeline.
                </p>
              </CardContent>
            </Card>

            <Card className="neuro-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="text-lg text-neuro-text-primary">Do you work with small businesses?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neuro-text-secondary">
                  Yes! We work with businesses of all sizes, from startups to enterprises. 
                  We tailor our solutions to fit your budget and needs.
                </p>
              </CardContent>
            </Card>

            <Card className="neuro-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-lg text-neuro-text-primary">What industries do you serve?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neuro-text-secondary">
                  We serve diverse industries including technology, finance, healthcare, 
                  e-commerce, manufacturing, and professional services.
                </p>
              </CardContent>
            </Card>

            <Card className="neuro-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-lg text-neuro-text-primary">Do you provide ongoing support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neuro-text-secondary">
                  Absolutely! We provide comprehensive ongoing support, maintenance, 
                  and optimization services to ensure your continued success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;