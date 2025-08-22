import { ArrowRight, CheckCircle, Users, Zap, Brain, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import heroImage from '@/assets/hero-ai.jpg';
import teamImage from '@/assets/team-work.jpg';

const Home = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Strategic Consultancy",
      description: "Expert guidance on digital transformation, AI integration, and technology roadmaps tailored to your business needs."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Custom AI Solutions",
      description: "Bespoke AI tools that automate workflows, enhance productivity, and provide valuable insights from your data."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Business Matchmaking",
      description: "Connect with the right clients, partners, and tech talent to create synergistic relationships that drive growth."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="AI Technology Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neuro-bg-primary/90 to-neuro-bg-primary/70"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-primary/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Connecting <span className="text-gradient neuro-text-glow">Innovation</span>
              <br />
              with <span className="text-gradient neuro-text-glow">Enterprise</span>
            </h1>
            <p className="text-xl md:text-2xl text-neuro-text-secondary mb-8 leading-relaxed">
              At NeuroLink Labs, we build AI-powered solutions that transform how businesses operate, 
              helping companies scale and connect with the right talent and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="neuro-glow" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Our Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-16 bg-neuro-bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neuro-text-secondary uppercase tracking-wider text-sm mb-4">
            Trusted By Innovative Companies
          </p>
          <p className="text-neuro-text-primary text-lg">
            We're working on partnerships—stay tuned for updates!
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-neuro-text-secondary max-w-2xl mx-auto">
              We provide comprehensive solutions to help businesses thrive in the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="neuro-card hover:neuro-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-neuro-text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-neuro-text-secondary mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary" asChild>
                    <Link to="/services">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-neuro-bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neuro-text-secondary">
                  At <strong className="text-primary">NeuroLink Labs</strong>, we're passionate about practical innovation. 
                  Our mission is to build AI-powered tools that transform industries and connect businesses 
                  with top-tier tech talent.
                </p>
                <p className="text-lg text-neuro-text-secondary">
                  From startups to enterprises, we're your trusted partner in navigating the digital world, 
                  delivering solutions that drive real results and create lasting value.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-neuro-text-primary">AI Integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-neuro-text-primary">Digital Transformation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-neuro-text-primary">Talent Matching</span>
                  </div>
                </div>
                <Button size="lg" className="neuro-glow" asChild>
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative rounded-2xl overflow-hidden neuro-card">
                <img 
                  src={teamImage} 
                  alt="Team working on AI solutions" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neuro-bg-primary/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/30 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center neuro-card max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Innovate</span>?
            </h2>
            <p className="text-xl text-neuro-text-secondary mb-8">
              Let's work together to transform your business with AI and tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="neuro-glow" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;