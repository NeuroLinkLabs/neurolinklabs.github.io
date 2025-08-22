import { ArrowRight, Brain, Zap, Target, Users, BarChart, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "Strategic Consultancy",
      description: "We provide expert guidance on digital transformation, AI integration, and technology roadmaps tailored to your business needs and goals.",
      features: [
        "Digital Transformation Strategy",
        "AI Integration Planning",
        "Technology Roadmap Development",
        "Risk Assessment & Mitigation",
        "ROI Analysis & Projections"
      ],
      highlight: "Transform your business strategy with AI"
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Custom AI Solutions",
      description: "Our team develops bespoke AI tools that automate workflows, enhance productivity, and provide valuable insights from your data.",
      features: [
        "Workflow Automation",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Machine Learning Models"
      ],
      highlight: "Automate and optimize with cutting-edge AI"
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Business Matchmaking",
      description: "We connect companies with the right clients, partners, and tech talent to create synergistic relationships that drive growth and innovation.",
      features: [
        "Client Acquisition",
        "Strategic Partnerships",
        "Tech Talent Sourcing",
        "Investor Connections",
        "Market Expansion Support"
      ],
      highlight: "Connect with the right opportunities"
    }
  ];

  const additionalServices = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Augmentation",
      description: "Scale your development team with our experienced AI and tech professionals."
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Performance Analytics",
      description: "Deep insights into your business metrics and AI solution performance."
    },
    {
      icon: <Cog className="h-8 w-8 text-primary" />,
      title: "Ongoing Support",
      description: "Continuous monitoring, maintenance, and optimization of your AI systems."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-gradient neuro-text-glow">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-neuro-text-secondary mb-8 leading-relaxed">
              We provide comprehensive solutions to help businesses thrive in the digital age, 
              delivering AI-powered innovations that drive real results.
            </p>
            <Button size="lg" className="neuro-glow" asChild>
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`animate-slide-up ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Card className="neuro-card hover:neuro-glow transition-all duration-500 h-full">
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-2xl text-neuro-text-primary mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {service.highlight}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neuro-text-secondary mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-neuro-text-primary">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="neuro-glow" asChild>
                        <Link to="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={`animate-slide-up ${index % 2 === 1 ? 'lg:col-start-1' : ''}`} 
                     style={{ animationDelay: '0.3s' }}>
                  <div className="relative">
                    <div className="neuro-card p-8 text-center">
                      <h3 className="text-3xl font-bold text-gradient mb-4">
                        Service #{index + 1}
                      </h3>
                      <p className="text-neuro-text-secondary text-lg">
                        Discover how our {service.title.toLowerCase()} can transform your business 
                        and drive unprecedented growth.
                      </p>
                    </div>
                    <div className="absolute -z-10 inset-0 bg-primary/5 rounded-2xl transform rotate-3"></div>
                    <div className="absolute -z-20 inset-0 bg-primary/10 rounded-2xl transform -rotate-2 scale-105"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-neuro-bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Additional <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-neuro-text-secondary max-w-2xl mx-auto">
              Comprehensive support to ensure your success at every step
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="neuro-card hover:neuro-glow transition-all duration-300 animate-slide-up" 
                    style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <CardTitle className="text-xl text-neuro-text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-neuro-text-secondary text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center neuro-card max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get <span className="text-gradient">Started</span>?
            </h2>
            <p className="text-xl text-neuro-text-secondary mb-8">
              Let's discuss how our services can help transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="neuro-glow" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;