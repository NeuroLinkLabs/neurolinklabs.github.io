import { ArrowRight, Brain, Users, Target, CheckCircle, Award, Lightbulb, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import teamImage from '@/assets/team-work.jpg';

const About = () => {
  const values = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Innovation First",
      description: "We're passionate about practical innovation that creates real value and drives meaningful change."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that exceed expectations."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Results Driven",
      description: "We focus on measurable outcomes and tangible results that impact your bottom line."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Impact",
      description: "Building solutions that transform industries and create positive change worldwide."
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      text: "AI solutions deployed across multiple industries"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      text: "100% client satisfaction rate in strategic consulting"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      text: "Successfully matched 50+ companies with top tech talent"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      text: "Leading innovations in AI workflow automation"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-gradient neuro-text-glow">NeuroLink Labs</span>
            </h1>
            <p className="text-xl md:text-2xl text-neuro-text-secondary mb-8 leading-relaxed">
              We're passionate about practical innovation. Our mission is to build AI-powered tools 
              that transform industries and connect businesses with top-tier tech talent.
            </p>
            <Button size="lg" className="neuro-glow" asChild>
              <Link to="/contact">
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neuro-bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neuro-text-secondary leading-relaxed">
                  At NeuroLink Labs, we believe that artificial intelligence should be accessible, 
                  practical, and transformative. Our mission is to bridge the gap between cutting-edge 
                  AI technology and real-world business applications.
                </p>
                <p className="text-lg text-neuro-text-secondary leading-relaxed">
                  From startups to enterprises, we're your trusted partner in navigating the digital 
                  world. We deliver solutions that drive real results and create lasting value, 
                  helping businesses scale and connect with the right opportunities.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="neuro-card p-4 text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                    <p className="text-neuro-text-secondary">Successful Projects</p>
                  </div>
                  <div className="neuro-card p-4 text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
                    <p className="text-neuro-text-secondary">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative rounded-2xl overflow-hidden neuro-card">
                <img 
                  src={teamImage} 
                  alt="NeuroLink Labs team collaboration" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neuro-bg-primary/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-neuro-text-primary mb-2">
                    Innovation in Action
                  </h3>
                  <p className="text-neuro-text-secondary">
                    Our team working on cutting-edge AI solutions
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/30 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-neuro-text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="neuro-card hover:neuro-glow transition-all duration-300 animate-slide-up text-center" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <CardTitle className="text-xl text-neuro-text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-neuro-text-secondary">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-neuro-bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We've <span className="text-gradient">Achieved</span>
            </h2>
            <p className="text-xl text-neuro-text-secondary max-w-2xl mx-auto">
              Building a track record of success across industries and technologies
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-6 neuro-card hover:neuro-glow transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">{achievement.icon}</div>
                  <p className="text-neuro-text-primary font-medium">{achievement.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Expertise</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-neuro-text-secondary leading-relaxed">
                  We specialize in transforming complex business challenges into innovative AI-driven solutions. 
                  Our expertise spans across strategic consulting, custom AI development, and business matchmaking.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-neuro-text-primary">Digital Transformation Strategy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-neuro-text-primary">AI Integration & Implementation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-neuro-text-primary">Workflow Automation & Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-neuro-text-primary">Tech Talent Acquisition</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-neuro-text-primary">Strategic Partnership Development</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="neuro-card p-6 text-center">
                  <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-neuro-text-primary mb-2">AI Solutions</h3>
                  <p className="text-neuro-text-secondary text-sm">Custom AI development</p>
                </div>
                <div className="neuro-card p-6 text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-neuro-text-primary mb-2">Strategy</h3>
                  <p className="text-neuro-text-secondary text-sm">Digital transformation</p>
                </div>
                <div className="neuro-card p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-neuro-text-primary mb-2">Talent</h3>
                  <p className="text-neuro-text-secondary text-sm">Tech recruitment</p>
                </div>
                <div className="neuro-card p-6 text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-neuro-text-primary mb-2">Partnerships</h3>
                  <p className="text-neuro-text-secondary text-sm">Business connections</p>
                </div>
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
              Ready to <span className="text-gradient">Innovate</span> Together?
            </h2>
            <p className="text-xl text-neuro-text-secondary mb-8">
              Let's discuss how NeuroLink Labs can help transform your business with AI-powered solutions 
              and strategic partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="neuro-glow" asChild>
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;