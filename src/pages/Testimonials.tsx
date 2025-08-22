import { ArrowRight, Star, Quote, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Stefan Tecuceanu",
      role: "Co-Founder",
      company: "SmartCamp Romania",
      avatar: "S",
      rating: 5,
      testimonial: "NeuroLink Labs connected us to a top machine learning developer who built an incredible customer service bot for my company. The process was seamless and the results exceeded our expectations.",
      highlight: "Customer Service Bot Implementation",
      industry: "Technology"
    },
    {
      name: "Daniel Lenton",
      role: "Founder",
      company: "Deep Ivy Ltd",
      avatar: "D",
      rating: 5,
      testimonial: "Their matchmaking service is perfect. They connected us to the exact team we needed that helped improve our business operations significantly. Couldn't be happier with the partnership.",
      highlight: "Strategic Partnership Match",
      industry: "Business Services"
    }
  ];

  const metrics = [
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Every client recommends our services"
    },
    {
      number: "50+",
      label: "Successful Matches",
      description: "Companies connected with perfect partners"
    },
    {
      number: "80%",
      label: "Efficiency Improvement",
      description: "Average productivity increase"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance"
    }
  ];

  const industries = [
    "Technology & Software",
    "Financial Services",
    "Healthcare & Biotech",
    "E-commerce & Retail",
    "Manufacturing",
    "Consulting Services"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Client <span className="text-gradient neuro-text-glow">Success Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-neuro-text-secondary mb-8 leading-relaxed">
              Real feedback from businesses we've helped transform through AI solutions, 
              strategic consulting, and perfect partnership matches.
            </p>
            <Button size="lg" className="neuro-glow" asChild>
              <Link to="/contact">
                Share Your Success
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-neuro-text-secondary max-w-2xl mx-auto">
              Hear directly from business leaders who've experienced transformation through our services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="neuro-card hover:neuro-glow transition-all duration-500 animate-slide-up" 
                    style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-neuro-text-primary">{testimonial.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {testimonial.role}, {testimonial.company}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary/20 text-primary">
                      {testimonial.industry}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/30" />
                    <blockquote className="text-neuro-text-secondary leading-relaxed italic pl-6 mb-4">
                      "{testimonial.testimonial}"
                    </blockquote>
                  </div>
                  
                  <div className="pt-4 border-t border-neuro-bg-tertiary">
                    <p className="text-sm text-primary font-medium">
                      Project Focus: {testimonial.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-neuro-bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Track Record</span>
            </h2>
            <p className="text-xl text-neuro-text-secondary max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to client success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="neuro-card p-8 hover:neuro-glow transition-all duration-300">
                  <h3 className="text-5xl font-bold text-gradient mb-4">{metric.number}</h3>
                  <p className="text-xl text-neuro-text-primary font-semibold mb-2">{metric.label}</p>
                  <p className="text-neuro-text-secondary text-sm">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-xl text-neuro-text-secondary max-w-2xl mx-auto">
              We've successfully delivered solutions across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="neuro-card p-6 text-center hover:neuro-glow transition-all duration-300">
                  <Briefcase className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-neuro-text-primary font-medium">{industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neuro-bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Success Process</span>
            </h2>
            <p className="text-xl text-neuro-text-secondary max-w-2xl mx-auto">
              How we ensure every client achieves their goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="neuro-card p-8 hover:neuro-glow transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold text-neuro-text-primary mb-4">Discovery</h3>
                <p className="text-neuro-text-secondary">
                  We deeply understand your business needs, challenges, and goals to create the perfect strategy.
                </p>
              </div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="neuro-card p-8 hover:neuro-glow transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold text-neuro-text-primary mb-4">Implementation</h3>
                <p className="text-neuro-text-secondary">
                  Our expert team delivers tailored solutions with precision, keeping you informed every step of the way.
                </p>
              </div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="neuro-card p-8 hover:neuro-glow transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold text-neuro-text-primary mb-4">Success</h3>
                <p className="text-neuro-text-secondary">
                  We measure results, provide ongoing support, and ensure your investment delivers lasting value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center neuro-card max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-neuro-text-secondary mb-8">
              Ready to transform your business and become our next success story? 
              Let's start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="neuro-glow" asChild>
                <Link to="/contact">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;