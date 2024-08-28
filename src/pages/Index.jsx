import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Star, Award, Users, Zap, X, ChevronDown, ExternalLink } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);

  const handleGetEarlyAccess = (e) => {
    e.preventDefault();
    toast.success("You've been granted early access!");
    setEmail('');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <header className="py-6 px-4 md:px-8 flex justify-between items-center sticky top-0 bg-purple-800 bg-opacity-90 z-50">
        <h1 className="text-3xl font-bold">
          <span className="text-4xl">S</span>treakmate
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-yellow-300 transition">Features</a></li>
            <li><a href="#testimonials" className="hover:text-yellow-300 transition">Testimonials</a></li>
            <li><a href="#benefits" className="hover:text-yellow-300 transition">Benefits</a></li>
            <li><a href="#faq" className="hover:text-yellow-300 transition">FAQ</a></li>
          </ul>
        </nav>
        <Button className="bg-red-500 hover:bg-red-600 text-white">
          Get Early Access
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section className="text-center mb-24" {...fadeInUp}>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">Improve yourself daily by 1%</h2>
          <p className="text-xl md:text-2xl mb-12">Join StreakMate and unlock your full potential alongside your favorite creators!</p>
          <form onSubmit={handleGetEarlyAccess} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-grow text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white transition">
              Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
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
                  className="bg-white bg-opacity-10 p-8 rounded-lg text-center transform hover:scale-105 transition duration-300"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Sarah K.", role: "Fitness Enthusiast", quote: "StreakMate has completely transformed my workout routine. The daily challenges keep me accountable and motivated!", image: "/placeholder.svg" },
                { name: "Alex M.", role: "Aspiring Developer", quote: "I've learned more in 30 days of coding challenges on StreakMate than I did in months of self-study. The community support is incredible!", image: "/placeholder.svg" },
                { name: "Priya R.", role: "Meditation Practitioner", quote: "The guided meditation challenges have helped me establish a consistent mindfulness practice. I feel more centered and focused in my daily life.", image: "/placeholder.svg" }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-10 p-8 rounded-lg flex flex-col items-center text-center"
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
                className="bg-white bg-opacity-10 p-8 rounded-lg"
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
                { question: "How does StreakMate work?", answer: "StreakMate connects you with creator-led challenges. You join a challenge, post daily updates, and maintain your streak while interacting with a supportive community. Our platform gamifies the process of building habits and achieving goals, making personal growth fun and engaging." },
                { question: "Is StreakMate free to use?", answer: "StreakMate offers both free and premium features. Many challenges are free to join, allowing you to experience the core benefits of our platform. Premium features and certain creator-led challenges may require a subscription or one-time fee, providing access to exclusive content and advanced tools for accelerated growth." },
                { question: "Can I create my own challenges?", answer: "Absolutely! Any user can create challenges on StreakMate. Whether you're a seasoned creator or someone passionate about a particular goal, you can design and share challenges with the community. This feature allows for a diverse range of growth opportunities and lets users inspire others with their unique expertise." },
                { question: "What happens if I break my streak?", answer: "Breaking a streak is a natural part of the growth journey. If you miss a day, you can always start a new streak. Our community is here to support and motivate you to keep going. We provide tools to help you analyze your streak breaks, learn from them, and develop strategies to maintain longer streaks in the future." },
                { question: "How do I interact with creators on the platform?", answer: "Creators on StreakMate can engage with participants through various means, including live Q&A sessions, personalized feedback on challenge submissions, and community forums. The level of interaction may vary depending on the challenge and the creator's approach, but our platform is designed to foster meaningful connections between creators and participants." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-10 p-6 rounded-lg overflow-hidden"
                  initial={{ height: 80 }}
                  whileHover={{ height: "auto" }}
                >
                  <h4 className="text-xl font-semibold mb-2 flex justify-between items-center">
                    {item.question}
                    <ChevronDown className="h-6 w-6" />
                  </h4>
                  <p className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.answer}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="https://streakmate.super.site" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-yellow-300 hover:text-yellow-100 transition">
                View more FAQs on our website
                <ExternalLink className="ml-2 h-4 w-4" />
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
              <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white transition">
                Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="mt-4 text-sm opacity-75">Limited slots available. Don't miss out on this opportunity!</p>
          </motion.section>
        </motion.div>
      </main>

      <footer className="bg-purple-800 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl font-bold mb-4">StreakMate</p>
          <p className="mb-6">Transforming lives, one challenge at a time.</p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="hover:text-yellow-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-yellow-300 transition">Contact Us</a>
          </div>
          <p>&copy; 2024 StreakMate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
