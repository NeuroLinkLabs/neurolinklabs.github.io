import { ArrowRight, Zap, Clock, BarChart, Shield, Bell, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const features = [
    {
      icon: <Workflow className="h-8 w-8 text-primary" />,
      title: "Automated Workflows",
      description: "Streamline repetitive tasks with intelligent automation that learns from your processes."
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Get actionable insights with AI-powered analytics and real-time performance monitoring."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with industry standards."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Real-time Processing",
      description: "Process data in real-time with minimal latency for immediate business decisions."
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Smart Notifications",
      description: "AI-driven alerts and notifications that prioritize what matters most to your business."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Seamless Integration",
      description: "Easy integration with existing tools and platforms through robust APIs and webhooks."
    }
  ];

  const benefits = [
    "Save 60%+ on operational costs",
    "Reduce manual work by up to 80%",
    "Improve decision-making speed by 10x",
    "Scale operations without increasing headcount",
    "24/7 automated operations monitoring"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Coming Soon 🚀
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI Workflow <span className="text-gradient neuro-text-glow">Automation Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-neuro-text-secondary mb-8 leading-relaxed">
              Discover the future of AI-driven automation. Our platform streamlines business processes, 
              optimizes workflows, and provides actionable insights through advanced AI algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="neuro-glow" asChild>
                <Link to="/contact">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-neuro-bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your <span className="text-gradient">Business Processes</span>
              </h2>
              <p className="text-lg text-neuro-text-secondary mb-6 leading-relaxed">
                Whether you're a small startup or a large enterprise, our AI Workflow Automation Platform 
                is designed to help you save time, reduce costs, and boost productivity through intelligent automation.
              </p>
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-neuro-text-primary">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="neuro-glow" asChild>
                <Link to="/contact">
                  Request Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="neuro-card p-8">
                <div className="text-center mb-6">
                  <Zap className="h-16 w-16 text-primary mx-auto mb-4 neuro-glow" />
                  <h3 className="text-2xl font-bold text-gradient">AI-Powered Platform</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-neuro-bg-tertiary rounded-lg">
                    <span className="text-neuro-text-primary">Automation Rate</span>
                    <span className="text-primary font-bold">80%+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-neuro-bg-tertiary rounded-lg">
                    <span className="text-neuro-text-primary">Cost Reduction</span>
                    <span className="text-primary font-bold">60%+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-neuro-bg-tertiary rounded-lg">
                    <span className="text-neuro-text-primary">Processing Speed</span>
                    <span className="text-primary font-bold">10x Faster</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/30 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-neuro-text-secondary max-w-2xl mx-auto">
              Everything you need to automate, optimize, and scale your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="neuro-card hover:neuro-glow transition-all duration-300 animate-slide-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-neuro-text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-neuro-text-secondary">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 bg-neuro-bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center neuro-card max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-lg px-4 py-2">
                🚧 In Development
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-gradient">Waitlist</span>
            </h2>
            <p className="text-xl text-neuro-text-secondary mb-8 leading-relaxed">
              We're crafting the future of AI-powered automation. Join our waitlist to stay updated 
              on our launch and get early access to revolutionary features that will transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="neuro-glow" asChild>
                <Link to="/contact">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <p className="text-neuro-text-secondary mt-6 text-sm">
              ✨ Early access subscribers get 50% off the first year + exclusive beta features
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="text-gradient">Platform</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="neuro-card p-8">
                <h3 className="text-6xl font-bold text-gradient mb-4">80%</h3>
                <p className="text-xl text-neuro-text-primary font-semibold mb-2">Task Automation</p>
                <p className="text-neuro-text-secondary">Reduce manual work and human errors</p>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="neuro-card p-8">
                <h3 className="text-6xl font-bold text-gradient mb-4">60%</h3>
                <p className="text-xl text-neuro-text-primary font-semibold mb-2">Cost Savings</p>
                <p className="text-neuro-text-secondary">Lower operational expenses significantly</p>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="neuro-card p-8">
                <h3 className="text-6xl font-bold text-gradient mb-4">10x</h3>
                <p className="text-xl text-neuro-text-primary font-semibold mb-2">Faster Processing</p>
                <p className="text-neuro-text-secondary">Accelerate decision-making processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;