import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Star, Award, Users, Zap, X, ChevronDown, ExternalLink, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [email, setEmail] = useState('');
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);

  useEffect(() => {
    // Add canonical link
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = 'https://streakmate.in';
    document.head.appendChild(link);

    // Clean up function
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleGetEarlyAccess = (e) => {
    e.preventDefault();
    navigate('/early-access', { state: { email } });
  };

  const handleExternalEarlyAccess = () => {
    window.open('https://tally.so/r/nGLbMO', '_blank');
  };

  const handleNavbarEarlyAccess = () => {
    navigate('/early-access');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 bg-white z-50">
        <h1 className="text-3xl font-bold" style={{ color: '#346FF5' }}>
          <span className="text-4xl">S</span>treakmate
        </h1>
        <Button 
          className="bg-[#FF0000] hover:bg-red-700 text-white font-bold py-2 px-4"
          onClick={() => window.open('https://tally.so/r/nGLbMO', '_blank')}
        >
          <strong>Get Early Access</strong>
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section className="text-center mb-24" {...fadeInUp}>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">Improve yourself <span className="text-[#FF0000]">daily</span> by 1%</h2>
          <p className="text-xl md:text-2xl mb-24 mt-8">Join Streakmate to transform your life with your favorite creators!</p>
          <form onSubmit={handleGetEarlyAccess} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-grow text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="button" 
              className="bg-[#FF0000] hover:bg-red-700 text-white transition font-bold"
              onClick={handleExternalEarlyAccess}
            >
              <strong>Get Early Access</strong> <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="mt-4 text-sm opacity-75">Be among the first 1000 to get exclusive lifetime benefits!</p>
        </motion.section>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <motion.section id="features" className="mb-24" custom={0} animate={controls}>
            <h3 className="text-4xl font-bold mb-12 text-center">Why StreakMate?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Star className="h-12 w-12 mb-4" />, title: "Creator-Led Challenges", description: "Learn from the best in your field and get inspired daily" },
                { icon: <Award className="h-12 w-12 mb-4" />, title: "Daily Streaks", description: "Build habits that last a lifetime with our streak system" },
                { icon: <Users className="h-12 w-12 mb-4" />, title: "Supportive Community", description: "Connect with like-minded individuals and grow together" },
                { icon: <Zap className="h-12 w-12 mb-4" />, title: "Gamified Progress", description: "Earn rewards and level up as you achieve your goals" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-8 rounded-lg text-center transform hover:scale-105 transition duration-300 shadow-md"
                  whileHover={{ y: -5 }}
                >
                  {feature.icon}
                  <h4 className="text-2xl font-semibold mb-3">{feature.title}</h4>
                  <p className="text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section id="testimonials" className="mb-24" custom={1} animate={controls}>
            <h3 className="text-4xl font-bold mb-12 text-center">What Our Early Users Say</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Sarah K.", role: "Fitness Enthusiast", quote: "Streakmate has completely transformed my workout routine. The daily challenges keep me accountable and motivated!", image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80" },
                { name: "Alex M.", role: "Aspiring Developer", quote: "I've learned more in 30 days of coding challenges on Streakmate than I did in months of self-study. The community support is incredible!", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80" },
                { name: "Priya R.", role: "Meditation Practitioner", quote: "The guided meditation challenges have helped me establish a consistent mindfulness practice. I feel more centered and focused in my daily life.", image: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80" },
                { name: "Mike L.", role: "Entrepreneur", quote: "Streakmate's business challenges have given me the structure I needed to grow my startup. The insights from creators are invaluable!", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80" },
                { name: "Emma S.", role: "Language Learner", quote: "I've made more progress in my Spanish in 2 months with Streakmate than in a year of casual study. The daily practice really works!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80" },
                { name: "Tom H.", role: "Aspiring Chef", quote: "The cooking challenges on Streakmate have expanded my culinary skills tremendously. I'm now confident in trying new recipes!", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80" }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-8 rounded-lg flex flex-col items-center text-center shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4 mx-auto object-cover" />
                  <p className="mb-4 italic text-lg">"{testimonial.quote}"</p>
                  <div className="font-semibold text-xl">{testimonial.name}</div>
                  <div className="text-sm opacity-75">{testimonial.role}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section id="benefits" className="mb-24" custom={2} animate={controls}>
            <h3 className="text-4xl font-bold mb-12 text-center">Benefits of Joining StreakMate</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="bg-gray-100 p-8 rounded-lg shadow-md"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-3xl font-semibold mb-6">What You Gain:</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-lg"><ArrowRight className="h-6 w-6 mr-4 text-green-400" /> Personalized growth journey tailored to your goals</li>
                  <li className="flex items-center text-lg"><ArrowRight className="h-6 w-6 mr-4 text-green-400" /> Access to exclusive content from top creators</li>
                  <li className="flex items-center text-lg"><ArrowRight className="h-6 w-6 mr-4 text-green-400" /> Daily accountability and motivation boost</li>
                  <li className="flex items-center text-lg"><ArrowRight className="h-6 w-6 mr-4 text-green-400" /> Networking with like-minded individuals</li>
                  <li className="flex items-center text-lg"><ArrowRight className="h-6 w-6 mr-4 text-green-400" /> Trackable progress and tangible achievements</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white bg-opacity-10 p-8 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-3xl font-semibold mb-6">What You Might Miss Out:</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-lg"><X className="h-6 w-6 mr-4 text-red-400" /> Structured approach to personal development</li>
                  <li className="flex items-center text-lg"><X className="h-6 w-6 mr-4 text-red-400" /> Motivation from a supportive community</li>
                  <li className="flex items-center text-lg"><X className="h-6 w-6 mr-4 text-red-400" /> Direct interaction with your favorite creators</li>
                  <li className="flex items-center text-lg"><X className="h-6 w-6 mr-4 text-red-400" /> Fun and engaging self-improvement process</li>
                  <li className="flex items-center text-lg"><X className="h-6 w-6 mr-4 text-red-400" /> Opportunity to form life-changing habits</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          <motion.section id="faq" className="mb-24" custom={3} animate={controls}>
            <h3 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {[
                { question: "What is StreakMate?", answer: "StreakMate is the world's first social media platform designed to help you grow alongside your favorite creators. It allows you to join daily challenges, track your progress, and share your journey through video updates. It's a community-driven platform where self-improvement meets social engagement." },
                { question: "How is StreakMate different from other Social Media Apps?", answer: "Unlike traditional social media, where you passively consume content, StreakMate encourages active participation. You join or create challenges, share your progress, and engage with creators and other users in a meaningful way. It's not just about watching others succeed—it's about taking action and achieving your own goals." },
                { question: "How can I meet my Favorite Creator?", answer: "By participating in challenges on StreakMate, you can earn exclusive rewards, including the chance to meet your favorite creators. Consistently engaging with challenges and staying active on the platform increases your chances of unlocking these special opportunities." },
                { question: "Can I earn money through this app?", answer: "Yes, StreakMate offers various ways to earn money, such as through successful challenge completions, earning exclusive rewards, brand deals (we bring them to you) or potentially monetizing your own content as you grow within the platform." },
                { question: "Is it Free?", answer: "Yes, StreakMate is free to join and use. However, there may be premium features or exclusive content that can be unlocked through participation, in-app purchases, or special rewards." },
                { question: "Most Important! When is the Launch of the App?", answer: "The official launch date for StreakMate will be announced soon. By joining the waitlist, you'll be among the first to know and will secure your spot to start your journey as soon as the app goes live." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg overflow-hidden shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className="text-base sm:text-lg md:text-xl font-semibold text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm sm:text-base md:text-lg">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="https://tally.so/r/3jLRKY" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 hover:text-blue-700 transition font-semibold underline text-lg">
                View more FAQs on our website
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.section>

          <motion.section className="text-center mb-24" custom={4} animate={controls}>
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Life?</h3>
            <p className="text-xl mb-8">Get early access to StreakMate now and be part of the revolution in personal growth!</p>
            <form onSubmit={handleGetEarlyAccess} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-grow text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="button" 
                className="bg-[#FF0000] hover:bg-red-700 text-white transition font-bold"
                onClick={() => window.open('https://tally.so/r/nGLbMO', '_blank')}
              >
                <strong>Get Early Access</strong> <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="mt-4 text-sm opacity-75">Limited slots available. Don't miss out on this opportunity!</p>
          </motion.section>
        </motion.div>
      </main>

      <footer className="bg-gray-100 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl font-bold mb-4">StreakMate</p>
          <p className="mb-6">Transforming lives, 1% daily.</p>
          <Button 
            className="mb-6 bg-[#346FF5] hover:bg-blue-700 text-white transition font-bold"
            onClick={() => window.open('https://tally.so/r/wzZRZq', '_blank')}
          >
            Contact Us
          </Button>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition"><Twitter className="h-6 w-6" /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition"><Instagram className="h-6 w-6" /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition"><Linkedin className="h-6 w-6" /></a>
            <a href="https://github.com/streakmate/streakmate.github.io" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition"><Github className="h-6 w-6" /></a>
          </div>
          <p>&copy; 2024 StreakMate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
